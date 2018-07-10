<template>
  <div :class="this.containerClass">
    <form @submit.prevent="handleSearchFormSubmit"
          autocomplete="off"
          id="search-form"
          class="mb-search-control-form"
    >
      <!-- <div class="form-group"> -->
        <input :class="this.inputClass"
               id="mb-search-control-input"
               placeholder="Search the map"
               :value="this.addressEntered"
               tabindex="0"
               @keyup="didType"
        />
      <!-- </div> -->
    </form>
    <button :class="this.buttonClass"
            v-if="this.addressAutocompleteEnabled && this.addressEntered != '' && this.addressEntered != null"
            @click="handleFormX"
    >
      <i class="fa fa-times fa-lg"></i>
    </button>
    <button :class="this.buttonClass"
            name="mb-search-control-button"
            tabindex="-1"
            @click="this.handleSearchFormSubmit"
    >
      <i class="fa fa-search fa-lg"></i>
    </button>
  </div>
</template>

<script>
  import * as L from 'leaflet';
  import debounce from 'lodash.debounce';
  import axios from 'axios';

  export default {
    props: ['position'],
    computed: {
      map() {
        return this.$store.state.map.map;
      },
      addressEntered() {
        return this.$store.state.map.addressEntered;
      },
      containerClass() {
        if (this.isMobileOrTablet) {
          return 'mb-search-control-container-mobile';
        } else {
          return 'mb-search-control-container';
        }
      },
      inputClass() {
        if (this.isMobileOrTablet) {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'mb-search-control-input-mobile';
            } else {
              return 'mb-search-control-input-mobile-full';
            }
          } else {
            return 'mb-search-control-input-mobile';
          }
        } else {
          if (this.addressAutocompleteEnabled) {
            if (this.addressEntered === '' || this.addressEntered === null) {
              return 'mb-search-control-input';
            } else {
              return 'mb-search-control-input-full';
            }
          } else {
            return 'mb-search-control-input';
          }
        }
      },
      buttonClass() {
        if (this.isMobileOrTablet) {
          return 'mb-search-control-button-mobile'
        } else {
          return 'mb-search-control-button'
        }
      },
      addressAutocompleteEnabled() {
        // TODO this is temporarily disabled
        if (this.$config.addressAutocomplete.enabled === true) {
          return true;
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
      didType: _.debounce(function (e) {
          console.log('debounce is running');
          if (this.addressAutocompleteEnabled) {
            console.log('debounce is running, e:', e, 'this:', this);
            if (e.key === "ArrowDown") {
              document.getElementById('address-candidate-list-0').focus();
              return;
            }
            const { value } = e.target;
            this.getCandidates(value);
            this.$store.commit('setAddressEntered', value);
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
      },
      handleSearchFormSubmit() {
        // const value = e.target[0].value;
        // const value = this.addressEntered;
        let value;
        if (this.addressAutocompleteEnabled){
          value = this.$store.state.map.addressEntered;
        } else {
          value = $('#mb-search-control-input').val();
        }
        console.log('handleSearchFormSubmit is running, value:', value);
        // console.log('handleSearchFormSubmit value:', value);
        this.$controller.handleSearchFormSubmit(value);
        this.$store.commit('setAddressEntered', value);
        // this.$store.commit('setShouldShowAddressCandidateList', false);
      },
    }
  };
</script>

<style scoped>

.mb-search-control-container {
  height: 48px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
}

.mb-search-control-container-mobile {
  height: 38px;
  border-radius: 2px;
  box-shadow:0 2px 4px rgba(0,0,0,0.2),0 -1px 0px rgba(0,0,0,0.02);
}

.mb-search-control-form {
  display: inline-block;
}

/* .mb-search-clear-button {
  display: inline-block;
  color: #fff;
  width: 50px;
  background: #2176d2;
  line-height: 48px;
  padding: 0px;
} */

.mb-search-control-button {
  display: inline-block;
  color: #fff;
  width: 50px;
  background: #2176d2;
  line-height: 48px;
  padding: 0px;
}

.mb-search-control-button-mobile {
  display: inline-block;
  color: #fff;
  width: 38px;
  height: 38px;
  background: #2176d2;
  line-height: 38px;
  padding: 0px;
  padding-top: 1px;
}

.mb-search-control-input {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
}

.mb-search-control-input-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 197px;
}

.mb-search-control-input-mobile {
  display: inline-block;
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 250px;
  height: 38px;
}

.mb-search-control-input-mobile-full {
  border: 0;
  padding: 15px;
  font-family: 'Montserrat', 'Tahoma', sans-serif;
  font-size: 16px;
  width: 209px;
  height: 38px;
}

/*small*/
@media screen and (max-width: 39.9375em) {
  .mb-search-control-input {
    width: 200px;
  }

  .mb-search-control-input-mobile {
    width: 200px;
  }

  .mb-search-control-input-full {
    width: 147px;
  }

  .mb-search-control-input-mobile-full {
    width: 158px;
  }

}

</style>
