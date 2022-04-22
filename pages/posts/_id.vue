<template>
  <div class="Black-cherry w-full h-fit px-20 flex flex-col">
    <center>
      <div class="w-3/5 py-12 flex flex-wrap justify-between">
        <div class="pt-4">
          <nuxt-link
            to="/blog"
            class="text-xl font-semibold text-white hover:text-red-600"
            >All Posts</nuxt-link
          >
        </div>
        <div
          @click="LogIn()"
          class="
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

      <div
        class="
          w-3/5
          py-12
          px-24
          mb-8
          box-border
          bg-white
          border
          rounded-2xl
          border-solid border-gray-500
          flex flex-col
          shadow-2xl
        "
      >
        <h1 class="text-5xl my-8">{{ post.title }}</h1>
        <p class="mb-8 font-bold text-lg">{{ post.description }}</p>
        <img :src="post.image" class="my-4 pb-4 rounded-t-3xl" />
        <nuxt-content :document="post" class="text-lg text-left"></nuxt-content>
        <Share class="my-8 mb-4 py-4 border-t border-b border-grey-500" />
      </div>

      <div class="w-3/5 mb-12">
        <div
          class="w-full pt-4 pb-12 text-white flex flex-wrap justify-between"
        >
          <div class="text-xl text-medium">Recent Posts:</div>
          <div>
            <nuxt-link to="/blog" class="text-xl text-medium hover:text-red-600"
              >All Posts --></nuxt-link
            >
          </div>
        </div>

        <div class="w-full flex justify-between">
          <RecentPostItem
            v-for="item in recentPosts"
            :key="item.id"
            :item="item"
          ></RecentPostItem>
        </div>
      </div>

      <div
        class="
          w-3/5
          py-12
          px-30
          mb-8
          box-border
          bg-white
          border
          rounded-2xl
          border-solid border-grey-500
          shadow-2xl
        "
      >
        <div class="pl-24 text-xl text-medium text-left">Comment:</div>

        <div class="w-full flex flex-wrap justify-center">
          <div>
            <img src="../../static/images/user.svg" alt="" class="h-12 w-12" />
          </div>
          <form action="" class="text-black font-light">
            <input
              type="text"
              id="comment"
              name="comment"
              placeholder="Write a comment..."
              class="
                w-96
                h-12
                ml-4
                p-4
                box-border
                bg-white
                border
                rounded-md
                border-solid border-gray-800
                hover:border-2 hover:border-black
              "
            />
          </form>
        </div>
      </div>
    </center>
  </div>
</template>

<style>
.Black-cherry {
  background-size: 100%;
  background-image: url(../../static/images/black-cherry.png);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  async asyncData ({ $content, params }) {
    let post = await $content('posts/post' + params.id).fetch()
    let recentPosts = await $content('posts').sortBy('id', 'desc').limit(3).without(['body']).fetch()
    return {
      post,
      recentPosts
    }
  },
  methods: {
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
  }
}

</script>

