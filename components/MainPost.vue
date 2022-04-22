<template>
  <nuxt-link :to="`/posts/${item.id}`">
    <legend class="text-2xl font-semibold">Latest Post:</legend>
    <div
      class="
        m-8
        shadow-2xl
        box-border
        bg-white
        border
        rounded-md
        border-solid border-black
      "
    >
      <img
        :src="item.image"
        alt="post image"
        class="h-fit w-full object-cover border-b-2 border-solid border-black"
      />
      <h3
        class="
          mx-28
          px-8
          py-8
          border-b border-solid border-black
          text-3xl text-bold
        "
      >
        {{ item.title }}
      </h3>
      <p class="py-6 text-xl text-semibold">{{ item.description }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {

    }
  }
}
</script>
