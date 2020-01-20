<template>
  <div class="max-w-sm rounded-lg card overflow-hidden shadow-1">
    <h1 class="font-display text-center">Amo Moloko</h1>
    <h3 class="font-display text-lg text-center text-grey">Product Designer/Full-Stack Engineer</h3>
    <h3 class="mt-2 mb-2 text-blue text-center">Front-End Engineer @ <a class="no-underline text-blue" href="https://tripplo.co">Tripplo</a></h3>
    <div class="flex justify-center card__canopy">
      <g-image class="rounded-full h-32 w-32 absolute" src="~/assets/me_2020.png" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Card"
};
</script>

<style >
.card {
  width: 400px;
  height: 200px;
  background-color: #ffffff;
}

.card__canopy {
  z-index: 8;
  top: 152px;
}
</style>



