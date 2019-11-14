<template>
  <div class="mb-10">
    <SubHeading>Here are some projects I've made:</SubHeading>
    <div v-for="project in projects">
      <ProjectCard
        :projectName="project.projectName"
        :url1="project.url1"
        :gitRepo="project.gitRepo"
        :description="project.description"
      />
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
