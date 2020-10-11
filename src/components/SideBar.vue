<template>
  <div id="sidebar">
    <nav class="mb-3">
      <b-nav vertical>
        <b-nav-item class="nav-item" to="/">
          <span>Home</span>
        </b-nav-item>

        <b-nav-item class="nav-item" to="/form">
          <span>Form</span>
        </b-nav-item>
      </b-nav>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>

<style lang="scss" scoped>
  #sidebar {
    height:             100%;
    width:              350px;
    max-width:          350px;
    background-color: rgb(48, 49, 72);
    padding-top:        50px;
  }

  .nav-item {
    span {
      color: white;
    }

    font-size:    20px;
    font-weight:  400;
    text-align:   left;
    padding:      0 20px;

    &:hover {
      background-color: rgb(68, 70, 98);
    }
  }
</style>
