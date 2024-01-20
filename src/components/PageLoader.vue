<template>
  <transition name="loader-fade" @before-enter="beforeEnter" @leave="leave">
    <div v-if="showLoader" class="page-loader flex gap-[5em] flex-col">
      <img src="/logo-footer.png" alt="" class="w-[80px]">
      <div class="wrapper">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
        <div class="shadow"></div>
      </div>
    </div>
  </transition>
</template>
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const showLoader = ref(true);
  
  onMounted(() => {
    // Simulate a delay of 1.5 seconds
    setTimeout(() => {
      showLoader.value = false;
    }, 3500);
  });
  </script>
  
  <style scoped>
  /* Add your loader styling here */
  .page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    color:black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999999;
  }
  .wrapper {
  width: 200px;
  height: 60px;
  position: relative;
  z-index: 1;
}

.circle {
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #000;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}
.loader-fade-enter-active, .loader-fade-leave-active {
  transition: opacity 0.5s;
}
.loader-fade-enter, .loader-fade-leave-to {
  opacity: 0;
}
  </style>