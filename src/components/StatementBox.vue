<template>
  <b-container id="statements">
    <h1>Statements List</h1>
    <b-table hover :items="allStates" class="text-left"></b-table>
    <b-button variant="danger" @click="resetState">Reset Statements</b-button>
  </b-container>
</template>

<script>
// when we just need the state without setter, we can use line bellow on computed
// ...mapState(['app_id', 'billing_type', 'mrr_type', 'subscriptionControlIsReady']),

// import { createNamespacedHelpers } from 'vuex';
// const { mapState } = createNamespacedHelpers('store/subscription');

export default {
  computed: {
    allStates() {
      const bundleState = [];
      const keys = Object.keys(this.$store.state.subscription);

      for (let i = 0; i < keys.length; i += 1) {
        bundleState.push({
          key: keys[i],
          value: this.$store.state.subscription[keys[i]],
        });
      }
      return bundleState;
    },
  },
  methods: {
    resetState() {
      this.$store.commit('RESET_STATE');
    },
  },
};
</script>

<style scoped>
  h1 {
    margin-top: 50px;
  }
  #statements td {
    text-align: right;
  }
</style>
