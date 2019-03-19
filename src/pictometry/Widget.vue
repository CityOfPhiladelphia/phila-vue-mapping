<template>
  <div id="pict-container"
       :class="this.pictContainerClass"
  >
    <div id="in-pict-div"
         @click="this.popoutClicked"
         v-if="this.isMobileOrTablet === false"
    >
      <font-awesome-icon icon="external-link-alt" class="popout-icon" />
    </div>
    <iframe id="pictometry-ipa"
            src="#"
            ref="pictometryIpa"
    >
    </iframe>
    <div>
      <slot />
    </div>
  </div>
</template>

<script>
  import md5 from 'blueimp-md5';

  export default {
    name: 'PictometryWidget',
    props: [
      'apiKey',
      'secretKey',
    ],
    created() {
      this.$IFRAME_ID = 'pictometry-ipa';
    },
    mounted() {
      // fetch pictometry ipa script
      const scriptUrl = 'https://pol.pictometry.com/ipa/v1/embed/host.php' + '?apikey=' + this.apiKey;
      const self = this;
      // console.log('Pict Widget mounted is running, scriptUrl:', scriptUrl);
      this.getScript(scriptUrl, self.init);
    },
    computed: {
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      cyclomediaActive() {
        return this.$store.state.cyclomedia.active;
      },
      pictContainerClass() {
        if (this.cyclomediaActive) {
          return 'medium-8 large-8 columns mb-panel';
        } else {
          return 'medium-24 large-24 columns mb-panel';
        }
      },
      mapCenter() {
        return this.$store.state.pictometry.map.center;
      },
      mapZoom() {
        return this.$store.state.pictometry.map.zoom;
      },
    },
    watch: {
      mapCenter(nextCenter) {
        const [x, y] = nextCenter;
        const zoom = this.mapZoom;
        if (this.$ipa) {
          this.$ipa.setLocation({ x, y, zoom });
        }
      },
      mapZoom(nextZoom) {
        // console.log('watch zoomSentToPict', nextZoom);
        if (this.$ipa) {
          this.$ipa.setLocation({
            y: this.mapCenter.lat,
            x: this.mapCenter.lng,
            zoom: nextZoom
          });
        }
      },
      cyclomediaActive(nextStatus) {
        if (nextStatus) {
          // console.log('pictometry widget cyclomediaActive, this.$ipa:', this.$ipa);
          this.$ipa.showDashboard({
            zoom: false,
            imageFilter: false,
            layers: false,
            nextPrevious: false,
            tools: false,
            annotations: false,
            rotation: false,
            clearMeasurements: false,
            exportPdf: false,
            dualPane: false,
            imageDate: false,
            panTool: false,
            exportImage: false,
            areaTool: false,
            distanceTool: false,
            heightTool: false,
            locationTool: false,
            elevationTool: false,
            bearingTool: false,
            slopeTool: false,
            xyzTool: false,
            identifyPoint: false,
            identifyBox: false
          });
        } else {
          // console.log('pict: cyclo off');
          this.$ipa.showDashboard({
            zoom: true,
            imageFilter: true,
            layers: true,
            nextPrevious: true,
            tools: true,
            annotations: true,
            rotation: true,
            clearMeasurements: true,
            exportPdf: true,
            dualPane: true,
            imageDate: true,
            panTool: true,
            exportImage: true,
            areaTool: true,
            distanceTool: true,
            heightTool: true,
            locationTool: true,
            elevationTool: true,
            bearingTool: true,
            slopeTool: true,
            xyzTool: true,
            identifyPoint: true,
            identifyBox: true
          });
        }
      }
    },
    methods: {
      getScript(source, callback) {
        var script = document.createElement('script');
        var prior = document.getElementsByTagName('script')[0];
        script.async = 1;

        script.onload = script.onreadystatechange = (_, isAbort) => {
            if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
                script.onload = script.onreadystatechange = null;
                script = undefined;
                if (!isAbort) if (callback) callback();
            }
        };

        script.src = source;
        prior.parentNode.insertBefore(script, prior);
      },
      popoutClicked() {
        const map = this.$store.state.map.map;
        const center = map.getCenter();
        window.open('//pictometry.phila.gov/?' + center.lat + '&' + center.lng, '_blank');
        this.$store.commit('setPictometryActive', false);
      },
      init() {
        // console.log('Pict Widget init is running');
        // construct signed url
        const d = new Date();
        const t = Math.floor(d.getTime() / 1000);
        const unsignedUrl = 'https://pol.pictometry.com/ipa/v1/load.php' + "?apikey=" + this.apiKey + "&ts=" + t;
        const hash = md5(unsignedUrl, this.secretKey);
        const iframeId = this.$IFRAME_ID;
        const signedUrl = unsignedUrl + "&ds=" + hash + "&app_id=" + iframeId;

        // set the iframe src to load the IPA
        const iframe = this.$refs.pictometryIpa;
        // REVIEW can we bind this to a computed instead?
        iframe.setAttribute('src', signedUrl);

        // create pictometry host
        const ipa = this.$ipa = new PictometryHost(iframeId, 'https://pol.pictometry.com/ipa/v1/load.php');
        // console.log('PictometryWidget init ipa:', ipa);
        this.$store.commit('setPictometryIpa', ipa);
        ipa.ready = this.ipaReady;
      },
      ipaReady() {
        this.$ipa.setLocation({
          y: this.mapCenter.lat,
          x: this.mapCenter.lng,
          zoom: this.mapZoom
        });

        const self = this;

        this.$ipa.addListener('onendzoom', function(zoom) {
          // console.log('widget: ipa detected zoom change to', zoom);
          self.$store.commit('setPictometryZoom', zoom.level);
        })
      },
    }, // end of methods
  }; // end of export
</script>

<style scoped>


header.site-header > .row:last-of-type {
  background: #2176d2;
}

#in-pict-div {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: white;
  border: 0px solid;
  width: 30px;
  height: 30px;
  cursor:pointer;
}

.popout-icon {
  margin-top: 8.5px;
  font-size: 15px;
  margin-left: 8.5px;
}

#pict-container {
  padding: 0px;
  height: 50%;
  position: relative;
  display: none;
}

@media screen and (min-width: 46.875em) {
  #pict-container {
    display: block;
  }
}

#pictometry-ipa {
  height: 100%;
  width: 100%;
  border: 0px;
}

#search-container {
    float: right;
}

#search-input {
    float: left;
    width: 400px;
}

#search-button {
    height: 2.78571rem;
}

#data-panel {
    background: #fff;
    padding-left: 12px;
    padding-right: 12px;
    height: 100%;
}

#data-panel > h1 {
    color: #666;
}

#data-row-list > a {
    background: #f5f5f5;
    border: 1px solid #ddd;
    display: block;
    font-size: 18px;
    font-weight: normal;
    height: 70px;
    line-height: 45px;
    padding: 10px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    margin-bottom: 8px;
}

#data-row-list > a:hover {
    background: #fff;
    color: inherit;
}

#data-row-list .data-row-link-icon {
    padding-right: 30px;
}

.data-row {
    padding: 10px;
    margin-bottom: 10px;
    display: none;
}

.data-row table th, .data-row table td {
    font-size: 15px;
    margin-left: 8.5px;
  }

  #pict-container {
    padding: 0px;
    height: 50%;
    position: relative;
  }

</style>
