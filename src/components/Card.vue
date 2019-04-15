<template>
    <div class="max-w-sm rounded-lg card overflow-hidden shadow-lg ">
      <h1 class="font-display text-center">Amo Moloko</h1>
      <h3 class="font-body text-center whitespace-pre-wrap  text-grey">Product Designer/Full-Satck Engineer @ Pimp My Book</h3>
      <div class="flex justify-center absolute card__canopy">

          <g-image class="rounded-full pin-x pin-b relative h-48 w-48 " src="~/assets/me2018.jpg" />
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
}

.card__canopy {
    bottom:280px;
    left: 580px;
    z-index: 1;
}
</style>



