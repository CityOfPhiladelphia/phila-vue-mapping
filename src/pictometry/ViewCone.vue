<script>
export default {
  name: 'PictometryViewCone',
  props: [
    'latlng',
    'rotationAngle',
    'hFov',
  ],
  computed: {
    ipa() {
      return this.$store.state.pictometry.ipa;
    },
    zoom() {
      return this.$store.state.pictometry.zoom;
    },
    radius() {
      const zoomMap = {
        '17': 75,
        '18': 50,
        '19': 25,
        '20': 15,
        '21': 10,
        '22': 10,
        '23': 10,
        '24': 10,
      };
      return zoomMap[this.zoom];
      // return zoomMap[this.$store.state.map.zoom]
    },
  },
  watch: {
    radius(nextRadius) {
      // this.ipa.getMetaData(function(e) {
      //   console.log(e);
      // });
      // this.ipa.getZoomRange(function(e) {
      //   console.log(e);
      // })
      // console.log('radius:', nextRadius);
      this.getViewConeLatLon();
    },
    rotationAngle() {
      this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
      this.getViewConeLatLon();
    },
    latlng() {
      this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
      this.getViewConeLatLon();
    },
  },
  mounted() {
    this.getViewConeLatLon();
  },
  beforeDestroy() {
    this.ipa.removeShapes(this.$store.state.pictometry.shapeIds);
  },
  methods: {
    getViewConeLatLon() {
      // console.log('getViewConeLatLon is running');
      const camLat = this.latlng[0];
      const camLon = this.latlng[1];
      // Earth's radius
      const ER=6378137;
      // viewcone radius, for scaling its size
      // const camR = 10;
      const camR = this.radius;
      // Angle1 - camera angle off of N, Angle2 - fov angle
      const Angle1 = this.rotationAngle;
      const Angle2 = parseFloat(this.hFov) * 180/Math.PI;

      const dnLP = Math.cos((Angle1+Angle2/2) * Math.PI/180)*camR;
      const deLP = Math.sin((Angle1+Angle2/2) * Math.PI/180)*camR;
      const dnRP = Math.cos((Angle1-Angle2/2) * Math.PI/180)*camR;
      const deRP = Math.sin((Angle1-Angle2/2) * Math.PI/180)*camR;
      //Coordinate offsets in radians
      const dLatLP = dnLP/ER;
      const dLonLP = deLP/(ER*Math.cos(Math.PI*camLat/180));
      const dLatRP = dnRP/ER;
      const dLonRP = deRP/(ER*Math.cos(Math.PI*camLat/180));
      //OffsetPosition
      const camRightLat = camLat + dLatLP * 180/Math.PI;
      const camRightLon = camLon + dLonLP * 180/Math.PI;
      const camLeftLat = camLat + dLatRP * 180/Math.PI;
      const camLeftLon = camLon + dLonRP * 180/Math.PI;

      const coordinates = [{ y : camLat, x : camLon, z: 0.0 }, { y : camRightLat, x : camRightLon, z: 0.0 }, { y : camLeftLat, x : camLeftLon, z: 0.0 }];
      this.placeViewCone(coordinates);
    },

    placeViewCone: function(coords){
      // console.log('placeViewCone is running');
      const self = this;
      const viewTriangle = {
        type: this.ipa.SHAPE_TYPE.POLYGON,
        coordinates: coords,
        // coordinates : [ {y : app.state.stViewY, x : app.state.stViewX, z: 0.0}, {y : app.state.viewCone.camRightLat, x : app.state.viewCone.camRightLon, z: 0.0}, {y : app.state.viewCone.camLeftLat, x : app.state.viewCone.camLeftLon, z: 0.0} ],
        strokeColor: "#00a0ee",
        strokeOpacity: 0.75,
        strokeWeight: 2,
        fillColor: "#00a0ee",
        fillOpacity: 0.25,
        altitudeMode: this.ipa.ALTITUDE_MODE.RELATIVE_TO_GROUND,
      };
      this.ipa.addShapes([ viewTriangle ], function(result) {
        for ( var i = 0; i < result.length; i++) {
          if ( result[i].success === 'false' ) {
            alert(result[i].error);
          } else {
            const shapeIds = self.$store.state.pictometry.shapeIds;
            // console.log('shapeIds:', shapeIds);
            // console.log('current shapeId:', result[i].shapeId);
            shapeIds.push(result[i].shapeId);
            const test = shapeIds.slice(0, -1);
            // console.log('slice', test);
            self.ipa.removeShapes(shapeIds.slice(0, -1));
          }
        }
      });
    },
  },
  render(h) {
    return;
  },
};
</script>
