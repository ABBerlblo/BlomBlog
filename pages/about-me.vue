<template>
  <div>
    <!-- om mig -->
    <div
      ref="MeInfo"
      class="
        grey
        w-full
        mb-8
        flex flex-wrap
        justify-around
        border-b-4 border-solid border-black
        shadow-2xl
      "
    >
      <div
        class="w-1/2 p-4 text-4xl font-bold flex items-center justify-center"
      >
        <div class="text-white">
          <p class="text-red-500">
            Howdy! <br />
            My name is Blomberg and I got a peculiar interest.
          </p>
          To breate in, to breate out, to feel the calm breeze, gently touching
          my hair And realising, life, sometimes is not always pain and
          struggels. There is peace in the woods, and harmony in the soul.
        </div>
      </div>
      <div class="p-4">
        <img
          src="../static\images\god-pics\stylish-gentleman.svg"
          alt="Faceless stylish profile picture"
        />
      </div>
    </div>

    <!-- vad jag gör -->
    <div class="mt-32 flex flex-wrap">
      <div class="w-full p-8 flex flex-wrap justify-evenly items-center">
        <div class="text-lg font-light w-96 h-96">
          <p class="text-2xl text-red-500 font-bold">Navigation</p>
          In order to find leisure in modern society a quick break from your
          everyday life might do you good. My personal recomendation is to seek
          peace in the local forest. Why a forest one might ask, well they are
          quiet and there is plenty of space too. Not only this but they provide
          the most exelence coverige from the nasty elements nature offers:
          Leaves bring shelter from rain and shade from burning suns, heavy
          vegetaition blocks any violent winds or evesdropping eyes. This makes
          the woods one of the few places where you can be free and undisturbed,
          where you may be yourself.
        </div>
        <div><img src="../static\images\compass.svg" alt="" /></div>
      </div>

      <div class="w-full p-8 flex flex-wrap justify-evenly items-center">
        <div><img src="../static\images\gaiters.svg" alt="" /></div>
        <div class="text-lg font-light w-96 h-96">
          <p class="text-2xl text-red-500 font-bold">Clothes</p>
          It is important to always be properly dressed for the occasion. Always
          plan ahead, check the weather before going for a walk. Ask yourself
          what will I require to feel comftable outside. Will it rain do I need
          an umbrella or raincoat? Is it windy do I need insolating clothes? Is
          the air hot or cold do my clothes need to be thicker or thinner?
          Regardless of these conditions a decent pair of shoes will come be
          your best friend.
        </div>
      </div>

      <div class="w-full p-8 flex flex-wrap justify-evenly items-center">
        <div class="text-lg font-light w-96 h-96">
          <p class="text-2xl text-red-500 font-bold">Food and Water</p>
          Do not wander on empty stomach. The worst decitions are always made by
          those who are hungry. Hunger is a mental blockade which cannot be
          tolerated for your own security and wellbeing in the woods. similar to
          hunger thirst is also an unnessesary guest in everyday life, remember
          to keep hydrated.
        </div>
        <div><img src="../static\images\bottlebasket.svg" alt="" /></div>
      </div>
    </div>

    <div class="w-full p-8 flex flex-wrap justify-evenly items-center">
      <div><img src="../static\images\bag.svg" alt="" /></div>
      <div class="text-lg font-light w-96 h-96">
        <p class="text-2xl text-red-500 font-bold">Gear and Tools</p>
        Not always nessesary but it might sometimes be releaving to carry a
        small knife or scissors if you would find yourself in need to open
        something well packaged. Similarly trecking poles are useful if you feel
        like expanding the journey. And lastly prehaps bringing a light and
        collapsable chair can be nice in order to avoid cold or wet soil.
      </div>
    </div>
    <!-- blå yta -->
    <div
      class="
        absotute
        inset-x-0
        bottom-0
        h-1/3
        p-8
        mt-8
        bg-blue-100
        flex flex-col
        items-center
        justify-center
      "
    >
      <p class="text-3xl font-bold text-black p-4">Reach Me</p>

      <nuxt-link
        to="/contact"
        class="
          px-4
          py-2
          rounded-full
          border-2 border-black
          font-medium
          text-xl text-black
          bg-red-500
          hover:bg-white
          cursor-pointer
        "
        >Contact</nuxt-link
      >
    </div>
  </div>
</template>

<style>
.grey {
  background-size: 120vw;
  background-color: rgb(32, 32, 32);
  background-image: url(../static/images/greyer.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}
</style>

<script>
export default {
  created () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },

  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  },

  methods: {
    handleScroll (event) {
      const bg = this.$refs.MeInfo
      bg.style.backgroundSize = 120 - +window.pageYOffset / 12 + '%'
      bg.style.opacity = 1 - +window.pageYOffset / 700 + ''
    }
  },

  head () {
    return {
      titleTemplate: "%s - About Me",
      icon: "../static/favicon-package/favicon.ico"
    }
  }
}
</script>