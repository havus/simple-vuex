<template>
  <div id="form">
    <h1 class="text-left">Add New Subscription</h1>
    <hr>

    <FormControl/>
  </div>
</template>

<script>
import FormControl from '@/components/FormControl.vue';

export default {
  name: 'Form',
  components: {
    FormControl,
  },
};
</script>

<style lang="scss" scoped>
  #form {
    padding: 50px;
    flex-grow: 1;
  }
</style>
