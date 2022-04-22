<template>
  <div class="">
    <div class="darallax h-screen z-1 overflow-hidden"></div>

    <div
      class="
        Inversion
        p-12
        rounded-3xl
        shadow-2xl
        absolute
        left-20
        top-60
        text-5xl text-gray-100
        font-bold
      "
    >
      <p>
        Explore your
        <span class="text-red-500">surroundings</span> <br />
        Wonderful places are <br />
        waiting to be discovered
      </p>
      <span class="text-2xl font-normal"
        >Wake up, get up, get out
        <a
          class="
            text-white
            hover:text-red-500
            underline
            decoration:white
            hover:decoration:red-500
          "
          href="https://www.youtube.com/watch?v=0jm8nnHqx80"
          target="_blank"
          rel="noopener noreferrer"
          >there!</a
        >
      </span>
    </div>
  </div>
</template>

<style>
.Inversion {
  backdrop-filter: invert(100%);
  filter: saturate(2);
  opacity: 0.8;
}
.darallax {
  background-image: url(../static/images/forestblog.gif);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}
</style>

<script>
export default {
  head () {
    return {
      titleTemplate: "%s - Home",
      icon: "../static/favicon-package/favicon.ico"
    }
  }
}
</script>
