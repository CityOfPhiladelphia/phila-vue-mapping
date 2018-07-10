<script>
  import * as L from 'leaflet';
  import VectorMarker from '../components/VectorMarker.vue';

  export default {
    extends: VectorMarker,
    props: [
      'fov',
      'yaw'
    ],
    methods: {
      createLeafletElement() {
        return L.marker(this.$props.latlng);
      },
    },
  }
</script>
