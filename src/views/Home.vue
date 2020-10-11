<template>
  <div id="home">
    <h1>Welcome to simple-vuex</h1>
    <span>by: havus</span>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style>
  #home {
    display:          flex;
    align-items:      center;
    justify-content:  center;
    flex-direction:   column;
    flex-grow:        1;
    overflow:         scroll;
  }

  span { font-size: 20px; }
</style>
