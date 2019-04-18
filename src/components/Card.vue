<template>
    <div class="max-w-sm  rounded-lg card overflow-hidden shadow-1 ">
      <h1 class="font-display text-center">Amo Moloko</h1>
      <h3 class="font-display text-lg text-center text-grey">Product Designer/Full-Stack Engineer </h3>
      <h3 class="font-display text-lg text-center ">
         CTO @ 
         <a href="www.pimpmybook.co.za"
          class="no-underline hover:underline text-pink">
          Pimp My Book
          </a>
          </h3>
      <div class="flex justify-center  card__canopy">

          <g-image 
          class="rounded-full h-48 w-48 absolute "
           src="~/assets/me_2019.png" />
      </div>
    </div>
</template>

<script>
export default {
    name: 'Card'
}
</script>

<style >
.card {
   
   width: 400px;
    height: 200px;
    background-color: #ffffff;
}

.card__canopy {
  z-index: 4;
  
 }



</style>



