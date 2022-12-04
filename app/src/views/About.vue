<template>
  <div class="about">
    <h1>This is an about page</h1>
    {{ this.$route.params }}

    {{ this.$route.query }}
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$route.params, '1')

    console.log(this.$route.query, '2')
  },
}
</script>
