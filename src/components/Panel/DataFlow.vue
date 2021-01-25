<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      timeouts: {
        temp: null,
      },
      isRefreshingState: false,
      io: {
        binary_button: 'obin',
        open_close_button: 'ibin',
        tap_button: 'itmp',
        percent_button: 'iadc',
        bar_button: 'opwm',
        temp_regulator_button: 'opwm',
      },
      floats: ['tap_button', 'percent_button', 'bar_button', 'temp_regulator_button'],
      hasActiveStatus: [
        'bar_button', 'temp_regulator_button', 'binary_button', 'open_close_button',
      ],
    };
  },
  computed: {
    groups() { return this.$store.state.groups; },
    isFavouritePage() { return this.$route.name === 'Favourites'; },
    currentWidgets() { return this.$store.state.currentWidgets; },
    widgets() { return this.$store.state.widgets; },
    isSendingData() { return this.$store.state.isSendingData; },
    controllersIp() {
      const ips = this.widgets.map((w) => w.controller_ip);
      return [...new Set(ips)];
    },
  },
  watch: {
    isFavouritePage(isFavouritePage) {
      if (isFavouritePage || this.groups.length) {
        this.$store.commit('setCurrentWidgets', isFavouritePage);
      }
      if (!this.groups.length) {
        this.$store.commit('clearCurrentWidgets');
        this.getGroups();
      }
    },
    widgets(w) {
      if (!this.isRefreshingState && w.length) this.getControllerState();
    },
  },
  created() {
    this.getWidgets();
    this.getTemperature();
    this.getGroups();
  },
  beforeUnmount() {
    Object.values(this.timeouts).forEach((timeout) => {
      if (timeout) clearTimeout(timeout);
    });
  },
  methods: {
    getTemperature() {
      this.$server.get('', { params: { mode: 'get_outdoor_temp' } })
        .then((r) => {
          if (/\d+(\.\d+)/.test(r.data.value)) {
            this.$store.commit('setTemperature', Math.round(r.data.value / 100));
          }
        })
        .finally(() => {
          setTimeout(() => {
            this.getTemperature();
          }, 300000);
        });
    },
    getWidgets() {
      this.$server.get('', { params: { mode: 'get_widgets' } })
        .then((r) => {
          if ('answer' in r.data) {
            const widgets = r.data.answer.map((widget) => {
              const w = widget;
              switch (widget.widget_type_naim) {
                case 'binary_button':
                case 'open_close_button':
                  w.type = 'switcher';
                  break;
                case 'bar_button':
                  w.type = 'range';
                  w.value = parseInt(widget.state, 10);
                  break;
                case 'percent_button':
                  w.type = 'string';
                  w.value = parseInt(widget.state, 10);
                  break;
                case 'tap_button':
                  w.type = 'string';
                  w.value = parseInt(widget.state, 10);
                  break;
                case 'temp_regulator_button':
                  w.type = 'dimmer';
                  w.value = parseInt(widget.state, 10);
                  w.min = parseInt(widget.min, 10);
                  w.max = parseInt(widget.max, 10);
                  break;
                default:
                  return null;
              }
              w.name = widget.naim;
              w.group = widget.group_naim;
              w.isActive = widget.state.length && parseInt(widget.state, 10) > 0;
              w.isFavourite = widget.favorite === '1';
              return w;
            }).filter((widget) => widget);
            this.$store.dispatch('setWidgets', { widgets, isFavouritePage: this.isFavouritePage });
          }
        });
    },
    getGroups() {
      this.$server.get('', { params: { mode: 'get_groups' } })
        .then((r) => {
          if ('answer' in r.data) {
            this.$store.dispatch('setGroups', {
              groups: r.data.answer,
              isFavouritePage: this.isFavouritePage,
            });
          }
        });
    },
    getControllerState() {
      this.isRefreshingState = true;
      const promises = [];
      const states = {};
      const controllersIp = this.clone(this.controllersIp);
      controllersIp.forEach((ip) => {
        if (!ip || !ip.length) return;
        const promise = new Promise((resolve) => {
          this.$controller.post(`${ip}/api/state`, JSON.stringify({ device: 0 }))
            .then((r) => {
              resolve(r.data);
            })
            .catch(() => {
              resolve(null);
            });
        });
        promise.then((state) => {
          states[ip] = state;
        });
        promises.push(promise);
      });
      Promise.all(promises).then(() => {
        const hasNoData = controllersIp.find((ip) => !ip || !ip.length)
          || Object.values(states).indexOf(null) >= 0;
        if (hasNoData) {
          new Promise((resolve) => {
            this.$server.get('', { params: { mode: 'get_widgets' } })
              .then((r) => resolve(r.data.answer))
              .catch(() => resolve([]));
          }).then((widgets) => {
            this.parseData({ controllers: states, server: widgets });
          });
        } else {
          this.parseData({ controllers: states, server: [] });
        }
      });
    },
    parseData(states) {
      this.widgets.forEach((w) => {
        if (w.controller_ip && w.controller_ip.length) {
          const controllerState = states.controllers[w.controller_ip];
          if (controllerState && Object.keys(controllerState).length) {
            const output = w.vuh_number - 1;
            if (output >= controllerState[this.io[w.widget_type_naim]].length) return;
            let value = controllerState[this.io[w.widget_type_naim]][output];
            if (this.floats.includes(w.widget_type_naim)) {
              value = Math.round(value / 100);
              this.$store.commit('setWidgetParams', { indexes: w.indexes, value });
            }
            if (this.hasActiveStatus.includes(w.widget_type_naim)) {
              const isActive = !!value;
              this.$store.commit('setWidgetParams', { indexes: w.indexes, isActive });
            }
          } else if (states.server.length) {
            const widget = states.server.find((wt) => (
              wt.widget_type_naim === w.widget_type_naim
            ));
            if (!widget) return;
            if (this.floats.includes(w.widget_type_naim)) {
              const value = parseInt(widget.state, 10);
              this.$store.commit('setWidgetParams', { indexes: w.indexes, value });
            } else {
              const isActive = widget.state === '1';
              this.$store.commit('setWidgetParams', { indexes: w.indexes, isActive });
            }
          }
        }
      });
      if (this.isSendingData) {
        const unwatch = this.$watch('isSendingData', (isSendingData) => {
          if (!isSendingData) {
            unwatch();
            this.getControllerState();
          }
        });
      } else {
        // setTimeout(() => {
        //   this.getControllerState();
        // }, 1000);
      }
    },
  },
};
</script>
