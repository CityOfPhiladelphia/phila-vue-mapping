<script>
  import MeasureControl from 'leaflet-measure';
  import 'leaflet-measure/dist/leaflet-measure.css';

  export default {
    name: 'MeasureControl',
    props: ['position'],
    mounted() {
      const leafletElement = this.$leafletElement = this.createLeafletElement();
    },
    destroyed() {
      this.$leafletElement._map.removeControl(this.$leafletElement);
    },
    render(h) {
      return;
    },
    methods: {
      createLeafletElement() {
        const { position } = this.$props;

        return new MeasureControl({
  				position,
  				primaryLengthUnit: 'feet',
  				primaryAreaUnit: 'sqfeet',
  			});
      },
      parentMounted(parent) {
        const map = parent.$leafletElement;
        map.addControl(this.$leafletElement);
      }
    }
  };
</script>

<style>
</style>
