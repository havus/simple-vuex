<template>
  <b-row>
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
          >
            <option :value="null">
              -
            </option>
            <option
              v-for="mrrTaggingType in MrrTaggingTypes"
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
          <b-form-input id="company-id" size="sm"/>
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
          <b-form-input id="company-brand-name" size="sm"/>
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
          <b-form-input id="company-legal-name" size="sm"/>
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
          <b-form-input id="company-npwp" size="sm"/>
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
          <b-form-input id="company-address" size="sm"/>
        </b-col>
      </b-row>
    </b-col>
  </b-row>
</template>

<script>
export default {
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
    MrrTaggingTypes: [
      { text: 'New', value: 'new' },
      { text: 'Renewal', value: 'renewal' },
    ],
  }),
};
</script>

<style>
  label {
    text-align: left !important;
  }
</style>
