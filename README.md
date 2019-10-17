# phila-vue-mapping ([@philly/vue-mapping](https://www.npmjs.com/package/@philly/vue-mapping) in [npmjs.com](https://npmjs.com))

phila-vue-mapping is a library of Vue components that can be used in mapping apps which use [Vue.js](https://vuejs.org/v2/guide/) and [Vuex](https://vuex.vuejs.org/).  It includes many mapping components such as [Maps](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/Map), [ESRI WebMaps](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/EsriWebMap), and [Cyclomedia Widgets](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki/CyclomediaWidget), etc.

![](https://s3.amazonaws.com/mapboard-images/phila-vue-mapping/phila-vue-mapping.JPG)

## To Include The Components In Your App
* in a bundled app, use npm:

    `npm install @philly/vue-mapping`

* in an html file, use the CDN:

    `<script src="//unpkg.com/@philly/vue-mapping@1.0.19/dist/phila-vue-mapping.js"></script>`


## Usage
Check out [the wiki](https://github.com/CityOfPhiladelphia/phila-vue-mapping/wiki) for usage documentation.

## Release Notes

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
