<template>
  <div ref="Effect" class="parallax flex flex-wrap justify-around">
    <!-- fromulär -->
    <div class="bg-white rounded-3xl p-5 m-4 w-1/3 h-3/4 my-24">
      <p class="text-5xl font-semibold text-red-500 p-4 flex justify-center">
        Contact Me
      </p>

      <form
        name="contactUs"
        ref="contactUs"
        action="#"
        @submit="Send()"
        onsubmit="return false;"
        class="contactUs text-black font-light my-8"
      >
        <label for="fname"
          >First Name
          <span class="text-red-500 font-semibold">*</span>
        </label>
        <input
          type="text"
          id="fname"
          name="fname"
          ref="fname"
          placeholder="Your name..."
          class="
            w-full
            p-4
            mt-2
            mb-4
            box-border
            bg-gray-100
            border
            rounded-md
            border-solid border-gray-800
            hover:border-2 hover:border-black
          "
          required
        />

        <label for="lname"
          >Last Name
          <span class="text-red-500 font-semibold">*</span>
        </label>
        <input
          type="text"
          id="lname"
          name="lname"
          ref="lname"
          placeholder="Your last name..."
          class="
            w-full
            p-4
            mt-2
            mb-4
            box-border
            bg-gray-100
            border
            rounded-md
            border-solid border-gray-800
            hover:border-2 hover:border-black
          "
          required
        />
        <label for="email"
          >Email
          <span class="text-red-500 font-semibold">*</span>
        </label>
        <input
          type="text"
          id="email"
          name="email"
          ref="email"
          placeholder="Enter your email..."
          class="
            w-full
            p-4
            mt-2
            mb-4
            box-border
            bg-gray-100
            border
            rounded-md
            border-solid border-gray-800
            hover:border-2 hover:border-black
          "
          required
          @focusout="ValidateEmail()"
        />
        <label for="subject"
          >Subject
          <span class="text-red-500 font-semibold">*</span>
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          ref="subject"
          placeholder="The subject..."
          class="
            w-full
            p-4
            mt-2
            mb-4
            box-border
            bg-gray-100
            border
            rounded-md
            border-solid border-gray-800
            hover:border-2 hover:border-black
          "
          required
        />

        <label for="message"
          >Message
          <span class="text-red-500 font-semibold">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          ref="message"
          placeholder="Write something..."
          class="
            h-36
            w-full
            p-4
            mt-2
            mb-4
            box-border
            bg-gray-100
            border
            rounded-md
            border-solid border-gray-800
            hover:border-2 hover:border-black
            resize-y
          "
          required
        ></textarea>
        <div class="flex justify-center items-center">
          <input
            class="
              px-4
              py-2
              rounded-full
              border-2 border-black
              font-medium
              text-black
              bg-red-500
              hover:bg-white
              cursor-pointer
            "
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>

    <!-- kontakt upg. -->
    <div class="bg-transparent p-5 m-4 w-1/3 h-3/4 my-24">
      <p
        class="
          text-5xl
          font-semibold
          text-red-500
          p-4
          flex
          justify-center
          text-center
        "
      >
        Also Available Through
      </p>
      <div
        class="
          mt-8
          px-4
          py-2
          text-white
          font-medium
          text-lg
          flex
          justify-center
        "
      >
        email@email.com <br />
        070-XXX XX XX <br />
      </div>
      <p class="font-semibold text-red-500 text-2xl p-4 flex justify-center">
        Follow Me:
      </p>
      <div class="flex justify-center">
        <Follow />
      </div>
      <div
        class="
          mt-6
          px-4
          py-2
          text-white
          font-medium
          text-lg
          flex
          justify-center
        "
      >
        I look forward to hearing from you.
      </div>
    </div>
  </div>
</template>

<style>
.parallax {
  background-image: url(..\static\images\mist-sunrise-mountain-forest.jpg);
  height: 120vh;
  width: 100%;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  object-fit: cover;
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

  data () {
    return {

      Valid: false
    }
  },
  methods: {

    handleScroll (event) {
      const bg = this.$refs.Effect
      bg.style.backgroundSize = 100 + window.pageYOffset / 50 + '%'

    },

    ValidateEmail () {
      var mailformat = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/
      let email = this.$refs.email.value

      if (email.match(mailformat)) {
        console.log("Valid Email")
        this.Valid = true
      }

      else {
        alert("You have entered an invalid email address!")
        this.Valid = false
      }
    },

    Send () {
      let fname = this.$refs.fname.value
      let lname = this.$refs.lname.value
      let email = this.$refs.email.value
      let subject = this.$refs.subject.value
      let message = this.$refs.message.value

      if (this.Valid) {
        alert(
          "Hello " + this.$refs.fname.value + " " + this.$refs.lname.value + ". Thanks for submitting to this form. We will contact you shortly by " + this.$refs.email.value + "."
        )

        let formData = {
          fname,
          lname,
          email,
          subject,
          message,
        }
        console.log(formData)

        const contactForm = document.querySelector('.contactUs')

        let xhr = new XMLHttpRequest()

        xhr.open('POST', '/')
        xhr.setRequestHeader('content-type', 'application/json')
        xhr.onload = function () {
          console.log(xhr.responseText)

          if (xhr.responseText == 'success') {
            alert("Email Sent")
            fname.value = ""
            lname.value = ""
            email.value = ""
            subject.value = ""
            message.value = ""
          }
          else {
            alert("Something went wrong")
          }
        }
        xhr.send(JSON.stringify(formData))
      }

      else {
        alert("Please enter an valid email!")
      }
    }
  },
  head () {
    return {
      titleTemplate: "%s - Contact",
      icon: "../static/favicon-package/favicon.ico"
    }
  }
}
</script>