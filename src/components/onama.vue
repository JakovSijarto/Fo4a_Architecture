<template>
    <h1 class="pt-72 pl-24 pb-16 font-bold text-[1.5rem] import_font text-size max-[580px]:pt-[150px] max-[520px]:pl-4 uppercase">{{ $t("onama.onama") }}</h1>
    <div class="w-full flex justify-center items-center flex-col">
        <img src="/aboutus-photo.webp" alt="" class="min-[1610px]:hidden w-full max-[350px]:h-[400px] object-cover">
        <div class="flex justify-between w-[80%] py-52 pb-32 max-[1610px]:flex-col max-[1610px]:pt-8">
            
            <div class="flex relative gap-[-22em] max-[1610px]:hidden">
            <img src="/hero-img1.webp" alt="" class="w-[340px] h-[250px] object-cover relative z-[2] left-[6em] top-[-2em]">
            <img src="/hero-img1.webp" alt="" class="w-[290px] h-[320px] object-cover relative z-[3] top-[2em]">
            <img src="/hero-img1.webp" alt="" class="w-[240px] h-[360px] object-cover relative z-[1] top-[-9em] left-[-4em]">
        </div>
        <div class="">
            <p class="max-[1610px]:pt-16 max-[770px]:!text-[32px] text-[2.8rem]">FO4A ARCHITECTURE</p>
            <p class="w-[440px] py-8 max-[606px]:w-full max-[770px]:!text-[14px]">{{ $t("onama.desc") }}</p>
            <router-link to="/kontakt" class="mt-3 border border-black cursor-pointer w-[150px] h-[50px] flex justify-center items-center hover-effect2">
          <p class="text-[14px] ">{{ $t("onama.desc_button") }}</p>
        </router-link>
        </div>
        </div>
        <ul class="flex w-[70%] justify-between flex-wrap gap-[1em] h-full max-[1051px]:justify-start pb-32">
            <li class="flex gap-[2em] max-[400px]:flex-col">
                <img src="/about-icon1.svg" alt="" class="max-[400px]:w-[100px]">
                <div class="">
                    <p class="font-bold">{{ $t("onama.about_title1") }}</p>
                    <p class="w-[264px] max-[1052px]:w-full">{{ $t("onama.about_desc1") }}</p>
                </div>
            </li>
            <li class="flex gap-[2em] max-[1051px]:py-16 max-[400px]:flex-col">
                <img src="/about-icon2.svg" alt="" class="max-[400px]:w-[100px]">
                <div class="">
                    <p class="font-bold">{{ $t("onama.about_title2") }}</p>
                    <p class="w-[264px] max-[1052px]:w-full">{{ $t("onama.about_desc2") }}</p>
                </div>
            </li>
            <li class="flex gap-[2em] max-[1630px]:mt-8 max-[400px]:flex-col">
                <img src="/about-icon3.svg" alt="" class="max-[400px]:w-[100px]">
                <div class="">
                    <p class="font-bold">{{ $t("onama.about_title3") }}</p>
                    <p class="w-[264px] max-[1052px]:w-full">{{ $t("onama.about_desc3") }}</p>
                </div>
            </li>
        </ul>
        <p style="font-size: calc(0.4vw + 1vh + 1vmin);" class="max-[1000px]:!text-[20px]">{{ $t("onama.onama") }}</p>
        <p style="font-size: calc(1.6vw + 1vh + 1vmin);" class="text-center pb-8 pt-2 font-bold max-[1000px]:!text-[35px]">{{ $t("onama.tim") }}</p>
        <div class="flex flex-wrap justify-center">
  <!-- Card 1 -->
  <div class="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img class="w-full h-auto transition duration-500 transform hover:scale-110 relative" src="/about-man1.webp" alt="Person 1">
    <div class="flex justify-center items-center max-[380px]:block">
      <div class="px-6 py-4 pt-6">
      <div class="font-bold text-xl mb-2">Emily Johnson</div>
      <p class="text-gray-700 text-base">
        Sales Representative
      </p>
    </div>
    <div class="px-6 py-4 flex">
      <a href="#" class="mr-4">
        <img src="/instagram-black.svg" alt="" class="w-[32px]">
      </a>
      <a href="#" class="mr-4">
        <img src="/linkedin-black.svg" alt="" class="w-[32px]">
      </a>
    </div>
    </div>
  </div>

  <!-- Card 2 -->
  <div class="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img class="w-full h-auto transition duration-500 transform hover:scale-110" src="/about-man2.webp" alt="Person 2">
    <div class="flex justify-center items-center max-[380px]:block">
      <div class="px-6 py-4 pt-6">
      <div class="font-bold text-xl mb-2">Emily Johnson</div>
      <p class="text-gray-700 text-base">
        Sales Representative
      </p>
    </div>
    <div class="px-6 py-4 flex">
      <a href="#" class="mr-4">
        <img src="/instagram-black.svg" alt="" class="w-[32px]">
      </a>
      <a href="#" class="mr-4">
        <img src="/linkedin-black.svg" alt="" class="w-[32px]">
      </a>
    </div>
    </div>
  </div>

  <!-- Card 3 -->
  <div class="max-w-xs rounded overflow-hidden shadow-lg m-4">
    <img class="w-full h-auto transition duration-500 transform hover:scale-110" src="/about-man3.webp" alt="Person 3">
    <div class="flex justify-center items-center max-[380px]:block">
      <div class="px-6 py-4 pt-6">
      <div class="font-bold text-xl mb-2">Emily Johnson</div>
      <p class="text-gray-700 text-base">
        Sales Representative
      </p>
    </div>
    <div class="px-6 py-4 flex ">
      <a href="#" class="mr-4">
        <img src="/instagram-black.svg" alt="" class="w-[32px]">
      </a>
      <a href="#" class="mr-4">
        <img src="/linkedin-black.svg" alt="" class="w-[32px]">
      </a>
    </div>
    </div>
    
  </div>
</div>

        <div class="w-full mt-16 bg-black relative ">
      <img src="/contact-home.webp" alt="" class="h-[350px] w-full object-cover opacity-[0.3]" >
      <div class="absolute inset-0 flex items-center justify-center flex-col text-white">
        <p style="font-size: calc(0.2vw + 1vh + 0.5vmin);" class="max-[1000px]:!text-[14px]">{{ $t("onama.kontakt_sec") }}</p>
        <p class="max-[770px]:!text-[32px] text-[2.8rem] pb-8 mx-4 text-center pt-2">{{ $t("onama.kontakt_title") }}</p>
        <router-link to="/kontakt" class="mt-3 border relative z-[999] cursor-pointer w-[150px] h-[50px] flex justify-center items-center hover-effect2">
          <p class="text-[14px] ">{{ $t("onama.desc_button") }}</p>
        </router-link>
      </div>
    </div>
    </div>
</template>
