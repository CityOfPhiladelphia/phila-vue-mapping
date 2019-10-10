<script>
import Circle from '../leaflet/Circle.vue';

export default {
  name: 'CyclomediaRecordingCircle',
  mixins: [ Circle ],
  props: [ 'imageId' ],
};
</script>
