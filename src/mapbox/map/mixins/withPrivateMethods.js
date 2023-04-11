import { isMapboxURL, transformMapboxUrl } from '../../../../node_modules/maplibregl-mapbox-request-transformer';
// console.log('isMapboxURL:', isMapboxURL);

export default {
  methods: {
    $_updateSyncedPropsFabric(prop, data) {
      return () => {
        this.propsIsUpdating[prop] = true;
        let info = typeof data === "function" ? data() : data;
        return this.$emit(`update:${prop}`, info);
      };
    },

    $_bindPropsUpdateEvents() {
      const syncedProps = [
        {
          events: [ "moveend" ],
          prop: "center",
          getter: this.map.getCenter.bind(this.map),
        },
        {
          events: [ "zoomend" ],
          prop: "zoom",
          getter: this.map.getZoom.bind(this.map),
        },
        {
          events: [ "rotate" ],
          prop: "bearing",
          getter: this.map.getBearing.bind(this.map),
        },
        {
          events: [ "pitch" ],
          prop: "pitch",
          getter: this.map.getPitch.bind(this.map),
        },
        // TODO: make 'bounds' synced prop
        // { events: ['moveend', 'zoomend', 'rotate', 'pitch'], prop: 'bounds', getter: this.map.getBounds.bind(this.map) }
      ];
      syncedProps.forEach(({ events, prop, getter }) => {
        events.forEach(event => {
          if (this.$listeners[`update:${prop}`]) {
            this.map.on(event, this.$_updateSyncedPropsFabric(prop, getter));
          }
        });
      });
    },

    $_loadMap() {
      // console.log('$_loadMap is running');
      return this.mapboxPromise.then(mapbox => {
        // console.log('inside $_loadMap then');
        this.mapbox = mapbox.default ? mapbox.default : mapbox;
        return new Promise(resolve => {
          if (this.accessToken) {
            this.mapbox.accessToken = this.accessToken;
          }
          // console.log('inside $_loadMap, about to create map, this.$refs.container:', this.$refs.container, 'this.$config.mapboxKey:', this.$config.mapboxKey);
          
          const transformRequest = (url, resourceType) => {
            if (isMapboxURL(url)) {
              return transformMapboxUrl(url, resourceType, this.$config.mapboxKey)
            }
            
            // Do any other transforms you want
            return {url}
          }
          
          const map = new this.mapbox.Map({
            ...this._props,
            container: this.$refs.container,
            style: this.mapStyle,
            transformRequest,
          });
          // console.log('inside $_loadMap, map:', map);
          this.$emit("preload", { map, component: this });
          map.on("load", function() {
            // console.log('inside map.on("load")');
            resolve(map);
          });
        });
      });
    },

    $_RTLTextPluginError(error) {
      this.$emit("rtl-plugin-error", { map: this.map, error: error });
    },

    $_bindMapEvents(events) {
      Object.keys(this.$listeners).forEach(eventName => {
        if (events.includes(eventName)) {
          this.map.on(eventName, this.$_emitMapEvent);
        }
      });
    },

    $_unbindEvents(events) {
      events.forEach(eventName => {
        this.map.off(eventName, this.$_emitMapEvent);
      });
    },
  },
};
