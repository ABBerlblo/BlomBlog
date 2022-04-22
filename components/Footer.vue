<template>
  <div
    class="
      absotute
      inset-x-0
      bottom-0
      h-fit
      p-8
      bg-gray-800
      flex
      items-center
      shadow-2xl
    "
  >
    <p class="text-white">
      &copy;
      {{ year }}
      By Blomberg,
      <a
        href="https://www.youtube.com/watch?v=cj3QsBu42eE"
        target="_blank"
        rel="noopener noreferrer"
        ><span class="text-red-500">All</span></a
      >
      rights reserved
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
