import resolve from 'rollup-plugin-node-resolve';
import vue from 'rollup-plugin-vue';
import buble from 'rollup-plugin-buble';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import analyzer from 'rollup-analyzer-plugin';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
import replace from 'rollup-plugin-replace';

// check if we're in development mode (i.e. rollup is running with watch)
const dev = !!process.env.ROLLUP_WATCH || process.env.NODE_ENV === 'development';

// get module names of dependencies (we want to treat these as externals so
// they don't get bundled)
import fs from 'fs';
import path from 'path';
const pkg = JSON.parse(fs.readFileSync(path.resolve('./package.json'), 'utf-8'));
const external = Object.keys(pkg.dependencies || {});

// don't bundle this css either
external.push('leaflet-measure/dist/leaflet-measure.css');
external.push('leaflet-vector-icon/dist/leaflet-vector-icon.css');

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/phila-vue-mapping.js',
    format: 'umd',
    name: 'philaVueMapping',
    // silence warning about multiple exports
    exports: 'named',
    // map imports to global names for using vue-leaflet-esri in the browser
    globals: {
      leaflet: 'L',
      'esri-leaflet': 'L.esri',
      moment: 'moment',
      'leaflet-measure': 'L.Control.Measure',
      'leaflet-vector-icon': 'leafletVectorIcon',
      jquery: '$',
      axios: 'axios',
      vue: 'Vue',
      vuex: 'Vuex',
      proj4: 'proj4',
      'blueimp-md5': 'md5',
      '@turf/helpers': 'turf',
      '@turf/distance': 'turf.distance',
      '@turf/area': 'turf.area',
    },
    sourcemap: true,
  },
  // don't bundle vendor deps
  external,
  plugins: [
    // allow implicit imports from index.js files
    resolve({
      // silence warning about preferring built-in modules over local ones
      preferBuiltins: true,
      // use browser versions of dependecy packages where available
      // browser: true,
      jsnext: true,
    }),
    // for bundling node built-in modules (we use `url`)
    builtins(),
    // the builtins have some references to `global` so handle those
    globals(),
    // transform .vue components
    vue({
      css: true,
    }),
    // downgrade es6
    buble({
      transforms: {
        dangerousForOf: true,
      },
    }),
    // handle commonjs modules, e.g. leaflet
    // REVIEW is this needed?
    commonjs(),
    // minify if production
    // !dev && uglify(),
    // analyze if dev
    dev && analyzer(),

    // replace({
    //   'process.env.NODE_ENV': JSON.stringify( 'development' )
    // })
  ],
};
