<template>
  <div :class="this.containerClass">
    <form @submit.prevent="handleSearchFormSubmit"
          autocomplete="off"
          id="search-form"
          class="pvm-search-control-form"
    >
      <!-- <div class="form-group"> -->
        <input :class="this.inputClass"
               id="pvm-search-control-input"
               :placeholder="this.$props.placeholder || 'Search the map'"
               :value="this.addressEntered"
               tabindex="0"
               @keyup="didType"
        />
      <!-- </div> -->
    </form>
    <button :class="this.buttonClass"
            v-if="this.addressEntered != '' && this.addressEntered != null"
            @click="handleFormX"
    >
    <!-- v-if="this.addressAutocompleteEnabled && this.addressEntered != '' && this.addressEntered != null" -->
      <font-awesome-icon icon="times" class="fa-lg" />
    </button>
    <button :class="this.buttonClass"
            name="pvm-search-control-button"
            tabindex="-1"
            @click="this.handleSearchFormSubmit"
    >
      <font-awesome-icon icon="search" class="fa-lg" />
    </button>
  </div>
</template>

<script>
  import * as L from 'leaflet';
  import debounce from 'lodash.debounce';
  import axios from 'axios';

  export default {
    props: [
      'position',
      'placeholder',
    ],
    computed: {
      map() {
        return this.$store.state.map.map;
      },
      addressEntered() {
        return this.$store.state.addressEntered;
      },
      containerClass() {
        if (this.isMobileOrTablet) {
          return 'pvm-search-control-container-mobile';
        } else {
          return 'pvm-search-control-container';
        }
      },
      inputClass() {
        if (this.isMobileOrTablet) {
          // if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'pvm-search-control-input-mobile';
            } else {
              return 'pvm-search-control-input-mobile-full';
            }
          // } else {
          //   return 'pvm-search-control-input-mobile';
          // }
        } else {
          // if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'pvm-search-control-input';
            } else {
              return 'pvm-search-control-input-full';
            }
          // } else {
          //   return 'pvm-search-control-input';
          // }
        }
      },
      buttonClass() {
        if (this.isMobileOrTablet) {
          return 'pvm-search-control-button-mobile'
        } else {
          return 'pvm-search-control-button'
        }
      },
      addressAutocompleteEnabled() {
        // TODO this is temporarily disabled
        if (this.$config.addressInput) {
          if (this.$config.addressInput.autocompleteEnabled === true) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      },
      isMobileOrTablet() {
        return this.$store.state.isMobileOrTablet;
      },
    },
    methods: {
      createLeafletElement(L) {
        // console.log('AddressInput.vue createLeafletElement is running')
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
      parentMounted(parent, props) {
        // console.log('AddressInput.vue parentMounted is running, parent:', parent, 'props:', props);
        const leafletElement = this.createLeafletElement(L);
        this.$leafletElement = leafletElement;
        const map = this.map;
        leafletElement.addTo(map);
      },
      didType: debounce(function (e) {
          // console.log('debounce is running');
          const { value } = e.target;
          this.$store.commit('setAddressEntered', value);
          if (this.addressAutocompleteEnabled) {
            // console.log('debounce is running, e:', e, 'this:', this);
            if (e.key === "ArrowDown") {
              document.getElementById('address-candidate-list-0').focus();
              return;
            }
            // const { value } = e.target;
            this.getCandidates(value);
            // this.$store.commit('setAddressEntered', value);
            if (e.key !== "Enter") {
              this.$store.commit('setShouldShowAddressCandidateList', true);
            }
          }
        }, 300
      ),
      getCandidates(address) {
        // console.log('getCandidates is running, address:', address);
        axios.get('https://cqvfg1pm72.execute-api.us-east-1.amazonaws.com/dev/first-api-test/', {
          params: {
            address,
          },
        })
          .then(this.didGetCandidates)
          .catch(this.didGetCandidatesError);
      },
      didGetCandidates(res) {
        const { matches } = res.data;
        // console.log('matches:', matches, 'matches map:', matches.map(x => x.address));
        const matchesArray = matches.map(x => x.address);
        this.$store.commit('setCandidates', matchesArray);
      },
      didGetCandidatesError(err) {
        console.log('error getting candidates', err);
        this.$store.commit('setCandidates', []);
      },
      handleFormX() {
        this.$store.commit('setAddressEntered', '');
        this.$store.commit('setShouldShowAddressCandidateList', false);
        this.$store.commit('setCandidates', []);
      },
      handleSearchFormSubmit() {
        // const value = e.target[0].value;
        // const value = this.addressEntered;
        let value;
        if (this.addressAutocompleteEnabled){
          value = this.$store.state.addressEntered;
        } else {
          value = document.querySelector('#pvm-search-control-input').value;
        }
        // console.log('AddressInput.vue handleSearchFormSubmit is running, value:', value);
        // console.log('handleSearchFormSubmit value:', value);
        this.$controller.handleSearchFormSubmit(value);
        this.$store.commit('setAddressEntered', value);
        // this.$store.commit('setShouldShowAddressCandidateList', false);
      },
    }
  };
</script>

<style scoped>

.pvm-search-control-container {
  height: 48px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
}

.pvm-search-control-container-mobile {
  height: 38px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
}

.pvm-search-control-form {
  display: inline-block;
}

/* .pvm-search-clear-button {
  display: inline-block;
  color: #fff;
  width: 50px;
  background: #2176d2;
  line-height: 48px;
  padding: 0px;
} */

.pvm-search-control-button {
  display: inline-block;
  color: #fff;
  width: 50px;
  background: #2176d2;
  line-height: 48px;
  padding: 0px;
}

.pvm-search-control-button-mobile {
  display: inline-block;
  color: #fff;
  width: 38px;
  height: 38px;
  background: #2176d2;
  line-height: 38px;
  padding: 0px;
  padding-top: 1px;
}

.pvm-search-control-input {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
}

.pvm-search-control-input-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 197px;
}

.pvm-search-control-input-mobile {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
  height: 38px;
}

.pvm-search-control-input-mobile-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 209px;
  height: 38px;
}

/*small*/
@media screen and (max-width: 39.9375em) {
  .pvm-search-control-input {
    width: 200px;
  }

  .pvm-search-control-input-mobile {
    width: 200px;
  }

  .pvm-search-control-input-full {
    width: 147px;
  }

  .pvm-search-control-input-mobile-full {
    width: 158px;
  }

}

</style>
