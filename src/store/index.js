import Vue from 'vue';
import Vuex from 'vuex';
import subscriptionModule from './subscription';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { subscription: subscriptionModule },
});
