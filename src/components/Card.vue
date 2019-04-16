<template>
    <div class="max-w-sm fixed rounded-lg card overflow-hidden shadow-lg ">
      <h1 class="font-display text-center">Amo Moloko</h1>
      <h3 class="font-body text-center whitespace-pre-wrap  text-grey">Product Designer/Full-Satck Engineer @ Pimp My Book</h3>
      <div class="flex justify-center  card__canopy">

          <g-image 
          class="rounded-full   h-48 w-48 "
           src="~/assets/me2018.jpg" />
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
    height: 200px;
    background-color: #ffffff;
}

.card__canopy {
    bottom: 150px;
    left: 590px;
    z-index: 4;
}



</style>



