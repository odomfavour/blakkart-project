<template>
  <section>
    <div class="container">
      <div class="d-flex justify-content-between align-items-center py-5">
        <div class="logo">
          <img src="/main-logo.png" class="img-fluid" alt="" />
        </div>
        <nuxt-link to="/market" class="btn-filled-orange-sq"
          ><b-icon icon="arrow-left" class="mr-2"></b-icon> Return to
          Marketplace</nuxt-link
        >
      </div>
      <div>
        <nuxt />
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style>
</style>