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
    methods: {
      parentMounted(parent) {
        const map = parent.$leafletElement;
        map._controlCorners[this.vSide + this.hSide] = L.DomUtil.create('div', 'leaflet-'+this.vSide+' leaflet-'+this.hSide, map._controlContainer);
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

  .leaflet-almostright .leaflet-control {
    margin-top: 10px;
  }
</style>
