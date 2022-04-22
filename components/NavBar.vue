<template>
  <nav class="w-full p-6 bg-gray-800 shadow-2xl">
    <div class="flex items-center justify-between">
      <!-- Header logo -->
      <Blomberg />

      <!-- Mobile toggle -->
      <div class="md:hidden">
        <button @click="drawer">
          <svg
            class="h-8 w-8 fill-current text-black"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

      <!-- Navbar -->
      <div class="hidden md:block justify-evenly items-center">
        <ul class="flex space-x-8 text-lg font-sans">
          <li>
            <nuxt-link to="/" class="py-1 px-2 text-white hover:text-red-600"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about-me"
              class="py-1 px-2 text-white hover:text-red-600"
              >About Me</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/blog"
              class="py-1 px-2 text-white hover:text-red-600"
              >Blog</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="py-1 px-2 text-white hover:text-red-600"
              >Contact</nuxt-link
            >
          </li>
        </ul>
      </div>

      <div class="hidden md:block justify-evenly items-center mr-5">
        <ul class="flex space-x-8 text-lg font-sans">
          <li class="text-white mt-1">Share:</li>
          <li>
            <Share />
          </li>
        </ul>
      </div>

      <!-- Dark Background Transition -->
      <transition
        enter-class="opacity-0"
        enter-active-class="ease-out transition-medium"
        enter-to-class="opacity-100"
        leave-class="opacity-100"
        leave-active-class="ease-out transition-medium"
        leave-to-class="opacity-0"
      >
        <div
          @keydown.esc="isOpen = false"
          v-show="isOpen"
          class="z-30 fixed inset-0 transition-opacity"
        >
          <div
            @click="isOpen = false"
            class="absolute inset-0 bg-black opacity-100"
            tabindex="0"
          ></div>
        </div>
      </transition>

      <!-- Drawer Menu -->
      <aside
        class="
          p-5
          transform
          fixed
          top-0
          left-0
          w-screen
          h-full
          px-16
          bg-grey-800
          justify-center
          overflow-auto
          ease-in-out
          transition-all
          duration-300
          z-30
        "
        :class="isOpen ? 'translate-x-0' : '-translate-x-full'"
      >
        <div class="close">
          <button
            class="absolute top-0 right-0 mt-4 mr-4"
            @click="isOpen = false"
          >
            <svg
              class="w-6 h-6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <span
          @click="isOpen = false"
          class="flex w-full items-center justify-center p-6"
        >
          <Blomberg />
        </span>

        <ul class="divide-y text-lg font-sans">
          <li>
            <nuxt-link
              to="/"
              class="my-4 inline-block py-1 px-2 text-white hover:text-red-600"
              >Home</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/about-me"
              class="my-4 inline-block py-1 px-2 text-white hover:text-red-600"
              >About Me</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/blog"
              class="my-4 inline-block py-1 px-2 text-white hover:text-red-600"
              >Blog</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="my-4 inline-block py-1 px-2 text-white hover:text-red-600"
              >Contact</nuxt-link
            >
          </li>

          <li>
            <p class="italic font-sans text-lg text-white">Follow Me:</p>
            <br />
            <Share />
          </li>
        </ul>
      </aside>
    </div>
  </nav>
</template>

<style>
.selectGray {
  background-color: rgb(31, 41, 55);
}
.selectBlack {
  background-color: rgb(0, 0, 0);
}
</style>

<script>
export default {
  props: ['posts'],
  data () {
    return {
      isOpen: false,
      selection: "Menu",
      Menu: {
        label: "Menu",
        meal: ""
      },
    }
  },
  methods: {
    drawer () {
      this.isOpen = !this.isOpen
    }
  },
  watch: {
    isOpen: {
      immediate: true,
      handler (isOpen) {
        if (process.client) {
          if (isOpen) document.body.style.setProperty("overflow", "hidden")
          else document.body.style.removeProperty("overflow")
        }
      }
    },

    mounted () {
      document.addEventListener("keydown", e => {
        if (e.keyCode == 27 && this.isOpen) this.isOpen = false
      })
    }
  }
}
</script>