<script>

import length from '@turf/length';

export default {
  name: 'MbMeasureTool',
  mounted() {
    console.log('MbMeasureTool.vue mounted is running');
    const mapboxElement = this.$mapboxElement = this.createMapboxElement();
    const map = this.$store.state.map.map;
  },
  // destroyed() {
  //   // console.log('EsriTiledMapLayer destroyed is running');
  //   this.$mapboxElement._map.removeLayer(this.$mapboxElement);
  // },
  methods: {
    createMapboxElement() {
      let layer = {
        'id': 'labels',
        'type': 'raster',
        'source': 'labels',
      };
      return layer;
    },
    parentMounted(parent) {
      // const map = parent.$mapboxElement;
      const map = this.$store.map;
      console.log('MbMeasureTool.vue parentMounted is running, parent:', parent, 'map:', map);

      var distanceContainer = document.getElementById('distance');

      // GeoJSON object to hold our measurement features
      var geojson = {
        'type': 'FeatureCollection',
        'features': [],
      };

      // Used to draw a line between points
      var linestring = {
        'type': 'Feature',
        'geometry': {
          'type': 'LineString',
          'coordinates': [],
        },
      };

      map.addSource('geojson', {
        'type': 'geojson',
        'data': geojson,
      });

      // Add styles to the map
      map.addLayer({
        id: 'measure-points',
        type: 'circle',
        source: 'geojson',
        paint: {
          'circle-radius': 5,
          'circle-color': '#000',
        },
        filter: [ 'in', '$type', 'Point' ],
      });

      map.addLayer({
        id: 'measure-lines',
        type: 'line',
        source: 'geojson',
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': '#000',
          'line-width': 2.5,
        },
        filter: [ 'in', '$type', 'LineString' ],
      });


      map.on('click', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: [ 'measure-points' ],
        });

        // Remove the linestring from the group
        // So we can redraw it based on the points collection
        if (geojson.features.length > 1) {
          geojson.features.pop();
        }

        // Clear the Distance container to populate it with a new value
        distanceContainer.innerHTML = '';

        // If a feature was clicked, remove it from the map
        if (features.length) {
          var id = features[0].properties.id;
          geojson.features = geojson.features.filter(function(point) {
            return point.properties.id !== id;
          });
        } else {
          var point = {
            'type': 'Feature',
            'geometry': {
              'type': 'Point',
              'coordinates': [ e.lngLat.lng, e.lngLat.lat ],
            },
            'properties': {
              'id': String(new Date().getTime()),
            },
          };

          geojson.features.push(point);
        }

        if (geojson.features.length > 1) {
          linestring.geometry.coordinates = geojson.features.map(function(
            point,
          ) {
            return point.geometry.coordinates;
          });

          geojson.features.push(linestring);

          // Populate the distanceContainer with total distance
          var value = document.createElement('pre');
          value.textContent =
        'Total distance: ' +
        length(linestring).toLocaleString() +
        'km';
          distanceContainer.appendChild(value);
        }

        map.getSource('geojson').setData(geojson);
      });
      // });

      map.on('mousemove', function(e) {
        var features = map.queryRenderedFeatures(e.point, {
          layers: [ 'measure-points' ],
        });
        // UI indicator for clicking/hovering a point on the map
        map.getCanvas().style.cursor = features.length
          ? 'pointer'
          : 'crosshair';
      });
    },
  },
  // we don't actually render anything, but need to define either a template
  // or a render function
  render(h) {
    return;
  },
};
</script>
