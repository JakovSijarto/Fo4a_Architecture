<template>
  
    <div>
    <navbar_main/>
    <router-view>
    </router-view>
    <footer_main/>
    <ScrollToTopButton/>
  </div>
  <VuePreloader
  background-color="#091a28"
  color="#ffffff"
  transition-type="fade-up"
  :loading-speed="25"
  :transition-speed="1400"
  @loading-is-over="showAnimation = false"
  @transition-is-over="transitionIsOver"
>
  <template v-slot="{ percent, color }">
    <transition name="loading-animation" mode="in-out">
      <span
        v-if="showAnimation"
        :style="{ color }"
      >
        {{ percent }}
      </span>
    </transition>
  </template>
</VuePreloader>
</template>
  
<script setup>
import navbar_main from "./components/navbar-footer/navbar.vue";
import footer_main from "./components/navbar-footer/footer.vue";
import ScrollToTopButton from './components/scrollToTop.vue';
import { VuePreloader } from 'vue-preloader';
import '../node_modules/vue-preloader/dist/style.css';
import { ref } from 'vue';

const showAnimation = ref(true);
const transitionIsOver = ref(false); // Add this line to define transitionIsOver

</script>