// Vue and the main app
var Vue = require('vue');
import vueBases from './main.js';

// Redefine variables from import so that they can be edited
var vueComponents = vueBases.baseComponents
var vueData = vueBases.baseData

// This is an coordinating instance used for inter-component pub/sub interfaces
var eventHub = new Vue()
Vue.prototype.$eventHub = eventHub

//------------------------------------------------------------------------------
// Main Vue Instance
//------------------------------------------------------------------------------

new Vue({
  el: '#vueMount',
  components: vueComponents,
  // created: vueCreated,
  data: vueData,
  // events: vueEvents,
  // filters: vueFilters,
  // methods: vueMethods
});