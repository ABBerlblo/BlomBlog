<template>
  <nuxt-link :to="`/posts/${item.id}`">
    <div
      class="
        shadow-2xl
        box-border
        bg-white
        border-2
        rounded-3xl
        border-solid border-grey-500
        z-2
      "
    >
      <img
        :src="item.image"
        alt="post image"
        class="
          h-64
          w-80
          object-cover
          rounded-t-3xl
          border-b border-solid border-black
        "
      />
      <h3 class="p-2 text-xl text-bold">
        {{ item.title }}
      </h3>
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
