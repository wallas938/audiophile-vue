import { createStore } from 'vuex';

const data = require('../data/data.json');

import mutations from './mutations';
import actions from './actions';
import getters from './getters';

const store = createStore({
  state: {
    data: [...data]
  },
  getters,
  mutations,
  actions,
});

export default store;