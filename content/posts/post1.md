---
id: 1
title: 1
description: Lorem
image: /images/trees/autumn-maple-trees.jpg
---
```
<template onload='this.form1.text1.focus()'>
  <form name="form1" action="#" onsubmit="return false" class="h-20">
    <input
      type="text"
      name="text1"
      class="h-16 text-white bg-black"
      onfocusout="ValidateEmail(this.form1.text1)"
    />
  </form>
</template>


/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email)

<script>
export default {
  methods: {
    ValidateEmail (inputText) {
      var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

      if (inputText.value.match(mailformat)) {
        console.log("Valid email address!")
        this.form1.text1.focus()
        return true
      }

      else {
        console.log("You have entered an invalid email address!")
        this.form1.text1.focus()
        return false
      }
    }
  }
}
</script>
```
