<template>
<div>
  <b-navbar type="dark" variant="dark">
    <b-navbar-nav>
      <b-nav-item><router-link to="/">HOME</router-link></b-nav-item>
      <b-nav-item><router-link to="/about">ABOUT</router-link></b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</div>
</template>

<script>
export default {
    name: "header"
}
</script>

<style>

</style>