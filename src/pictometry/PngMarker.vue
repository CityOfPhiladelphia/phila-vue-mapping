<script>
export default {
  name: 'PictometryPngMarker',
  props: [
    'icon',
    'latlng',
    'height',
    'width',
  ],
  computed: {
    ipa() {
      return this.$store.state.pictometry.ipa;
    },
  },
  // destroyed() {
  //   console.log('destroying PngMarker', this.icon);
  //   this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
  //   console.log('destroyed PngMarker', this.icon);
  // },
  watch: {
    latlng(nextLatlng) {
      // console.log('PngMarker: latlng changed');
      this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
      this.placeMarker(nextLatlng);
    },
  },
  mounted() {
    // console.log('mounting PngMarker', this.icon);
    this.placeMarker(this.$props.latlng);
  },
  beforeDestroy() {
    // console.log('before destroying PngMarker', this.icon);
    this.ipa.removeShapes(this.$store.state.pictometry.pngMarkerIds);
    // console.log('before destroyed PngMarker', this.icon);
  },
  methods: {
    constructLocalUrl(host, path1, path2) {
      let url;
      if (window.location.protocol === 'https:') {
        // console.log('using https', window.location.protocol);
        url = 'https://' + host + path1 + path2;
      } else {
        // console.log('using http', window.location.protocol);
        url = 'http://' + host + path1 + path2;
      }
      // console.log('constructing url:', url);
      return url;
    },
    placeMarker(nextLatlng) {
      // console.log('starting placeMarker', nextLatlng, this.$props.icon, 'this.ipa:', this.ipa);
      const port = window.location.port;
      let host;
      if (port != '') {
        host = window.location.hostname + ':' + port;
      } else {
        host = window.location.hostname;
      }
      const pngMarker = {
        type : this.ipa.SHAPE_TYPE.MARKER,
        center: { y: nextLatlng[0], x: nextLatlng[1] },
        markerImageHeight: this.$props.height,
        markerImageWidth: this.$props.width,
        markerOffsetX: this.$props.offsetX,
        markerOffsetY: this.$props.offsetY,
        markerImage: this.constructLocalUrl(host, '/', this.$props.icon),
        onShapeClick: 'true',
      };
      this.ipa.addShapes([ pngMarker ], this.didAddShapes);
    },
    didAddShapes(result) {
      // const pngMarkerIds = shapes.filter(shape => {
      //                         return shape.success === 'true';
      //                       }).map(shape => shape.shapeId);
      // this.$store.commit('setPictometryPngMarkerIds', pngMarkerIds);
      for ( var i = 0; i < result.length; i++) {
        if ( result[i].success === 'false' ) {
          console.log(result[i].error);
        } else {
          const pngMarkerIds = this.$store.state.pictometry.pngMarkerIds;
          // console.log('pngMarkerIds', pngMarkerIds);
          pngMarkerIds.push(result[i].shapeId);

        }
      }
    },
  },
  // render(h) {
  //   return;
  // },
};
</script>
