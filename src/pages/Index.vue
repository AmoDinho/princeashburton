<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="container">
      <div class="flex justify-center">
        <Card />
      </div>
    </div>

    <div class="container mt-32">
      <div class="flex justify-center mt-10">
        <a class="mr-3" href="https://github.com/AmoDinho">
          <g-image src="~/assets/github-1.svg" />
        </a>
        <a class="mr-3" href="https://medium.com/@PrinceAshburton">
          <g-image src="~/assets/monogram-medium.svg" />
        </a>
        <a class="mr-3" href="https://twitter.com/PrinceAshburton">
          <g-image src="~/assets/Vector.svg" />
        </a>
        <a class="mr-3" href="https://www.kaggle.com/princeashburton">
          <g-image src="~/assets/kaggle-icon.svg" />
        </a>
      </div>
    </div>

    <div class="container mt-16 text-center">
      <Heading
        text="I enjoy being on the bleeding edge, 
   while being able to craft experiences."
      />
    </div>
    <div>
      <Index />
    </div>
    <div>
      <ProjectsIndex />
    </div>
  </Layout>
</template>

<script>
import Card from "~/components/Card";
import Heading from "~/components/Heading";
import Index from "~/components/workflow/Index.vue";
import ProjectsIndex from "~/components/projects/ProjectsIndex.vue";
export default {
  components: {
    Card,
    Heading,
    Index,
    ProjectsIndex
  },
  metaInfo: {
    title: "Prince Ashburton"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
