<template>
  <div id="app">
    <Navbar />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
export default {
  
  components:{
    Navbar,
    Footer,
  }
}
</script>


<style>
#nav a.router-link-exact-active {
  color: var(--bs-primary);
}
.carousel-caption {
    top: 50%;
    bottom: unset!important;
    transform: translateY(-50%);
}
</style>
