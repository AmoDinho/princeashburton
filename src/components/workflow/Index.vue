<template>
  <div class="mb-10">
    <Design />
    <Engineering />
  </div>
</template>
<script>
import Design from "./Design";
import Engineering from "./Engineering";
export default {
  name: "Index",
  components: {
    Design,
    Engineering
  }
};
</script>