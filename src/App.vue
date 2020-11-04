<template>
  <div id="app">
    <Name />
    <Intro />
    <Portfolio />
    <Contact />
  </div>
</template>

<script>
import Name from './components/Name.vue'
import Intro from './components/Intro.vue'
import Portfolio from './components/Portfolio.vue'
import Contact from './components/Contact.vue'

export default {
  name: 'App',
  components: {
    Name,
    Intro,
    Portfolio,
    Contact
  }
}
</script>

<style>
  html, body {
      max-width: 100%;
      overflow-x: hidden;
      overflow: visible;
  }
</style>