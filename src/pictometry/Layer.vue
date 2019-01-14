<script>
  export default {
    name: 'PictometryLayer',
    render(h) {
      return;
    },
    computed: {
      ipa() {
        return this.$store.state.pictometry.ipa;
      },
      activeTopic() {
        return this.$store.state.activeTopic;
      }
    },
    mounted() {
      this.didActivateTopic(this.activeTopic);
    },
    beforeDestroy() {
      this.didDeactivateTopic(this.activeTopic);
    },
    watch: {
      activeTopic(nextTopic, prevTopic) {
        this.didDeactivateTopic(prevTopic);
        this.didActivateTopic(nextTopic);
      }
    },
    methods: {
      didActivateTopic(topic) {
        // console.log('didActivateTopic is firing with topic: ', topic);
        switch (topic) {
          case 'deeds':
            // turn on DOR Parcels
            this.ipa.showLayer({
              id: 114828,
              visible: true,
            })
            break;
          case 'zoning':
            // turn on zoning
            this.ipa.showLayer({
              id: 112230,
              visible: true,
            });
            break;
          case 'water':
            // turn on water Parcels
            this.ipa.showLayer({
              id: 108982,
              visible: true,
            })
            break;

          default:
            // turn off DOR parcels
            this.ipa.showLayer({
              id: 113478,
              visible: false,
            });
            // turn off zoning
            this.ipa.showLayer({
              id: 112230,
              visible: false,
            });
        }
      },

      didDeactivateTopic(topic) {
        switch (topic) {
          case 'deeds':
            // turn off DOR parcels
            this.ipa.showLayer({
              id: 114828,
              visible: false,
            });
            break;

          case 'zoning':
            // turn on zoning
            this.ipa.showLayer({
              id: 112230,
              visible: false,
            });
            break;

          case 'water':
            // turn off water
            this.ipa.showLayer({
              id: 108982,
              visible: false,
            })

          default:
            // turn off DOR parcels
            this.ipa.showLayer({
              id: 113478,
              visible: false,
            });
            // turn off zoning
            this.ipa.showLayer({
              id: 112230,
              visible: false,
            });
        }
      },


    }
  };
</script>
