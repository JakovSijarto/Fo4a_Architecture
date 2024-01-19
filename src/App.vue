<template>
  <div class="vl-parent">
        <loading v-model:active="isLoading"
                 :can-cancel="true"
                 :on-cancel="onCancel"
                 :is-full-page="fullPage"/>

        <label><input type="checkbox" v-model="fullPage">Full page?</label>
        <button @click.prevent="doAjax">fetch Data</button>
    </div>
    <div>
    <navbar_main/>
    <router-view>
    </router-view>
    <footer_main/>
    <ScrollToTopButton/>
  </div>
</template>
  
  <script setup>
  import navbar_main from "./components/navbar-footer/navbar.vue"
  import footer_main from "./components/navbar-footer/footer.vue"
  import ScrollToTopButton from './components/scrollToTop.vue';
  </script>
<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
    data() {
        return {
            isLoading: false,
            fullPage: true
        }
    },
    components: {
        Loading
    },
    methods: {
        doAjax() {
            this.isLoading = true;
            // simulate AJAX
            setTimeout(() => {
                this.isLoading = false
            }, 5000)
        },
        onCancel() {
            console.log('User cancelled the loader.')
        }
    }
}
</script>
<style scoped>
  .vl-parent {
    position: relative;
  }

  .vl-parent .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.8); /* You can adjust the background color and opacity */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000; /* Make sure it's on top of other elements */
  }

  /* Style for the label and button */
  label {
    margin-right: 10px;
  }

  button {
    padding: 10px;
    background-color: #4CAF50; /* Green background color */
    color: white; /* White text color */
    border: none; /* Remove borders */
    border-radius: 4px; /* Rounded corners */
    cursor: pointer; /* Add a pointer cursor on hover */
  }

  button:hover {
    background-color: #45a049; /* Darker green on hover */
  }
</style>