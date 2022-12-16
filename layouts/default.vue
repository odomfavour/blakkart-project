<template>
  <section>
    <Header />
    <main>
      <nuxt />
    </main>
    <Footer />
  </section>
</template>

<script>
export default {}
</script>

<style>
body {
  font-family: 'Montserrat', sans-serif;
}

.btn-outline-main {
  background-color: transparent;
  border: 1.6528px solid #fad647;
  padding: 12.396px 19.0072px;
  color: #fad647;
  text-transform: uppercase;
}

.gold-btn {
  background-color: #fad647;
  border: 1.6528px solid #fad647;
  padding: 12.396px 19.0072px;
  text-transform: uppercase;
}

.white-outined-btn {
  background-color: transparent;
  border: 1.6528px solid #fff;
  padding: 12.396px 19.0072px;
  color: #fff;
  text-transform: uppercase;
}

.modal-trigger {
  text-decoration: underline;
  display: inline;
  cursor: pointer;
  text-transform: uppercase;
}

.shopping-display {
  width: 100%;
  overflow: hidden;
}

.nav-link, .btn-link {
  color: #000 !important;
}
</style>