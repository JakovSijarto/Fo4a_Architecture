<template>
  <div class="h-[100vh] relative z-[999] bg-white max-[580px]:h-[40vh]">
      <swiper :pagination="pagination" :loop="true" :modules="modules" :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
     :effect="isMobile ? 'fade' : 'slide'" class="mySwiper max-[580px]:hidden"
     >
     <swiper-slide><img src='/hero-img1.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img2.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img3.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img4.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img4.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img4.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
    <swiper-slide><img src='/hero-img4.webp' alt="" class="opacity-[0.8] max-[580px]:w-full max-[580px]:h-[40vh]"></swiper-slide>
  </swiper>
  </div>
  <div class="relative z-[1000] bg-white flex flex-col items-center ">
    <div class="w-[90%] py-12">
      <svg height="30" width="100%" class="">
        <line x2="100%" style="stroke:rgb(0, 0, 0);stroke-width:25" />
      </svg>
    </div>
    <div class="w-[90%] flex items-center justify-between  max-[500px]:flex-col max-[500px]:gap-[3em]">
      <p class="text-[19px] tracking-[0.2em] uppercase font-bold">Projekti</p>
      <p class="tracking-[0.15em]"><router-link to="/projekti">pogledajte ostale projekte ▸ ▹</router-link></p>
    </div>
    <div class="w-[90%] flex gap-[5em] pt-[50px] justify-between items-start max-[740px]:flex-col">
      <div class="w-full bg-white cursor-pointer">
        <router-link to="/project/2">
        <img src="/projects1.webp"  alt="" class="h-[600px] w-[100%] object-cover hover-effect max-[1000px]:h-[500px] max-[450px]:h-[300px]">
        <div class="">
          <p class="py-6 text-[22px]">Projekt 1</p>
          <p class="text-[14px]">pogledaj više ⟶</p>
        </div>
      </router-link>
      </div>
      <div class="w-full bg-white cursor-pointer">
        <router-link to="/project/2">
        <img src="/projects2.webp" alt=""  class="h-[600px] w-[100%] object-cover hover-effect max-[1000px]:h-[500px] max-[450px]:h-[300px]">
        <div class="">
          <p class="py-6 text-[22px]">Projekt 2</p>
          <p class="text-[14px]">pogledaj više ⟶</p>
        </div>
      </router-link>
      </div>
    </div>
    <div class="w-[90%] py-24 max-[680px]:py-12">
      <svg height="3" width="100%" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
    <div class="w-[90%] flex gap-[2em] max-[1532px]:flex-col">
      <img src="/aboutus-photo.webp" alt=""  class="h-[450px] object-cover max-[680px]:w-[100%] max-[1532px]:h-[600px] max-[400px]:h-[400px]">
      <div class="mx-8 max-[1532px]:hidden">
        <div class="w-[90%] h-[450px] flex">
      <svg height="100%" width="4" class="">
        <line y1="100%" style="stroke:rgb(0, 0, 0);stroke-width:2" />
      </svg>
    </div>
      </div>
      <div class="w-full">
        <p class="pb-[10px] tracking-[0.2em]">ARMIN MEŠIĆ | FO4A STUDIO</p>
        <p class="border-b w-full border-black pb-[30px] text-[12px] font-bold tracking-[0.2em]">o nama</p>
        <div class="w-full border-b border-black pb-[30px]">
          <ul class="pt-[30px]">
            <li>▸ Lorem ipsum dolor sit amet consectetur.</li>
            <li class="py-4">▸ Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, vel facere adipisci nulla natus repellat atque nobis molestiae totam!</li>
            <li>▸ Lorem ipsum dolor sit amet.</li>
            <li class="py-4">▸ Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam atque doloremque ab!</li>
            <li>▸ Lorem, ipsum dolor.</li>
          </ul>
        </div>
        <router-link to="/onama" class="mt-10 border border-black cursor-pointer w-[150px] h-[50px] flex justify-center items-center hover-effect">
          VIŠE O NAMA
        </router-link>
        

      </div>
    </div>
    <div class="w-full mt-16 bg-black relative ">
      <img src="/contact-home.webp" alt="" class="h-[770px] w-full object-cover opacity-[0.3]" >
      <form class="absolute inset-0 flex items-center justify-center flex-col text-white" ref="form" @submit="sendEmail">
        <p class="text-[30px] pb-2 mx-4 text-center">POŠALJITE SVOJ UPIT</p>
        <input type="text" required v-model="ime" name="ime" class="border-b text-[17px] leading-[0.2em] py-[15px] bg-[transparent] w-[800px] max-[900px]:w-[90%] pr-4 " placeholder="Ime*">
        <input type="email" required v-model="email" name="email" class="bg-[transparent] border-b text-[17px] leading-[0.2em] py-[15px] w-[800px] max-[900px]:w-[90%] pr-4" placeholder="Mail*">
        <input type="phone" required v-model="telefon" name="telefon" class="bg-[transparent] border-b text-[17px] leading-[0.2em] py-[15px] w-[800px] max-[900px]:w-[90%] pr-4" placeholder="Telefon*">
        <textarea v-model="poruka" name="poruka" placeholder="Vaše pitanje" class="bg-[transparent] border-b text-[17px] leading-[0.2em] py-[15px] pt-[30px] w-[800px]  pr-4 max-h-[150px] min-h-[150px] max-[900px]:w-[90%]"></textarea>
        <button type="submit" class="rounded-[27px] border leading-[1px] py-6 px-16 mt-12 hover-effect-button">Pošalji</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/pagination';
  import 'swiper/css/effect-fade';
  import { Pagination, EffectFade, Autoplay } from 'swiper/modules';

  import emailjs from 'emailjs-com';


  export default {
    data(){
return{
 ime:"",
 email:"",
 telefon:"",
 poruka:"",
}
},
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        pagination: {
          clickable: true,
        },
        modules: [Pagination, EffectFade, Autoplay],
      };
    },
    methods: {
sendEmail() {
 emailjs.sendForm('service_26j234o', 'template_6uybn4o', this.$refs.form, 'tGrrFjuKCc7u6wh3f')
   .then((result) => {
        console.log('SUCCESS!', result.text);
   }, (error) => {
       console.log('FAILED...', error.text);
   });
   
},
},
  };
</script>

<style>
.hover-effect:hover{
  background: #000;
  color:#fff;
}

.hover-effect-button:hover{
  background: white;
  color:black;
  border:1px solid black;
  transition: all 0.3s ease-in;
}
.hover-effect-button{
  transition: all 0.15s ease-out;
}

input,textarea {
  outline: none;
}
.hover-effect:hover{
  opacity: 0.5;
  transition: all 0.3s ease-in;
}
.hover-effect{
  transition: all 0.3s ease-in;
}
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
  }

  .swiper-slide img {

    width: 100%;
    height: 100%;
    object-fit: cover;
  }


</style>