<template>
  <div id="form">
    <h1 class="text-left">Add New Subscription</h1>
    <hr>

    <FormControl/>
    <StatementBox/>
  </div>
</template>

<script>
import FormControl from '@/components/FormControl.vue';
import StatementBox from '@/components/StatementBox.vue';

export default {
  name: 'Form',
  components: {
    FormControl,
    StatementBox,
  },
};
</script>

<style lang="scss" scoped>
  #form {
    padding: 50px;
    flex-grow: 1;
    overflow: scroll;
  }
</style>
