<template>
  <div :class="this.listGroupClass"
       v-show="this.shouldShowAddressCandidateList"
  >
    <ul>
      <li v-for="(candidate, i) in candidates">
        <a :href="createLink(candidate)"
           @click="closeAddressCandidateList(candidate)"
           class="list-group-item"
           tabindex="-1"
           :id="'address-candidate-list-' + i"
           @keydown="maybeUsedArrow"
        >
          {{ candidate }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
  import * as L from 'leaflet';

  export default {
    props: ['position'],
    computed: {
      map() {
        return this.$store.state.map.map;
      },
      candidates() {
        return this.$store.state.candidates;
      },
      shouldShowAddressCandidateList() {
        return this.$store.state.shouldShowAddressCandidateList;
      },
      activeTopic() {
        return this.$store.state.activeTopic;
      },
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
      listGroupClass() {
        if (this.isMobileOrTablet) {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'list-group-mobile';
            } else {
              return 'list-group-mobile-full';
            }
          } else {
            return 'list-group-mobile';
          }
        } else {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'list-group';
            } else {
              return 'list-group-full';
            }
          } else {
            return 'list-group';
          }
        }
      },
      addressAutocompleteEnabled() {
        // TODO this is temporarily disabled
        if (this.$config.addressInput.autocompleteEnabled === true) {
          return true;
        } else {
          return false;
        }
      },
    },
    watch: {
      shouldShowAddressCandidateList(nextValue) {
        // console.log('AddressCandidateList.vue watch shouldShowAddressCandidateList is running, nextValue:', nextValue);
        if (nextValue === true) {
          this.createControl();
        }
      },
    },
    methods: {
      createLink(candidate) {
        if (this.$store.state.activeTopic) {
          return '#/' + candidate + '/' + this.activeTopic;
        } else {
          return '#/' + candidate;
        }
      },
      createLeafletElement(L) {
        // console.log('AddressCandidateList.vue createLeafletElement is running')
        // subclass Control to accept an el which gets mounted to the map
        class ControlParent extends L.Control {
          constructor(el, options) {
            super(options);
            this.el = el;
          }
          onAdd() {
            const el = this.el;

            // keep clicks from hitting the map
            L.DomEvent.disableClickPropagation(el);
            L.DomEvent.disableScrollPropagation(el);

            return el;
          }
        }

        const el = this.$el;
        return new ControlParent(el, {
          position: this.position
        });
      },
      createControl() {
        // console.log('AddressCandidateList.vue createControl is running');
        const leafletElement = this.createLeafletElement(L);
        this.$leafletElement = leafletElement;
        const map = this.map;
        leafletElement.addTo(map);
      },
      parentMounted(parent, props) {
        // console.log('AddressCandidateList.vue parentMounted is running, parent:', parent, 'props:', props);
      },
      maybeUsedArrow(e) {
        const id = e.target.id;
        const index = parseInt(id.substring(id.lastIndexOf('-') + 1));
        let indexUp, indexDown;
        if (index < this.candidates.length - 1) {
          indexUp = index + 1;
        } else (
          indexUp = index
        )
        if (index !== 0) {
          indexDown = index - 1;
        } else {
          indexDown = 0
        }
        // console.log('maybeUsedArrow running, e:', e, 'index:', index, 'indexUp:', indexUp, 'indexDown:', indexDown);
        if (e.key === "ArrowDown") {
          document.getElementById('address-candidate-list-' + indexUp).focus();
        }
        if (e.key === "ArrowUp") {
          document.getElementById('address-candidate-list-' + indexDown).focus();
        }
      },
      closeAddressCandidateList(addressCandidate) {
        // console.log('closeAddressCandidateList, addressCandidate:', addressCandidate);
        // this.$controller.handleSearchFormSubmit(addressCandidate);
        this.$store.commit('setAddressEntered', addressCandidate);
        this.$store.commit('setShouldShowAddressCandidateList', false);
      },
    }
  };
</script>

<style scoped>

.list-group {
  height: 300px;
  width: 250px;
  overflow: auto;
  margin-top: 1px !important;
}

.list-group-full {
  height: 300px;
  width: 197px;
  overflow: auto;
  margin-top: 1px !important;
}

.list-group-mobile {
  height: 300px;
  width: 250px;
  overflow: auto;
  margin-top: 1px !important;
}

.list-group-mobile-full {
  height: 300px;
  width: 197px;
  overflow: auto;
  margin-top: 1px !important;
}

ul {
  list-style-type: none;
  margin-left: 0px;
}

.list-group-item {
  /* width: 237px; */
  display: block;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
  border: 2;
  background-color: white;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 14px;
  font-weight: normal;
}

.list-group-item:hover {
  background-color: #ffefa2;
  font-weight: bold;
}

/*small*/
@media screen and (max-width: 39.9375em) {
  .list-group {
    width: 200px;
  }

  .list-group-mobile {
    width: 200px;
  }

  .list-group-full {
    width: 147px;
  }

  .list-group-mobile-full {
    width: 158px;
  }
}

</style>
