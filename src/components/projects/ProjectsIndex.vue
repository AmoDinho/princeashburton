<template>
  <div class="mb-10">
    <SubHeading>Here are some projects I've made:</SubHeading>
    <div class="grid">
      <div v-for="project in projects">
        <ProjectCard
          class="mt-5"
          :projectName="project.projectName"
          :url1="project.url1"
          :gitRepo="project.gitRepo"
          :description="project.description"
          :tech="project.tech"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SubHeading from "../SubHeading";
import BodyText from "../BodyText";
import ProjectCard from "../ProjectCard";
import projects from "../../data/projects.json";
export default {
  name: "ProjectsIndex",
  components: {
    SubHeading,
    BodyText,
    ProjectCard
  },
  data() {
    return {
      projects
    };
  }
};
</script>
<style>
.grid {
  display: grid;
  grid-gap: 0px;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}
</style>