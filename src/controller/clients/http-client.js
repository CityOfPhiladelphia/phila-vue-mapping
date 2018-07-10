import axios from 'axios';
import moment from 'moment';
import BaseClient from './base-client';

class HttpClient extends BaseClient {
  evaluateParams(feature, dataSource) {
    const params = {};
    const paramEntries = Object.entries(dataSource.options.params);
    const state = this.store.state;

    for (let [key, valOrGetter] of paramEntries) {
      let val;

      if (typeof valOrGetter === 'function') {
        val = valOrGetter(feature, state);
      } else {
        val = valOrGetter;
      }

      params[key] = val;
    }

    return params;
  }

  fetch(feature, dataSource, dataSourceKey, targetIdFn) {
    let params = this.evaluateParams(feature, dataSource);
    // console.log('http-client fetch, feature:', feature, 'dataSource:', dataSource, 'dataSourceKey:', dataSourceKey, 'targetIdFn:', targetIdFn, 'params:', params);
    let url = dataSource.url;
    const options = dataSource.options;
    const urlAddition = params.urlAddition;
    if (urlAddition) {
      url += encodeURIComponent(urlAddition);
      // url += encodeURIComponent(urlAddition.properties.street_address);
    }
    // console.log('url', url);
    // console.log('http-client fetch, feature:', feature, 'dataSource:', dataSource, 'dataSourceKey:', dataSourceKey, 'targetIdFn:', targetIdFn, 'params:', params);
    const successFn = options.success;

    //if (params.urlAddition)

    // if the data is not dependent on other data
    axios.get(url, { params }).then(response => {
      // call success fn
      let data = response.data;

      if (successFn) {
        data = successFn(data);
      }

      // get target id, if there should be one
      let targetId;
      if (targetIdFn) {
        targetId = targetIdFn(feature);
      }

      this.dataManager.didFetchData(dataSourceKey, 'success', data, targetId);
    }, response => {
      console.log('fetch json error', response);
      this.dataManager.didFetchData(dataSourceKey, 'error');
    });
  }

  fetchMore(feature, dataSource, dataSourceKey, highestPageRetrieved) {
    let params = this.evaluateParams(feature, dataSource);
    params.page = highestPageRetrieved + 1;
    let url = dataSource.url;
    const options = dataSource.options;
    const urlAddition = params.urlAddition;
    if (urlAddition) {
      // url += encodeURIComponent(urlAddition.properties.street_address);
      url += encodeURIComponent(urlAddition);
    }
    const successFn = options.success;

    // if the data is not dependent on other data
    axios.get(url, { params }).then(response => {
      // call success fn
      let data = response.data;
      if (successFn) {
        data = successFn(data);
      }
      // console.log('data', data);
      this.dataManager.didFetchMoreData(dataSourceKey, 'success', data);
    }, response => {
      console.log('fetch json error', response);
      this.dataManager.didFetchMoreData(dataSourceKey, 'error');
    });
  }

  fetchNearby(feature, dataSource, dataSourceKey, targetIdFn) {
    const params = this.evaluateParams(feature, dataSource);
    const url = dataSource.url;
    const options = dataSource.options;
    // const srid = options.srid || 4326;
    const table = options.table;
    // TODO generalize these options into something like a `sql` param that
    // returns a sql statement
    const dateMinNum = options.dateMinNum || null;
    const dateMinType = options.dateMinType || null;
    const dateField = options.dateField || null;
    const successFn = options.success;
    const distances = options.distances || 250;
    // console.log('fetchNearby distances:', distances);

    const distQuery = "ST_Distance(the_geom::geography, ST_SetSRID(ST_Point("
                    + feature.geometry.coordinates[0]
                    + "," + feature.geometry.coordinates[1]
                    + "),4326)::geography)";

    const latQuery = "ST_Y(the_geom)";
    const lngQuery = "ST_X(the_geom)";

    // let select = '*'
    // if (calculateDistance) {
    const select = "*, " + distQuery + 'as distance,' + latQuery + 'as lat, ' + lngQuery + 'as lng';
    // }

    params['q'] = "select" + select + " from " + table + " where " + distQuery + " < " + distances;

    if (dateMinNum) {
      params['q'] = params['q'] + " and " + dateField + " > '" + moment().subtract(dateMinNum, dateMinType).format('YYYY-MM-DD') + "'"
    }

    // if the data is not dependent on other data
    axios.get(url, { params }).then(response => {
      // call success fn
      let data = response.data.rows;
      // console.log('table and data', table, data);

      if (successFn) {
        data = successFn(data);
      }

      // get target id, if there should be one
      let targetId;
      if (targetIdFn) {
        targetId = targetIdFn(feature);
      }

      this.dataManager.didFetchData(dataSourceKey, 'success', data, targetId);
    }, response => {
      console.log('fetch json error', response);
      this.dataManager.didFetchData(dataSourceKey, 'error');
    });
  }
}

export default HttpClient;
