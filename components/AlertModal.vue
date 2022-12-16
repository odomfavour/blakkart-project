<template>
  <b-modal :id="id" :title="id" size="sm" centered hide-footer hide-header>
    <div class="text-center">
      <b-icon
        icon="check-circle-fill"
        font-scale="4"
        class="text-success"
        v-if="id === 'success'"
      ></b-icon>
      <b-icon
        icon="exclamation-triangle-fill"
        class="text-danger"
        font-scale="4"
        v-else
      ></b-icon>
      <p class="my-4 text-center">{{ message }}</p>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    id: String,
    message: String,
  },
}
</script>

<style>
</style>