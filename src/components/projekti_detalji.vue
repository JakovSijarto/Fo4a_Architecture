<template>
  <div class="pt-72 w-full max-[580px]:pt-40">
    <h2 class="pl-24 pb-16 max-[340px]:pl-0 max-[340px]:text-center font-bold text-[18px]">{{ $t("projekti.projekti_detalji") }}</h2>
    <div class="w-full flex justify-center">
      <div class="w-[90%] flex justify-between items-center gap-[3em] max-[1090px]:flex-col">
        <img
  :src="imagePath"
  alt="Project Image"
  @click="openSwiper"
  class=" w-[640px] object-cover max-[1090px]:w-full max-[1090px]:h-[100%] cursor-pointer"
/>
        <div class="w-full flex justify-start flex-col">
          <p class="font-bold text-[18px]">{{ project.name }}</p>
          <p class="py-16 max-[400px]:py-8 font-light style-font_poiret">{{ project.description }}</p>
          <router-link to="/projekti" class="border w-[160px] h-[50px] flex justify-center items-center text-[18px] font-bold">{{ $t("projekti.desc_gumb") }}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>

  export default {
    props: ['id'],
    data() {
      return {
        projects: [
        { id: 1, name: 'Project 1', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 2, name: 'Project 2', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 3, name: 'Project 3', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 4, name: 'Project 4', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 5, name: 'Project 5', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
        { id: 6, name: 'Project 6', image: 'projects1.webp', description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec nam aliquam sem et tortor consequat id porta nibh. Adipiscing diam donec adipiscing tristique risus nec. Non sodales neque sodales ut etiam sit amet nisl purus. In egestas erat imperdiet sed. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Purus in mollis nunc sed id semper risus in. " },
      ],
        project: {},
      };
    },
    created() {
      this.project = this.projects.find((p) => p.id === parseInt(this.id));
    },
    computed: {
      imagePath() {
        // Assuming the images are in the same directory as your component
        return `/Fo4a_Architecture/${this.project.image}`
      },
    },
  };
  </script>
  
  <style>
@import url('https://fonts.googleapis.com/css2?family=Poiret+One&display=swap');
.style-font_poiret{
  font-family: 'Poiret One', sans-serif;
}
</style>