<template>
  <div id="cyclo-container"
       :class="this.widgetClass"
  >
  <!-- v-once -->
    <div id="inCycloDiv"
         @click="this.popoutClicked"
         :style="{ right: popoutPosition }"
         v-if="this.popoutAble === true"
    >
    <!-- v-if="this.isMobileOrTablet === false && this.popoutAble === true" -->
      <font-awesome-icon icon="external-link-alt" class="popout-icon" />
    </div>
    <div id="cycloviewer"
         ref="cycloviewer"
         class="panoramaViewerWindow"
    >
    <!-- @mousedown="console.log('mouseup')" -->
    </div>
  </div>
</template>

<script>
  import proj4 from 'proj4';

  export default {
    data() {
      return {
        'docWidth': 0,
        'divWidth': 0,
        'popoutPosition': 0,
      }
    },
    props: ['screenPercent'],
    computed: {
      // isMobileOrTablet() {
      //   return this.$store.state.isMobileOrTablet;
      // },
      fullScreenMapEnabled() {
        return this.$store.state.fullScreenMapEnabled;
      },
      fullScreenTopicsEnabled() {
        return this.$store.state.fullScreenTopicsEnabled;
      },
      popoutAble() {
        let answer;
        if (this.$config.cyclomedia.popoutAble === false) {
          answer = false
        } else {
          answer = true
        }
        return answer
      },
      cyclomediaInitialized() {
        return this.$store.state.cyclomedia.initialized;
      },
      cyclomediaActive() {
        return this.$store.state.cyclomedia.active;
      },
      pictometryActive() {
        return this.$store.state.pictometry.active;
      },
      widgetClass() {
        if (this.fullScreenTopicsEnabled) {
          return 'medium-12 small-24 full-topics-open'
        } else {
          return 'medium-12 small-24'
        }
      },
      locForCyclo() {
        // console.log('computing locForCyclo');
        const geocodeData = this.$store.state.geocode.data;
        const map = this.$store.state.map.map;
        if (geocodeData) {
          return [geocodeData.geometry.coordinates[1], geocodeData.geometry.coordinates[0]];
        }
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
      fullScreenTopicsEnabled() {
        console.log('cyclomedia Widget.vue watch fullScreenTopicEnabled is firing');
      },
      locForCyclo(newCoords) {
        // console.log('watch locForCyclo is firing, setNewLocation running with newCoords:', newCoords);
        if (newCoords) {
          this.setNewLocation(newCoords);
        }
      },
      latLngFromMap(newCoords) {
        // console.log('watch latLngFromMap is firing, setNewLocation running with newCoords:', newCoords);
        if (this.cyclomediaInitialized) {

          if (Array.isArray(newCoords)) {
            // console.log('it is an array');
            this.setNewLocation([newCoords[1], newCoords[0]]);
          } else {
            // console.log('it is not an array');
            this.setNewLocation([newCoords.lat, newCoords.lng]);
          }
        }
      },
      // docWidthComp() {
      //   console.log('docWidth changed');
      // }
      cyclomediaInitialized() {
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
            database: 'CMDatabase'
          }
        }).then (
          () => {
            // get map center and set location
            const latLngFromMap = this.$store.state.cyclomedia.latLngFromMap;
            this.setNewLocation([latLngFromMap[0], latLngFromMap[1]]);
          },
          err => {
            // console.log('Api: init: failed. Error: ', err);
          }
        );
        window.addEventListener('resize', this.setDivWidth);
      },
      cyclomediaActive(newActiveStatus) {
        this.setDivWidth();
        if (newActiveStatus === true) {
          this.setNewLocation(this.latLngFromMap);
        }
      },
      // pictometryActive() {
      //   this.setDivWidth();
      // }
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
        const docWidth = document.body.clientWidth;
        this.docWidth = docWidth;
        const el = document.getElementById('cyclo-container');
        const divStyle = window.getComputedStyle(el);
        const divWidth = parseFloat(divStyle.getPropertyValue('width').replace('px', ''));
        this.divWidth = divWidth;
        // console.log('setDivWidth is running, docWidth:', docWidth, 'divWidth', divWidth);
        let answer;
        if (this.fullScreenMapEnabled) {
          answer = docWidth - divWidth + 'px';
        } else {
          answer = docWidth - (docWidth/this.$props.screenPercent + divWidth) + 'px';
        }
        // console.log('setDivWidth, answer:', answer);
        this.popoutPosition = answer;
        // return width;
      },
      setNewLocation(coords) {
        // console.log('cyclomedia setNewLocation is running using', coords);
        const viewerType = StreetSmartApi.ViewerType.PANORAMA;
        const coords2272 = proj4(this.projection4326, this.projection2272, [coords[1], coords[0]]);
        // StreetSmartApi.open(center.lng + ',' + center.lat, {
        // StreetSmartApi.open(coords[1] + ',' + coords[0], {
        StreetSmartApi.open(coords2272[0] + ',' + coords2272[1], {
          viewerType: viewerType,
          srs: 'EPSG:2272',
          // srs: 'EPSG:4326',
          panoramaViewer: {
            closable: false,
            maximizable: false,
          }
        }).then (
          function(result) {
            // console.log('StreetSmartApi2, result:', result);
            const widget = this;
            // console.log('Created component through API:', result);
            if (result) {
              for (let i =0; i < result.length; i++) {
                if(result[i].getType() === StreetSmartApi.ViewerType.PANORAMA) window.panoramaViewer = result[i];
              }
              widget.sendOrientationToStore();

              // StreetSmartApi.removeOverlay()
              window.panoramaViewer.toggleNavbarExpanded(widget.navBarOpen);
              // if (widget.isMobileOrTablet) {
              // console.log('about to remove surfaceCursorLayer');
              // StreetSmartApi.removeOverlay('surfaceCursorLayer');
              // console.log('removed surfaceCursorLayer');
              // }

              // StreetSmartApi.removeOverlay('measurementLayer');
              // window.panoramaViewer.toggleButtonEnabled('panorama.measure', false);
              window.panoramaViewer.toggleButtonEnabled('panorama.elevation', false);
              window.panoramaViewer.toggleButtonEnabled('panorama.reportBlurring', false);

              for (let overlay of window.panoramaViewer.props.overlays) {
                // console.log('overlay:', overlay);
                if (overlay.id === 'surfaceCursorLayer') {
                  if (overlay.visible === true) {
                    window.panoramaViewer.toggleOverlay(overlay);
                    // overlay.visible = false;
                  }
                }
              }

              if (!this.$config.cyclomedia.measurementAllowed || this.$config.cyclomedia.measurementAllowed === 'false') {
                StreetSmartApi.removeOverlay('measurementLayer');
                window.panoramaViewer.toggleButtonEnabled('panorama.measure', false);
              }

              window.panoramaViewer.on('VIEW_CHANGE', function() {
                if (window.panoramaViewer.props.orientation.yaw !== widget.$store.state.cyclomedia.orientation.yaw ||
                    window.panoramaViewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz
                ) {
                  // console.log('on VIEW_CHANGE fired with yaw change', window.panoramaViewer.props.orientation);
                  widget.sendOrientationToStore();
                } else if (window.panoramaViewer.getNavbarExpanded() !== this.navBarOpen) {
                  widget.$store.commit('setCyclomediaNavBarOpen', window.panoramaViewer.getNavbarExpanded());
                }
              })

              window.panoramaViewer.on('VIEW_LOAD_END', function() {
                if (window.panoramaViewer.props.orientation.yaw !== widget.$store.state.cyclomedia.orientation.yaw ||
                    window.panoramaViewer.props.orientation.xyz !== widget.$store.state.cyclomedia.orientation.xyz
                ) {
                  // console.log('on VIEW_CHANGE fired with yaw change', window.panoramaViewer.props.orientation);
                  widget.sendOrientationToStore();
                } else if (window.panoramaViewer.getNavbarExpanded() !== this.navBarOpen) {
                  widget.$store.commit('setCyclomediaNavBarOpen', window.panoramaViewer.getNavbarExpanded());
                }
              })
            }
          }.bind(this)
        ).catch(
          function(reason) {
            // console.log('Failed to create component(s) through API: ' + reason);
          }
        );

        // const viewer = this.$store.state.cyclomedia.viewer;
        // viewer.openByCoordinate(coords);
      },
      sendOrientationToStore() {
        // console.log('sendOrientationToStore, yaw:', window.panoramaViewer.props.orientation.yaw);
        this.$store.commit('setCyclomediaYaw', window.panoramaViewer.props.orientation.yaw)
        this.$store.commit('setCyclomediaHFov', window.panoramaViewer.props.orientation.hFov)
        const xy = [window.panoramaViewer.props.orientation.xyz[0], window.panoramaViewer.props.orientation.xyz[1]];
        const lnglat = proj4(this.projection2272, this.projection4326, xy);
        // console.log('xy:', xy, 'lnglat', lnglat);
        this.$store.commit('setCyclomediaXyz', lnglat);
      },
      popoutClicked() {
        const map = this.$store.state.map.map;
        const center = map.getCenter();
        window.open('//cyclomedia.phila.gov/?' + center.lat + '&' + center.lng, '_blank');
        this.$store.commit('setCyclomediaActive', false);
      }
    }
  };
</script>

<style>

#cyclo-container {
  padding: 0px;
  height: 100%;
}

.full-topics-open {
  display: none;
}
/* @media screen and (min-width: 46.875em) {
  #cyclo-container {
    display: inline-block;
  }
} */

#inCycloDiv {
  /* position: absolute; */
  position: absolute;
  /* top: 0px; */
  right: 0px;
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
  display: inline-block;
  width: 100%;
  height:100%;
}

@media (max-width: 749px) {
  #cyclo-container {
    height: 250px;
  }
}

/* @media screen and (max-width: 46.875em) {
  .cyclo-container {
    display: none;
  }
} */

</style>
