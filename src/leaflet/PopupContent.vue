<template>
  <div>
    <div
      v-if="this.popupHtmlArray.length > 1"
      class="text-center"
    >
      <ul class="pagination text-center">
        <li :class="this.previousIsDisabled">
          <span v-if="this.previousIsDisabled !== 'pagination-previous'">
            Previous
          </span>
          <a
            v-if="this.previousIsDisabled === 'pagination-previous'"
            @click="changePopup(currentPopup-1)"
          >
            Previous
          </a>
        </li>
        <div
          v-if="this.popupHtmlArrayLength <= 9"
          class="inline-div"
        >
          <li
            v-for="(popup, index) in this.popupHtmlArray"
            :key="index"
            :class="isCurrent(index)"
          >
            <span v-if="isCurrent(index) === 'current'">
              {{ index + 1 }}
            </span>
            <a
              v-if="isCurrent(index) !== 'current'"
              @click="changePopup(index)"
            >
              {{ index + 1 }}
            </a>
          </li>
        </div>
        <div
          v-if="this.popupHtmlArrayLength >= 10"
          class="inline-div popup-div"
        >
          {{ currentPopup + 1 }} of {{ this.popupHtmlArrayLength }}
        </div>
        <li :class="this.nextIsDisabled">
          <span v-if="this.nextIsDisabled !== 'pagination-next'">
            Next
          </span>
          <a
            v-if="this.nextIsDisabled === 'pagination-next'"
            @click="changePopup(currentPopup+1)"
          >
            Next
          </a>
        </li>
      </ul>
    </div>
    <div v-html="this.popupHtmlArray[this.currentPopup]" />
  </div>
</template>
<script>
export default {
  name: 'PopUpContent',
  data() {
    return {
      'currentPopup': 0,
    };
  },
  computed: {
    previousIsDisabled() {
      if (this.currentPopup === 0) {
        return 'pagination-previous disabled';
      }
      return 'pagination-previous';

    },
    nextIsDisabled() {
      if (this.currentPopup === this.popupHtmlArray.length - 1) {
        return 'pagination-next disabled';
      }
      return 'pagination-next';

    },
    intersectingFeatures() {
      return this.$store.state.map.intersectingFeatures;
    },
    popupHtmlArray() {
      let htmlArray = [];
      for (let feature in this.$store.state.map.intersectingFeatures) {
        if (this.$store.state.map.intersectingFeatures[feature].feature) {
          htmlArray.push(this.$store.state.map.intersectingFeatures[feature].feature.popupHtml);
        }
      }
      return htmlArray;
    },
    popupHtmlArrayLength() {
      return this.popupHtmlArray.length;
    },
  },
  watch: {
    popupHtmlArray(nextPopupHtmlArray) {
      this.currentPopup = 0;
      this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[0]);
    },
  },
  mounted() {
    // console.log('POPUPCONTENT MOUNTED')
    this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[0]);
  },
  destroyed() {
    // console.log('PopupContent destroyed')
    this.$store.commit('setSelectedPopupLayer', null);
  },
  methods: {
    changePopup(index) {
      this.currentPopup = index;
      this.$store.commit('setSelectedPopupLayer', this.intersectingFeatures[index]);
    },
    isCurrent(index) {
      if (index === this.currentPopup) {
        return 'current inline-div';
      }
      return 'inline-div';

    },
  },
};
</script>

<style>

  .leaflet-popup-content {
    margin-top: 8px;
    margin-bottom: 8px;
  }

  .pagination {
    margin-bottom: 0px;
  }

  .leaflet-popup-close-button {
    font-size: 24px !important;
    height: 24px !important;
    line-height: 24px !important;
    width: 24px !important;
  }

  .inline-div {
    display: inline-block;
    padding: 3px;
  }

  .current {
    font-weight: bold;
  }

  .popup-div {
    font-size: 14px;
    display: inline-block;
  }

</style>
