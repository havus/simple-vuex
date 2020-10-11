<template>
  <b-row class="mt-5">
    <b-col cols="5">
      <b-row class="my-1">
        <b-col sm="5" class="text-left">
          <label for="app-service">
            Application Service
          </label>
        </b-col>
        <b-col sm="7">
          <b-form-select
            id="app-service"
            size="sm"
            v-model="app_id"
          >
            <option :value="null">
              -
            </option>
            <option
              v-for="app in applicationServices"
              :key="app.id"
              :value="app.id"
            >
              {{ app.attributes.name }}
            </option>
          </b-form-select>
        </b-col>
      </b-row>

      <!-- BILLING TYPE -->

      <b-row class="my-1">
        <b-col sm="5" class="text-left">
          <label for="billing-type">
            Billing Type
          </label>
        </b-col>
        <b-col sm="7">
          <b-form-select
            id="billing-type"
            size="sm"
            v-model="billing_type"
          >
            <option :value="null">
              -
            </option>
            <option
              v-for="billingType in billingTypes"
              :key="billingType.value"
              :value="billingType.value"
            >
              {{ billingType.text }}
            </option>
          </b-form-select>
        </b-col>
      </b-row>

      <!-- MRR TAGGING TYPE  -->

      <b-row class="my-1">
        <b-col sm="5" class="text-left">
          <label for="mrr-type">
            MRR Tagging Type
          </label>
        </b-col>
        <b-col sm="7">
          <b-form-select
            id="mrr-type"
            size="sm"
            v-model="mrr_type"
          >
            <option :value="null">
              -
            </option>
            <option
              v-for="mrrTaggingType in mrrTaggingTypes"
              :key="mrrTaggingType.value"
              :value="mrrTaggingType.value"
            >
              {{ mrrTaggingType.text }}
            </option>
          </b-form-select>
        </b-col>
      </b-row>
    </b-col>

    <b-col cols="6" class="offset-1">
      <b-row class="my-1">
        <b-col sm="3" class="text-left">
          <label for="company-id">
            Company ID
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="company-id" v-model="company_id" size="sm"/>
        </b-col>
      </b-row>

      <!-- BRAND NAME -->

      <b-row class="my-1">
        <b-col sm="3" class="text-left">
          <label for="company-brand-name">
            Brand Name
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="company-brand-name" v-model="brand_name" size="sm"/>
        </b-col>
      </b-row>

      <!-- LEGAL NAME -->

      <b-row class="my-1">
        <b-col sm="3" class="text-left">
          <label for="company-legal-name">
            Legal Name
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="company-legal-name" v-model="legal_name" size="sm"/>
        </b-col>
      </b-row>

      <!-- NPWP -->

      <b-row class="my-1">
        <b-col sm="3" class="text-left">
          <label for="company-npwp">
            Company NPWP
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input
            id="company-npwp"
            v-model="company_npwp"
            :formatter="npwpFormatter"
            size="sm"
          />
        </b-col>
      </b-row>

      <!-- COMPANY ADDRESS -->

      <b-row class="my-1">
        <b-col sm="3" class="text-left">
          <label for="company-address">
            Company Address
          </label>
        </b-col>
        <b-col sm="9">
          <b-form-input id="company-address" v-model="company_address" size="sm"/>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
  computed: {
    app_id: {
      get() { return this.$store.state.subscription.app_id; },
      set(value) { this.$store.commit('UPDATE_APP_ID', value); },
    },
    billing_type: {
      get() { return this.$store.state.subscription.billing_type; },
      set(value) { this.$store.commit('UPDATE_BILLING_TYPE', value); },
    },
    mrr_type: {
      get() { return this.$store.state.subscription.mrr_type; },
      set(value) { this.$store.commit('UPDATE_MRR_TYPE', value); },
    },

    company_id: {
      get() { return this.$store.state.subscription.company_id; },
      set(value) { this.$store.commit('UPDATE_COMPANY_ID', value); },
    },
    legal_name: {
      get() { return this.$store.state.subscription.legal_name; },
      set(value) { this.$store.commit('UPDATE_LEGAL_NAME', value); },
    },
    brand_name: {
      get() { return this.$store.state.subscription.brand_name; },
      set(value) { this.$store.commit('UPDATE_BRAND_NAME', value); },
    },
    company_npwp: {
      get() { return this.$store.state.subscription.company_npwp; },
      set(value) { this.$store.commit('UPDATE_COMPANY_NPWP', value); },
    },
    company_address: {
      get() { return this.$store.state.subscription.company_address; },
      set(value) { this.$store.commit('UPDATE_COMPANY_ADDRESS', value); },
    },
  },
  data: () => ({
    applicationServices: [
      { id: 1, attributes: { name: 'Google' } },
      { id: 2, attributes: { name: 'Twitter' } },
      { id: 3, attributes: { name: 'Facebook' } },
    ],
    billingTypes: [
      { text: 'New Subscription', value: 'new_subscription' },
      { text: 'Upgrade', value: 'upgrade' },
    ],
    mrrTaggingTypes: [
      { text: 'New', value: 'new' },
      { text: 'Renewal', value: 'renewal' },
    ],
  }),
  methods: {
    npwpFormatter(value) {
      if (!value) return '';

      const temp = value.replace(/\D/g, '');
      let result = null;

      if (temp.length <= 2) {
        result = temp.replace(/(\d{2})/, '$1');
      } else if (temp.length <= 5) {
        result = temp.replace(new RegExp(`(\\d{2})(\\d{${temp.length % 2}})`), '$1.$2');
      } else if (temp.length <= 8) {
        result = temp.replace(
          new RegExp(`(\\d{2})(\\d{3})(\\d{${temp.length % 3}})`),
          '$1.$2.$3',
        );
      } else if (temp.length <= 9) {
        result = temp.replace(/(\d{2})(\d{3})(\d{3})(\d{1})/, '$1.$2.$3.$4');
      } else if (temp.length <= 12) {
        result = temp.replace(
          new RegExp(`(\\d{2})(\\d{3})(\\d{3})(\\d{1})(\\d{${temp.length % 3}})`),
          '$1.$2.$3.$4-$5',
        );
      } else if (temp.length <= 15) {
        result = temp.replace(
          new RegExp(`(\\d{2})(\\d{3})(\\d{3})(\\d{1})(\\d{3})(\\d{${temp.length % 3}})`),
          '$1.$2.$3.$4-$5.$6',
        );
      } else {
        result = value.substring(0, value.length - 1);
      }

      return result;
    },
  },
};
</script>

<style>
  label {
    text-align: left !important;
  }
</style>
