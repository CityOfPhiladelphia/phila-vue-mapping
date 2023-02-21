<template>
  <div
    id="cyclomedia-container"
    :class="widgetClass"
  >
    <!-- class="cyclo-div" -->
    <div
      v-if="isMobileOrTablet === false && popoutAble === true"
      id="inCycloDiv"
      :style="{ right: popoutPosition }"
      @click="popoutClicked"
    >
      <font-awesome-icon
        icon="external-link-alt"
        class="popout-icon"
      />
    </div>
    <slot />
    <div
      id="cycloviewer"
      ref="cycloviewer"
      class="panoramaViewerWindow"
    />
  </div>
</template>

<script>
import proj4 from 'proj4';

export default {
  name: 'CyclomediaWidget',
  props: [
    'screenPercent',
    'orientation',
  ],
  data() {
    return {
      'docWidth': 0,
      'divWidth': 0,
      'popoutPosition': 0,
    };
  },
  computed: {
    isMobileOrTablet() {
      return this.$store.state.isMobileOrTablet;
    },
    fullScreenMapEnabled() {
      return this.$store.state.fullScreenMapEnabled;
    },
    fullScreenTopicsEnabled() {
      return this.$store.state.fullScreenTopicsEnabled;
    },
    popoutAble() {
      let answer;
      if (this.$config.cyclomedia.popoutAble === false) {
        answer = false;
      } else {
        answer = true;
      }
      return answer;
    },
    cyclomediaInitializationBegun() {
      return this.$store.state.cyclomedia.initializationBegun;
    },
    cyclomediaInitializationComplete() {
      return this.$store.state.cyclomedia.initializationComplete;
    },
    cyclomediaActive() {
      return this.$store.state.cyclomedia.active;
    },
    pictometryActive() {
      return this.$store.state.pictometry.active;
    },
    widgetClass() {
      let value;

      if (this.$store.state.fullScreenCycloEnabled || this.$props.orientation === 'full-screen') {
        value = "medium-24 small-24 height100 fullScreen-cyclo";
      } else if (this.$props.orientation === 'vertical') {
        if (this.$store.state.leftPanel) {
          value = "medium-24 small-24 height50";
        } else {
          value = "medium-12 small-24 height100";
        }
      } else if (this.$props.orientation === 'horizontal') {
        value = 'small-24 medium-12 height100';
      } else {
        if (this.pictometryActive) {
          value = 'medium-16 large-16 height50 columns';
        } else {
          value = 'medium-24 large-24 height50 columns';
        }
      }

      if (this.fullScreenTopicsEnabled) {
        value += ' full-topics-open';
      }

      // if (this.$props.orientation === 'horizontal') {
      //   value = 'height50';
      // } else {
      //   value = 'cyclo-div';
      // }

      return value;
    },
    locForCyclo() {
      // console.log('computing locForCyclo');
      const geocodeData = this.$store.state.geocode.data;
      // const map = this.$store.state.map.map;
      if (geocodeData) {
        return [ geocodeData.geometry.coordinates[1], geocodeData.geometry.coordinates[0] ];
      }
      return [];
    },
    latLngFromMap() {
      return this.$store.state.cyclomedia.latLngFromMap;
    },
    mapCenter() {
      return this.$store.state.map.center;
    },
    navBarOpen() {
      return this.$store.state.cyclomedia.navBarOpen;
    },
    projection4326() {
      return "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
    },
    projection2272() {
      return "+proj=lcc +lat_1=40.96666666666667 +lat_2=39.93333333333333 +lat_0=39.33333333333334 +lon_0=-77.75 +x_0=600000 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";
    },
    // surfaceCursorOn() {
    //   return this.$store.state.cyclomedia.surfaceCursorOn;
    // }
  },
  watch: {
    fullScreenMapEnabled() {
      this.setDivWidth();
    },
    // locForCyclo(newCoords) {
    //   // console.log('watch locForCyclo is firing, setNewLocation running with newCoords:', newCoords);
    //   if (newCoords.length && this.cyclomediaInitializationComplete) {
    //     this.setNewLocation(newCoords);
    //   }
    // },
    // latLngFromMap(newCoords) {
    //   // console.log('watch latLngFromMap is firing, setNewLocation running with newCoords:', newCoords);
    //   if (this.cyclomediaInitializationComplete) {

    //     if (Array.isArray(newCoords)) {
    //       // console.log('it is an array');
    //       this.setNewLocation([ newCoords[1], newCoords[0] ]);
    //     } else {
    //       // console.log('it is not an array');
    //       this.setNewLocation([ newCoords.lat, newCoords.lng ]);
    //     }
    //   }
    // },
    // docWidthComp() {
    //   console.log('docWidth changed');
    // }
    cyclomediaInitializationBegun() {
      console.log('watch cyclomediaInitializationBegun is running');
      StreetSmartApi.init({
        targetElement: this.$refs.cycloviewer,
        username: this.$config.cyclomedia.username,
        password: this.$config.cyclomedia.password,
        apiKey: this.$config.cyclomedia.apiKey,
        // srs: 'EPSG:4326',
        srs: 'EPSG:2272',
        locale: 'en-us',
        addressSettings: {
          locale: 'en-us',
          database: 'CMDatabase',
        },
      }).then (
        () => {
          // get map center and set location
          let latLng;
          // console.log('in cyclomediaInitializationBegun, this.$store.state.cyclomedia.latLngFromMap:', this.$store.state.cyclomedia.latLngFromMap);
          if (this.$store.state.cyclomedia.latLngFromMap) {
            latLng = this.$store.state.cyclomedia.latLngFromMap;
          } else {
            latLng = [ 39.953338, -75.163471 ];
          }
          this.$store.commit('setCyclomediaInitilizationComplete', true);
          this.setNewLocation([ latLng[0], latLng[1] ]);
        },
        err => {
          console.log('Api: init: failed. Error: ', err);
        },
      );
      window.addEventListener('resize', this.setDivWidth);
    },
    // cyclomediaActive(newActiveStatus) {
    //   console.log('cyclomediaActive watch is firing');
    //   this.setDivWidth();
    //   if (newActiveStatus === true && this.cyclomediaInitializationComplete) {
    //     this.setNewLocation([ this.latLngFromMap[1], this.latLngFromMap[0] ]);
    //   }
    // },
  },
  mounted() {
    console.log('cyclomedia widget mounted');
    this.$emit('cyclomedia-widget-mounted');
  },
  updated() {
    // console.log('cyclomedia updated running');
    // TODO find a better way to get the image to update and not be stretched
    // const viewer = this.$store.state.cyclomedia.viewer;
    if (this.cyclomediaActive) {
      if (window.panoramaViewer) {
        window.panoramaViewer.rotateRight(0.0000001);
      }
    }
    this.setDivWidth();
  },
  methods: {
    setDivWidth() {
      // console.log('Cyclomedia Widget setDivWidth is running');
      const docWidth = document.body.clientWidth;
      this.docWidth = docWidth;
      const el = document.getElementById('cyclomedia-container');
      const divStyle = window.getComputedStyle(el);
      const divWidth = parseFloat(divStyle.getPropertyValue('width').replace('px', ''));
      this.divWidth = divWidth;
      let appName = this.$store.state.appName;
      // console.log('setDivWidth is running, appName:', appName, 'docWidth:', docWidth, 'divWidth', divWidth, 'this.$props.screenPercent:', this.$props.screenPercent);
      let answer;
      if (appName !== 'pde' && this.fullScreenMapEnabled || appName !== 'pde' && docWidth < 750) {
        // console.log('setDivWidth is running, first option');
        answer = docWidth - divWidth + 'px';
      } else {
        // console.log('setDivWidth is running, second option');
        // answer = docWidth - (docWidth/this.$props.screenPercent + divWidth) + 'px';
        answer = 0;
      }
      // console.log('setDivWidth, answer:', answer);
      this.popoutPosition = answer;
      // return width;
    },
    setNewLocation(coords) {
      console.log('cyclomedia setNewLocation is running using', coords);
      if (!coords) {
        return;
      }
      const viewerType = StreetSmartApi.ViewerType.PANORAMA;
      const coords2272 = proj4(this.projection4326, this.projection2272, [ coords[1], coords[0] ]);
      // StreetSmartApi.open(center.lng + ',' + center.lat, {
      // StreetSmartApi.open(coords[1] + ',' + coords[0], {
      // if (this.cyclomediaInitializationBegun) {
      StreetSmartApi.open(coords2272[0] + ',' + coords2272[1], {
        viewerType: viewerType,
        srs: 'EPSG:2272',
        // srs: 'EPSG:4326',
        panoramaViewer: {
          closable: false,
          maximizable: false,
        },
      }).then (
        function(result) {
          // console.log('StreetSmartApi2, result:', result);
          const viewer = result[0];
          const widget = this;
          // console.log('Created component through API:', result, 'widget:', widget, 'viewer:', viewer);
          if (viewer) {
            const expanded = viewer.getNavbarExpanded();
            // console.log('expanded:', expanded);
            viewer.toggleNavbarExpanded(widget.navBarOpen);
            viewer.toggleButtonEnabled('panorama.elevation', false);
            viewer.toggleButtonEnabled('panorama.reportBlurring', false);

            for (let overlay of viewer.props.overlays) {
              if (overlay.id === 'surfaceCursorLayer') {
                if (overlay.visible === true) {
                  viewer.toggleOverlay(overlay);
                }
              }
            }

            if (!this.$config.cyclomedia.measurementAllowed || this.$config.cyclomedia.measurementAllowed === 'false') {
              StreetSmartApi.removeOverlay('measurementLayer');
              viewer.toggleButtonEnabled('panorama.measure', false);
            }

            viewer.on('VIEW_CHANGE', function(e) {
              // console.log('on VIEW_CHANGE fired, type:', e.type, 'detail:', e.detail);
              if (e.detail.yaw !== widget.$store.state.cyclomedia.orientation.yaw ||
                    viewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz
              ) {
                // console.log('VIEW_CHANGE first if, widget.$store.state.cyclomedia.orientation.xyz:', widget.$store.state.cyclomedia.orientation.xyz);
                // console.log('on VIEW_CHANGE fired with yaw change, viewer.props.orientation:', viewer.props.orientation);
                widget.sendOrientationToStore(e.detail, viewer.props.orientation.xyz);
              } else if (viewer.getNavbarExpanded() !== this.navBarOpen) {
                // console.log('VIEW_CHANGE second if');
                widget.$store.commit('setCyclomediaNavBarOpen', viewer.getNavbarExpanded());
              }
            });

            viewer.on('VIEW_LOAD_END', function(e) {
              // console.log('on VIEW_LOAD_END fired, type:', e.type, 'e:', e, 'viewer.props.orientation:', viewer.props.orientation, 'widget.$store.state.cyclomedia.orientation.xyz:', widget.$store.state.cyclomedia.orientation.xyz);
              if (viewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz) {
                // console.log('VIEW_LOAD_END first if');
                widget.sendOrientationToStore(e, viewer.props.orientation.xyz);
              } else if (viewer.getNavbarExpanded() !== this.navBarOpen) {
                // console.log('VIEW_LOAD_END second if');
                widget.$store.commit('setCyclomediaNavBarOpen', viewer.getNavbarExpanded());
              }
            });
          }
        }.bind(this),
      ).catch(
        function(reason) {
          // console.log('Failed to create component(s) through API: ' + reason);
        },
      );

      // const viewer = this.$store.state.cyclomedia.viewer;
      // viewer.openByCoordinate(coords);
    },
    sendOrientationToStore(e, xyz) {
      // console.log('sendOrientationToStore is running, xyz:', xyz);
      if (e.yaw) {
        this.$store.commit('setCyclomediaYaw', e.yaw);
        this.$store.commit('setCyclomediaHFov', e.hFov);
      }
      const xy = [ xyz[0], xyz[1] ];
      // console.log('sendOrientationToStore, e:', e, 'xyz:', xyz, 'xy:', xy);
      const lnglat = proj4(this.projection2272, this.projection4326, xy);
      // console.log('VIEW_ sendOrientationToStore is running, xyz:', xyz, 'lnglat:', lnglat);
      this.$nextTick(() => {
        this.$store.commit('setCyclomediaXyz', lnglat);
      });
    },
    popoutClicked() {
      // console.log('popoutClicked');
      let map;
      if (this.$store.map) {
        map = this.$store.map;
      } else {
        map = this.$store.state.map.map;
      }
      const center = map.getCenter();
      window.open('//cyclomedia.phila.gov/#/?lat=' + center.lat + '&lng=' + center.lng, '_blank');
      this.$store.commit('setCyclomediaActive', false);
    },
  },
};
</script>

<style scoped>

.cyclo-div {
  height: 100%;
}

/* #cycloviewer {
  position: absolute;
} */

#cyclomedia-container {
  padding: 0px;
}

.full-topics-open {
  display: none;
}

.height100 {
  height: 100%;
}

.height50 {
  /* padding-top: 50%; */
  height: 50%;
}

@media screen and (min-width: 46.875em) {
  #cyclo-container {
    display: block;
  }
}

@media (max-width: 749px) {
  .fullScreen-cyclo {
    height: 100% !important;
  }

  #cyclo-container {
    height: 200px;
  }
}

#inCycloDiv {
  /* position: absolute; */
  position: absolute;
  /* top: 0px; */
  right: 40px;
  /* float: right; */
  background-color: white;
  border: 0px solid;
  width: 30px;
  height: 30px;
  cursor:pointer;
  z-index: 10;
}

.popout-icon {
  margin-top: 8.5px;
  font-size: 15px;
  margin-left: 8.5px;
}

.panoramaViewerWindow {
  display: block;
  width: 100%;
  height:100%;
}

@media screen and (max-width: 46.875em) {
  .cyclo-container {
    /* display: none; */
  }
}

</style>
