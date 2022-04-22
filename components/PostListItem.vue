<template>
  <div
    class="
      box-border
      bg-white
      shadow-2xl
      border
      rounded-md
      border-solid border-black
    "
  >
    <img
      :src="item.image"
      alt="post image"
      class="h-96 w-72 object-cover border-b-2 border-solid border-black"
    />
    <h3 class="m-6 py-2 border-b border-solid border-black text-xl text-bold">
      {{ item.title }}
    </h3>
    <p class="pb-4">{{ item.description }}</p>
  </div>
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