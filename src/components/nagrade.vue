<template>
    <h1 class="pt-72 pl-24 pb-16 font-bold text-[1.5rem] import_font text-size max-[580px]:pt-[150px] max-[520px]:pl-4">NAGRADE</h1>
    <div class="w-full flex justify-center">
    <div class="w-[70%] flex flex-col justify-center items-center max-[1040px]:w-full max-[1040px]:px-2">
      <p class="">ŠTO SMO POSTIGLI</p>
      <p class="text-[44px] text-center mx-4 pb-12">PONOSNI SMO NA NAŠE NAGRADE</p>
      <AccordionList :open-multiple-items="openMultipleItems" class="w-[90%] flex flex-col justify-center items-center max-[680px]:w-full">
  <AccordionItem class="flex justify-between items-center w-full max-[1040px]:pl-2 border-y">
    <template #summary class="flex justify-center items-center">
        <p class="max-[650px]:text-center text-[24px] font-bold">Architecture Award</p>
        <p class="max-[800px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="text-[20px]">2014</p>
    </template>
    <h3 class="py-12 pl-4">OPIS</h3>
  </AccordionItem>

  <AccordionItem class="flex justify-between items-center w-full max-[1040px]:pl-2 border-b">
    <template #summary class="flex justify-center items-center">
        <p class="max-[650px]:text-center text-[24px] font-bold">Architecture Award</p>
        <p class="max-[800px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="text-[20px]">2014</p>
    </template>
    <h3 class="py-12 pl-4">OPIS</h3>
  </AccordionItem>
  <AccordionItem class="flex justify-between items-center w-full max-[1040px]:pl-2 border-b">
    <template #summary class="flex justify-center items-center">
        <p class="max-[650px]:text-center text-[24px] font-bold">Architecture Award</p>
        <p class="max-[800px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="text-[20px]">2014</p>
    </template>
    <h3 class="py-12 pl-4">OPIS</h3>
  </AccordionItem>
  <AccordionItem class="flex justify-between items-center w-full max-[1040px]:pl-2 border-b">
    <template #summary class="flex justify-center items-center">
        <p class="max-[650px]:text-center text-[24px] font-bold">Architecture Award</p>
        <p class="max-[800px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="text-[20px]">2014</p>
    </template>
    <h3 class="py-12 pl-4">OPIS</h3>
  </AccordionItem>
  <AccordionItem class="flex justify-between items-center w-full max-[1040px]:pl-2 border-b">
    <template #summary class="flex justify-center items-center">
        <p class="max-[650px]:text-center text-[24px] font-bold">Architecture Award</p>
        <p class="max-[800px]:hidden">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <p class="text-[20px]">2014</p>
    </template>
    <h3 class="py-12 pl-4">OPIS</h3>
  </AccordionItem>
</AccordionList>
    </div>
  </div>
    
</template>
<script setup>
import { AccordionList, AccordionItem } from "vue3-rich-accordion";

const openMultipleItems = true
</script>

<style>
.accordion-item__summary-title{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-top: 28px;
    padding-bottom: 28px;
}
.accordion-item__summary{
    display: block;
}
@media only screen and (max-width: 690px) {
    
}

</style>