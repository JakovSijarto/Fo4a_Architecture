<template>
  <div class="relative z-[9999] bg-white flex justify-center items-center w-full flex-col w-full h-auto">
    <div class="w-[90%] py-16">
      <svg width="100%" height="4" class="">
        <line x1="0" y1="0" x2="100%" y2="0" style="stroke:rgb(0, 0, 0);stroke-width:3" />
      </svg>
    </div>
    <div class="w-[90%] flex justify-between items-center pb-12 max-[980px]:flex-col max-[980px]:gap-[5em]">
      <div class="max-[980px]:ml-0">
        <div class="image-container">
          <img src="/logo.png" loading="lazy" alt="" width="150" height="120" class="scaleimg">
        </div>
      </div>
      <ul class="text-center text-[15px] max-[980px]:hidden hidden">
  <li class="pb-12 font-bold text-[18.5px]">{{ $t("footer.pages") }}</li>
  <li><router-link to="/" class="">{{ $t("footer.pages_1") }}</router-link></li>
  <li class="py-4"><router-link to="/projekti">{{ $t("footer.pages_2") }}</router-link></li>
  <li><router-link to="/onama">{{ $t("footer.pages_3") }}</router-link></li>
  <li class="py-4"><router-link to="/nagrade">{{ $t("footer.pages_4") }}</router-link></li>
  <li ><router-link to="/kontakt">{{ $t("footer.pages_5") }}</router-link></li>
</ul>
<ul class="max-[980px]:hidden">
  <li><a href="tel:+38761402330">{{ $t("footer.info") }}: +38761402330</a></li>
  <li><a href="mailto:arminmesic@gmail.com">EMAIL: fo4a@gmail.com</a></li>
  <li><a href="https://www.instagram.com/fo4aarchitecture/">INSTAGRAM ▸ ▹</a></li>
</ul>
<div class="min-[981px]:hidden flex w-full justify-between items-center px-12 max-[400px]:flex-col max-[400px]:gap-[5em]">
<ul class="text-left text-[15px] max-[400px]:text-center hidden">
  <li class="pb-12 font-bold text-[18.5px]">{{ $t("footer.pages") }}</li>
  <li><router-link to="/" class="">{{ $t("footer.pages_1") }}</router-link></li>
  <li class="py-4"><router-link to="/projekti">{{ $t("footer.pages_2") }}</router-link></li>
  <li><router-link to="/onama">{{ $t("footer.pages_3") }}</router-link></li>
  <li class="py-4"><router-link to="/nagrade">{{ $t("footer.pages_4") }}</router-link></li>
  <li ><router-link to="/kontakt">{{ $t("footer.pages_5") }}</router-link></li>
</ul>
<ul class="">
  <li><a href="tel:+38761402330">{{ $t("footer.info") }}: +38761402330</a></li>
  <li><a href="mailto:arminmesic@gmail.com">Email: fo4a@gmail.com</a></li>
  <li><a href="https://www.instagram.com/fo4aarchitecture/">INSTAGRAM ▸ ▹</a></li>
</ul>
</div>
    </div>
    <div class="w-full bg-[#1a1a1a] flex items-center ">
      <div class="flex justify-center items-center w-full text-white py-[5px]  max-[460px]:flex  max-[460px]:flex-col  max-[460px]:justify-center">
        Copyright ©2024 Designed by <a href="https://agencycroatia.com/#/" class="pl-[5px] font-bold">NewAge</a>
      </div>
    </div>
  </div>
</template>
