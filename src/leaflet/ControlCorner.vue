<script>
  import * as L from 'leaflet';

  export default {
    name: 'ControlCorner',
    props: [
      'vSide',
      'hSide'
    ],
    render(h) {
      return;
    },
    computed: {
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      mobileTag() {
        if (this.isMobileOrTablet) {
          return 'mobile-corner';
        } else {
          return 'non-mobile-corner';
        }
      }
    },
    methods: {
      parentMounted(parent) {
        const map = parent.$leafletElement;
        map._controlCorners[this.vSide + this.hSide] = L.DomUtil.create('div',
          'leaflet-'+this.vSide+
          ' leaflet-'+this.hSide, map._controlContainer
          // ' test'
        );
        // console.log('map._controlCorners[this.vSide + this.hSide]:', map._controlCorners[this.vSide + this.hSide])
        map._controlCorners[this.vSide + this.hSide].classList.add(this.mobileTag);
      }
    }
  };
</script>

<style>
  .leaflet-fullleft {
    position: absolute;
    bottom: 0px; /* possible because the placeholder's parent is the map */
    left: 0px;
    padding-bottom: 10px;
    z-index: 500;
  }

  .leaflet-fulltop {
    position: absolute;
    top: 10px;
    left: 0px;
    padding-bottom: 10px;
    z-index: 500;
  }

  .leaflet-centervert {
    /* position: relative; */
    /* top: 100px;
    left: 0px; */
    /* padding-top: 40%; */
    padding-bottom: 30%;
    z-index: 500;
  }

  .leaflet-almostleft {
    position: absolute;
    bottom: 0px;
    left: 30px;
    padding-bottom: 10px;
    z-index: 500;
  }

  .leaflet-almostleft .leaflet-control {
    margin-bottom: 0px;
  }

  .leaflet-almostright {
    position: absolute;
    top: 0px;
    right: 60px;
    padding-bottom: 10px;
    z-index: 500;
  }

  .leaflet-almosttop {
    position: absolute;
    top: 50px;
    /* right: 0px; */
    padding-bottom: 10px;
    z-index: 500;
  }

  .leaflet-almostright .leaflet-control {
    margin-top: 10px;
  }
</style>
