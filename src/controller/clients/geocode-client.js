import axios from 'axios';
import BaseClient from './base-client';

// the high-level purpose of this is: take an address, geocode it, and put
// the result in state.
class GeocodeClient extends BaseClient {
  fetch(input) {
    // console.log('geocode client fetch', input);

    const store = this.store;

    const geocodeConfig = this.config.geocoder;
    const url = geocodeConfig.url(input);
    const params = geocodeConfig.params;

    // update state
    this.store.commit('setGeocodeStatus', 'waiting');
    // console.log('GEOCODE CLIENT setting last search method to geocode');
    // this.store.commit('setLastSearchMethod', 'geocode');

    const success = this.success.bind(this);
    const error = this.error.bind(this);

    // return a promise that can accept further chaining
    return axios.get(url, { params })
      .then(success)
      .catch(error);
  }

  success(response) {
    // console.log('geocode success', response.config.url);

    const store = this.store;
    const data = response.data;
    const url = response.config.url;
    // console.log(url)

    // TODO handle multiple results

    if (!data.features || data.features.length < 1) {
      // console.log('geocode got no features', data);

      return;
    }

    // TODO do some checking here
    const feature = data.features[0];
    let relatedFeatures = [];
    for (let relatedFeature of data.features.slice(1)){
      if (!!feature.properties.address_high) {
        if (relatedFeature.properties.address_high) {
          relatedFeatures.push(relatedFeature);
        }
      } else {
        relatedFeatures.push(relatedFeature);
      }
    }

    store.commit('setGeocodeData', feature);
    store.commit('setGeocodeRelated', relatedFeatures);
    store.commit('setGeocodeStatus', 'success');

    return feature;
  }

  error(error) {
    // console.log('geocode error', error);

    const store = this.store;
    
    store.commit('setGeocodeStatus', 'error');
    store.commit('setGeocodeData', null);
    store.commit('setGeocodeRelated', null);
  }
}

export default GeocodeClient;
