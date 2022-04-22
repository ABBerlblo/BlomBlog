<template>
  <center class="WhiteCity bg-transparent">
    <div class="w-3/5 font-medium">
      <p class="mx-8 py-16 text-red-500 text-4xl font-bold text-left">Blog</p>
      <div class="">
        <MainPost
          v-for="item in TopPost"
          :key="item.id"
          :item="item"
        ></MainPost>
      </div>

      <div class="w-full py-12 flex flex-wrap justify-between">
        <div class="ml-8 text-xl font-semibold">All Posts:</div>
        <div
          @click="LogIn()"
          class="
            mr-8
            py-2
            px-4
            text-xl
            cursor-pointer
            box-border
            bg-red-500
            hover:bg-white
            border-2
            rounded-full
            border-solid border-black
          "
        >
          Log in
        </div>
      </div>

      <div class="flex flex-wrap justify-between h-fit w-full">
        <div
          @click="goTopost(post.id)"
          class="w-fit m-8"
          v-for="post in posts"
          :key="post.id"
        >
          <PostListItem :item="post"></PostListItem>
        </div>
      </div>
    </div>
  </center>
</template>

<style>
.WhiteCity {
  background-size: 100%;
  background-image: url(../static/images/white-cherry.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  backdrop-filter: invert(100%);
}
</style>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content }) {
    let posts = await $content('posts').sortBy('id', 'desc').without(['body']).fetch()
    let TopPost = await $content('posts').sortBy('id', 'desc').limit(1).without(['body']).fetch()
    return {
      posts,
      TopPost
    }
  },
  methods: {
    goTopost (id) {
      this.$router.push('/posts/' + id)
    },
    LogIn () {
      let LogMail = prompt("Enter Mail", "")
      let LogWord = prompt("Enter Password", "")

      if ((LogMail == "blombergblog@gmail.com") && (LogWord == "Password/01")) {
        alert("Logged in")
      }
      else {
        alert("Failed to log in")
      }
    }
  },
  head () {
    return {
      titleTemplate: "%s - Blog",
      icon: "../static/favicon-package/favicon.ico"
    }
  }
}
</script>
