<template>
  <div class="bg-red-500">
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
        text-5xl text-white
        font-bold
      "
    >
      <p>
        Explore your
        <span class="text-red-500">surroundings</span> <br />
        <a href="#1" class="hover:text-red-500">Wonderful places</a> are <br />
        waiting to be
        <a href="#2" class="hover:text-red-500">discover</a>ed
      </p>
      <div class="text-2xl text-white font-normal">
        <a class="hover:text-red-500" href="#3">Live</a>
        <span> your</span>
        <a class="hover:text-red-500" href="#3"> life!</a>
      </div>
    </div>

    <section class="Diagonal">
      <div id="1" class="Traverse">
        <h2 class="text-2xl pb-4">Remain on your set course</h2>
        <p class="text-lg">
          Getting lost in the wild can be frustrating and potantially dangerous
          so keep on the trail in order to prevent this.
        </p>
      </div>
    </section>

    <div class="tarallax h-screen z-1 overflow-hidden"></div>

    <section class="Diagonal">
      <div id="2" class="Traverse">
        <h2 class="text-2xl pb-4">Water a valuable resource for survival!</h2>
        <p class="text-lg">
          Finding water should be your first priority. Water is key to survival
          you will survive much longer starving, sleep deprevated or scratched
          than dehydrated. But rememberthat you are not the only creature whch
          is drawn to the water.
        </p>
      </div>
    </section>

    <div class="farallax h-screen z-1 overflow-hidden"></div>

    <section class="Diagonal">
      <div id="3" class="Traverse">
        <h2 class="text-2xl pb-4">
          The law of nature it is to kill or be killed
        </h2>
        <p class="text-lg">
          Never forget that a lifethreatning situation may occur whenever you
          are not propperly prepared. Always plan ahead to avoid unnessesary
          suffering.
        </p>
      </div>
    </section>

    <div class="qarallax h-screen z-1 overflow-hidden"></div>
  </div>
</template>

<style>
[id] {
  scroll-margin-top: 10vh;
}
section {
  color: white;
  background-color: rgb(31, 41, 55);
  height: 24vh;
}
.Diagonal {
  position: relative;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  transform: skewY(-6deg);
}
.Traverse {
  padding: 1.5rem;
  max-width: 50em;
  margin: 0 auto;
  position: relative;
}
.dark {
  background-color: rgb(31, 41, 55);
}
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
.tarallax {
  background-image: url(../static/images/forest-stream.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}
.farallax {
  background-image: url(../static/images/waterfall.webp);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
}
.qarallax {
  background-image: url(../static/images/life-death.jpg);
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
