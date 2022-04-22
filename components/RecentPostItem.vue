<template>
  <nuxt-link :to="`/posts/${item.id}`">
    <div
      class="
        shadow-2xl
        box-border
        bg-white
        border
        rounded-md
        border-solid border-gray-300
        z-2
      "
    >
      <img
        :src="item.image"
        alt="post image"
        class="h-64 w-80 object-cover border-b border-solid border-gray-300"
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
