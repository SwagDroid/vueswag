<template>
  <div class="row justify-content-center">
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/userprofile">UserProfile</router-link>
    <RouterView />
  </div>
</div>
</template>

<script>
export default {};
</script>

<style></style>