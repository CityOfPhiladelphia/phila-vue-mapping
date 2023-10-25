export default {
  name: 'cyclomediaMixin',
  computed: {
    cyclomediaActive() {
      return this.$store.state.cyclomedia.active;
    },
    cyclomediaInitializationBegun() {
      return this.$store.state.cyclomedia.initializationBegun;
    },
    cyclomediaInitializationComplete() {
      return this.$store.state.cyclomedia.initializationComplete;
    },
    cyclomediaRecordings() {
      return this.$store.state.cyclomedia.recordings;
    },
  },
  methods: {
    handleCyclomediaButtonClick() {
      // console.log('handleCyclomediaButtonClick is firing');
      this.updateCyclomediaRecordings();

    },
    handleCyclomediaRecordingClick(e) {
      console.log('handleCyclomediaRecordingClick is running, e:', e);
      let latlng;
      if (e.latlng) {
        latlng = e.latlng;
      } else if (e.marker && e.marker._lngLat) {
        latlng = {
          lat: e.marker._lngLat.lat,
          lng: e.marker._lngLat.lng,
        };
      }
      // console.log('handleCyclomediaRecordingClick is running, latlng:', latlng);
      // this.$store.commit('setCyclomediaLatLngFromMap', latlng);
      this.$store.commit('setCyclomediaLatLngFromRecordingClick', latlng);
      // const viewer = this.$store.state.cyclomedia.viewer;
      // viewer.openByCoordinate([latlng.lng, latlng.lat]);
    },
    updateCyclomediaRecordings() {
      // console.log('updateCyclomediaRecordings is running');
      const map = this.$store.map;
      const zoom = map.getZoom();
      // console.log('updateCyclomediaRecordings is running, zoom:', zoom);
      if (!this.$store.state.cyclomedia.active || zoom < 17.99) {
        this.$store.commit('setCyclomediaRecordings', []);
        return;
      }
      const bounds = map.getBounds();
      this.$cyclomediaRecordingsClient.getRecordings(
        bounds,
        recordings => {
          this.$store.commit('setCyclomediaRecordings', recordings);
        },
      );
    },
  },
};
