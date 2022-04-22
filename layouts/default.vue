<template>
  <div class="h-screen">
    <NavBar />
    <nuxt class="min-h-full" />
    <Footer />
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,

    }
  },

  head () {
    return {
      title: "BlomBlog",
      icon: "../static/favicon-package/favicon.ico"
    }
  },
}
</script>