// inspired by https://github.com/KoRiGaN/Vue2Leaflet/blob/master/src/utils/eventsBinder.js
function bindEvents(vue, leafletElement, events) {
  // get just leaflet events
  const leafletEvents = Object.keys(events)
                              .filter(eventName => {
                                return eventName.startsWith('l-');
                              })
                              .map(eventName => eventName.slice(2));

  for (let leafletEvent of leafletEvents) {
    const vueEvent = 'l-' + leafletEvent;
    leafletElement.on(leafletEvent, (e) => {
      vue.$emit(vueEvent, e);
    });
  }
}

export default bindEvents;
