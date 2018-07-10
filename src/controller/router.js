import { parse as parseUrl } from 'url';

class Router {
  constructor(opts) {
    const config = this.config = opts.config;
    this.store = opts.store;
    this.controller = opts.controller;
    // this.eventBus = opts.eventBus;
    this.dataManager = opts.dataManager;
    this.history = window.history;

    // check if the router should be silent (i.e. not update the url or listen
    // for hash changes)
    const silent = this.silent = !config.router || !config.router.enabled;

    // only listen for route changes if routing is enabled
    if (!silent) {
      window.onhashchange = this.hashChanged.bind(this);
    }
  }

  activeTopicConfig() {
    const key = this.store.state.activeTopic;
    let config;

    // if no active topic, return null
    if (key) {
      config = this.config.topics.filter((topic) => {
        return topic.key === key;
      })[0];
    }

    return config || {};
  }

  activeParcelLayer() {
    return this.activeTopicConfig().parcels || this.config.map.defaultBasemap;
  }

  makeHash(address, topic) {
    console.log('make hash', address, topic);

    // must have an address
    if (!address || address.length === 0) {
      return null;
    }

    let hash = `#/${encodeURIComponent(address)}`;
    if (topic) {
      hash += `/${topic}`;
    }

    return hash;
  }

  getAddressFromState() {
    // TODO add an address getter fn to config so this isn't ais-specific
    const geocodeData = this.store.state.geocode.data || {};
    const props = geocodeData.properties || {};
    if (geocodeData.street_address) {
      return geocodeData.street_address;
    } else if (props.street_address) {
      return props.street_address;
    }
  }

  hashChanged() {
    // console.log('hash changed =>', window.location.hash);

    const location = window.location;
    const hash = location.hash;

    // parse url
    const comps = parseUrl(location.href);
    const query = comps.query;

    // TODO handle ?search entry point
    // if (query && query.search) {
    // }

    // parse path
    const pathComps = hash.split('/').splice(1);
    const addressComp = pathComps[0];

    // if there's no address, erase it
    if (!addressComp) {
      this.dataManager.resetGeocode();
      return;
    }

    const nextAddress = decodeURIComponent(addressComp);
    let nextTopic;

    if (pathComps.length > 1) {
      nextTopic = decodeURIComponent(pathComps[1]);
    }

    this.store.commit('setLastSearchMethod', 'geocode');

    this.routeToAddress(nextAddress);
    this.routeToTopic(nextTopic);
  }

  routeToAddress(nextAddress) {
    console.log('Router.routeToAddress', nextAddress);

    if (nextAddress) {
      // check against current address
      const prevAddress = this.getAddressFromState();

      // if the hash address is different, geocode
      if (!prevAddress || nextAddress !== prevAddress) {
        this.dataManager.geocode(nextAddress)
                        // .then(this.didGeocode.bind(this));
      }
    }

    // the following code doesn't seem to be needed anymore. it's probably
    // happening in didGeocode.
    // if not silent, update hash. this is needed for updating the hash after
    // topic clicks.
    // if (!this.silent) {
    //   const prevOrNextAddress = nextAddress || this.getAddressFromState();
    //   const nextHash = this.makeHash(prevOrNextAddress, nextTopic);
    //
    //   if (nextHash) {
    //     // TODO replace state
    //     const prevState = this.history.state;
    //     // this.history.replaceState(prevState, null, nextHash);
    //
    //     // window.location.hash = nextHash;
    //   }
    // }
  }

  configForBasemap(key) {
    return this.config.map.basemaps[key];
  }

  // this gets called when you click a topic header.
  routeToTopic(nextTopic, target) {
    // check against active topic
    const prevTopic = this.store.state.activeTopic;

    if (!prevTopic || prevTopic !== nextTopic) {
      this.store.commit('setActiveTopic', nextTopic);
      this.store.commit('setActiveParcelLayer', this.activeParcelLayer());
      const prevBasemap = this.store.state.map.basemap || null;
      // if (!this.store.state.map.shouldShowImagery) {
      const nextTopicConfig = this.config.topics.filter(topic => {
        return topic.key === nextTopic;
      })[0] || {};
      const nextBasemap = nextTopicConfig.parcels;
      if (prevBasemap !== nextBasemap) {
        this.store.commit('setBasemap', nextTopicConfig.parcels);
      }
      // console.log('in routeToTopic, nextTopic', nextTopic, 'target', target);
      // if (target) {
      //   target.scrollIntoView();
      // }
      // }
    }

    if (!this.silent) {
      const address = this.getAddressFromState();
      const nextHash = this.makeHash(address, nextTopic);
      const lastHistoryState = this.history.state;
      this.history.replaceState(lastHistoryState, null, nextHash);
    }
  }

  didGeocode() {
    // console.log('Router.didGeocode');

    // update url
    // REVIEW this is ais-specific
    const geocodeData = this.store.state.geocode.data;

    // make hash if there is geocode data
    console.log('Router.didGeocode running - geocodeData:', geocodeData);
    if (geocodeData) {
      // const address = geocodeData.properties.street_address;
      let address;

      if (geocodeData.street_address) {
        address = geocodeData.street_address;
      } else if (geocodeData.properties.street_address) {
        address = geocodeData.properties.street_address;
      }
    // } else if (this.store.state.activeDorMapreg) {
    //   address = this.store.state.activeDorMapreg;
      const topic = this.store.state.activeTopic;

      // REVIEW this is only pushing state when routing is turned on. but maybe we
      // want this to happen all the time, right?
      if (!this.silent) {
        // push state
        const nextHistoryState = {
          geocode: geocodeData
        };
        const nextHash = this.makeHash(address, topic);
        // console.log('nextHistoryState', nextHistoryState, 'nextHash', nextHash);
        this.history.pushState(nextHistoryState, null, nextHash);
      }
    } else {
      // wipe out hash if a geocode fails
      if (!this.silent) {
        // push state
        // const nextHistoryState = {
        //   geocode: null
        // };
        // this.history.pushState(nextHistoryState, null, '#');
        this.history.pushState(null, null, '#');
      }
    }

  }
}

export default Router;
