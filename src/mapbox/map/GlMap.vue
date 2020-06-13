<template>
  <!-- class="mgl-map-wrapper" -->
  <div
    id="map-container"
    :class="mapContainerClass + ' mgl-map-wrapper'"
  >
    <div
      v-once
      :id="container"
      ref="container"
    />
    <slot v-if="initialized" />
  </div>
</template>

<script>
import withEvents from "../lib/withEvents";
import mapEvents from "./events";
import options from "./options";
import withWatchers from "./mixins/withWatchers";
import withPrivateMethods from "./mixins/withPrivateMethods";
import withAsyncActions from "./mixins/withAsyncActions";

export default {
  name: "GlMap",

  mixins: [ withWatchers, withAsyncActions, withPrivateMethods, withEvents ],

  props: {
    mapboxGl: {
      type: Object,
      default: null,
    },
    ...options,
  },

  provide() {
    // console.log('GlMap.vue provide is running, this.mapbox:', this.mapbox);
    const self = this;
    return {
      get mapbox() {
        // console.log('GlMap.vue provide mapbox running')
        return self.mapbox;
      },
      get map() {
        // console.log('GlMap.vue provide map running')
        return self.map;
      },
      get actions() {
        // console.log('GlMap.vue provide actions running')
        return self.actions;
      },
    };
  },

  data() {
    return {
      initial: true,
      initialized: false,
    };
  },

  computed: {
    cyclomediaActive() {
      let value;
      if (this.$store.state.cyclomedia) {
        value = this.$store.state.cyclomedia.active;
      }
      return value;
    },
    pictometryActive() {
      let value;
      if (this.$store.state.pictometry) {
        value = this.$store.state.pictometry.active;
      }
      return value;
    },
    picOrCycloActive() {
      if (this.cyclomediaActive || this.pictometryActive) {
        return true;
      }
      return false;
    },
    mapContainerClass() {
      let value;
      if (this.$config) {
        if (this.picOrCycloActive && (this.$config.cyclomedia.orientation === 'horizontal' || this.$config.pictometry.orientation === 'horizontal')) {
          if (this.$config.map.containerClassWCyclo) {
            value = this.$config.map.containerClassWCyclo;
          } else {
            value = 'height50';
          }
        } else if (this.picOrCycloActive) {
          if (this.$config.map.containerClassWCyclo) {
            value = this.$config.map.containerClassWCyclo;
          } else {
            value = 'height50';
          }
        } else if (this.$config.map.containerClass) {
          value = this.$config.map.containerClass;
        } else {
          value = 'map-container';
        }
      }
      return value;
    },
    loaded() {
      return this.map ? this.map.loaded() : false;
    },
    version() {
      return this.map ? this.map.version : null;
    },
    isStyleLoaded() {
      return this.map ? this.map.isStyleLoaded() : false;
    },
    areTilesLoaded() {
      return this.map ? this.map.areTilesLoaded() : false;
    },
    isMoving() {
      return this.map ? this.map.isMoving() : false;
    },
    canvas() {
      return this.map ? this.map.getCanvas() : null;
    },
    canvasContainer() {
      return this.map ? this.map.getCanvasContainer() : null;
    },
    images() {
      return this.map ? this.map.listImages() : null;
    },
  },

  created() {
    this.map = null;
    this.propsIsUpdating = {};
    this.mapboxPromise = this.mapboxGl
      ? Promise.resolve(this.mapboxGl)
      : import("mapbox-gl");
    console.log('end of GlMap.vue created');
  },

  mounted() {
    // this.$props.accessToken = process.env.VUE_APP_MAPBOX_ACCESSTOKEN;
    console.log('GlMap.vue mounted, this:', this);
    this.$_loadMap().then(map => {
      console.log('inside $_loadMap then, map:', map);
      this.map = map;
      // this.$store.commit('setMap', map);
      if (this.RTLTextPluginUrl !== undefined) {
        this.mapbox.setRTLTextPlugin(
          this.RTLTextPluginUrl,
          this.$_RTLTextPluginError,
        );
      }
      const eventNames = Object.keys(mapEvents);
      this.$_bindMapEvents(eventNames);
      this.$_registerAsyncActions(map);
      this.$_bindPropsUpdateEvents();
      this.initial = false;
      this.initialized = true;

      // console.log('still inside $_loadMap 2');
      this.testMethod(map);
      // console.log('still inside $_loadMap 3');

      this.$emit("load", { map, component: this });


      // console.log('still going, this.$children.length:', this.$children.length);
      // for (let child of this.$children) {
      //   console.log('child:', child);
      //   // REVIEW it seems weird to pass children their own props. trying to
      //   // remember why this was necessary... binding issue?
      //   child.parentMounted(this, child.$props);
      // }

    });


    // this.$nextTick(() => {
    //   console.log('end of GlMap mounted, this.$children.length:', this.$children.length);
    // });
  },

  beforeDestroy() {
    this.$nextTick(() => {
      if (this.map) {
        this.map.remove();
      }
    });
  },

  methods: {
    testMethod(map) {
      // const map = this.$store.state.map.map;
      this.$nextTick(() => {
        // console.log('testMethod, map:', map);
        // console.log('testMethod 2, this.$children.length:', this.$children.length, 'this.$children:', this.$children);
        for (let child of this.$children) {
          // console.log('child:', child);
          if (child.parentMounted) {
            child.parentMounted(this, child.$props);
          }
        }
      });
    },
  },
};
</script>

<style>

.map-container {
  height: 100%;
}

.height50 {
  height: 50%;
}

.mgl-map-wrapper {
  /* height: 100%; */
  position: relative;
  width: 100%;
}

.mgl-map-wrapper .mapboxgl-map {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
}
</style>
