import templateState from './subscription-template';

export default {
  state: {
    ...templateState,
  },
  mutations: {
    UPDATE_APP_ID: (state, payload) => { state.app_id = payload; },
    UPDATE_BILLING_TYPE: (state, payload) => { state.billing_type = payload; },
    UPDATE_MRR_TYPE: (state, payload) => { state.mrr_type = payload; },
    RESET_STATE: (state) => { Object.assign(state, { ...templateState }); },

    UPDATE_COMPANY_ID(state, payload) { state.company_id = payload; },
    UPDATE_LEGAL_NAME(state, payload) { state.legal_name = payload; },
    UPDATE_BRAND_NAME(state, payload) { state.brand_name = payload; },
    UPDATE_COMPANY_NPWP(state, payload) { state.company_npwp = payload; },
    UPDATE_COMPANY_ADDRESS(state, payload) { state.company_address = payload; },
  },
  getter: {
    formControlIsReady: (state) => (state.app_id && state.billing_type && state.mrr_type),
  },
  actions: {
  },
  modules: {
  },
};
