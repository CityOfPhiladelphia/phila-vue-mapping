# phila-vue-mapping ([@phila/vue-mapping](https://www.npmjs.com/package/@phila/vue-mapping) in [npmjs.com](https://npmjs.com))

phila-vue-mapping is a library of Vue components that can be used in mapping apps which use [Vue.js](https://vuejs.org/v2/guide/) and [Vuex](https://vuex.vuejs.org/).  It includes many mapping components such as [Maps](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/Map), [ESRI WebMaps](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/EsriWebMap), and [Cyclomedia Widgets](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/CyclomediaWidget), etc.

![](https://s3.amazonaws.com/mapboard-images/phila-vue-mapping/phila-vue-mapping.JPG)

## To Include The Components In Your App
* in a bundled app, use npm:

    `npm install @phila/vue-mapping`

* in an html file, use the CDN:

    `<script src="//unpkg.com/@phila/vue-mapping@2.0.5/dist/phila-vue-mapping.js"></script>`


## Usage
Check out [the wiki](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki) for usage documentation.

## Release Notes

### 2.1.18 - 7/30/2020

* fixes bug in mapbox/RasterLayer.vue for viewerboard

### 2.1.17 - 7/30/2020

* allows moving legends to right side
* changes css for moving measure tool to bottom right corner

### 2.1.16 - 7/30/2020

* allows moving distance measure tool to right side

### 2.1.15 - 7/30/2020

* uses mapbox-gl-draw.min.js from https://gist.github.com/godismyjudge95/a4ea43263db53b90b05511c911cd0034 to fix map clicking on mobile.  This was suggested by a comment here: https://github.com/mapbox/mapbox-gl-js/issues/9114.

### 2.1.14 - 7/29/2020

* small fix for year dropdown in mapbox

### 2.1.13 - 7/29/2020

* fixes more small bugs for releasing mapboard with a mapbox map

### 2.1.12 - 7/20/2020

* all commits for using mapbox in mapboard

### 2.1.11 - 6/25/2020

* fixes yarn lock for release

### 2.1.10 - 6/25/2020

* fixes circlemarkers size in pinboard

### 2.1.9 - 6/23/2020

* adds dependency leaflet-shape-markers

### 2.1.8 - 6/17/2020

* fixes bug with font awesome marker placement in mapbox map

### 2.1.7 - 6/16/2020

* adds FontAwesomeMarker.vue to mapbox section

### 2.1.6 - 6/14/2020

* improvements in mapbox files for making vue work better, adding more diverse mapbox styles.

### 2.1.5 - 6/9/2020

* improvements in mapbox files for basemaps, circlemarkers, etc.

### 2.1.4 - 5/27/2020

* upgrades packages

### 2.1.3 - 5/7/2020

* changes for popup order in layerboard

### 2.1.2 - 5/6/2020

* changes to pictometry widget

### 2.1.1 - 5/5/2020

* fixes problems with pushing to npm

### 2.1.0 - 5/5/2020

* merges changes for use in pinboard and viewerboard

### 2.0.10 - 4/1/2020

* fixes css for rendering map and cyclomedia in property data explorer

### 2.0.9 - 2/6/2020

### 2.0.8 - 2/6/2020

* fixes pictometry popout button

### 2.0.7 - 2/6/2020

* lints files for release

### 2.0.6 - 2/6/2020

* fixes for viewerboard basemap toggle

### 2.0.5 - 1/31/2020

* pushes again after linting project

### 2.0.4 - 1/31/2020

* changes to make new destination work

### 2.0.3 - 1/31/2020

* uses major updates to cyclomedia
* pushes to @phila/vue-mapping instead of @philly/vue-mapping

### 2.0.2 - 12/30/2019

### 2.0.1 - 12/19/2019

### 2.0.0 - 12/17/2019

### 1.0.47 - 10/23/2019

* correctly fixes date-fns

### 1.0.46 - 10/23/2019

* attempt to fix date-fns

### 1.0.45 - 10/23/2019

* you have to use the following with this:

    "@vue/cli-plugin-babel": "^4.0.5",
    "@vue/cli-plugin-eslint": "^4.0.5",
    "@vue/cli-service": "^4.0.5",

### 1.0.44 - 10/22/2019

* updates from dependabot

### 1.0.43 - 10/17/2019

* adds linting, fixes VectorMarker by moving changes from update lifecycle hook to a watch

### 1.0.42 - 10/9/2019

* Uses update to L.esri.Webmap to add datetime to popups

### 1.0.41 - 10/7/2019

* Monthly package upgrades, merges in all changes to work with pvd upgrade

### 1.0.40 - 9/24/2019

* Changes for adapting to Cyclomedia 19.12

### 1.0.39 - 9/23/2019

* Changes for adapting to Cyclomedia 19.12

### 1.0.38 - 9/23/2019

* Changes for adapting to Cyclomedia 19.12

### 1.0.37 - 9/6/2019

* Adds to Polyline.vue to fix style changes

### 1.0.36 - 9/6/2019

* Monthly package upgrades

### 1.0.35 - 8/9/2019

* Adds border to address search

### 1.0.34 - 8/9/2019

* Monthly package upgrades

### 1.0.33 - 7/11/2019

* Upgrades lodash-es and lodash.defaultsdeep

### 1.0.32 - 6/20/2019

* changes for Pinboard

### 1.0.31 - 6/2/2019

* Uses axios 0.19.0 to fix security bug

### 1.0.30 - 5/30/2019

* Adds components/OverlaySelectControl.vue for toggling between two years of data in CleanPhl.
* Changes made over initial development of resource finder.
