<script>
import appMessagesList from '@/components/appMessagesList.vue'

export default {
   name: 'App',
   components: {
      appMessagesList
   }
}
</script>

<template>
   <div id="app">
      <div class="container">
         <appMessagesList />
      </div>
   </div>
</template>

<style lang="scss">
@import "normalize.css";

* {
   box-sizing: border-box;
}

html {
   font-size: 16px;
}

@media screen and (max-width: 576px) {
   html {
      font-size: 14px;
   }
}

#app {
   font-family: "Trebuchet MS", Helvetica, Arial, sans-serif;
   text-rendering: optimizeLegibility;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   height: 100%;
   font-size: 0.875rem;
   color: #8a8d91;
}

ul {
   margin: 0;
   padding: 0;
   list-style: none;
}

img {
   display: block;
   max-width: 100%;
}

button {
   border: none;
   background: transparent;
   padding: 0;
   cursor: pointer;
}

h1,
h2,
h3,
h4,
h5,
h6 {
   margin: 0;
   font-weight: normal;
}

p {
   padding: 0;
   margin: 0;
}

.container {
   max-width: 1000px;
   width: 95%;
   margin: 0 auto;
}
</style>