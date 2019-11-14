<template>
  <div>
    <SubHeading>Here are some projects I've made:</SubHeading>
    <ProjectCard
      projectName="Test"
      url1="https://gogoa.co.za"
      gitRepo="https://gogoa.co.za"
      description="hi hi hihi hih"
      tech="[VueJS,CI/CD]"
    />
  </div>
</template>

<script>
import SubHeading from "../SubHeading";
import BodyText from "../BodyText";
import ProjectCard from "../ProjectCard";
export default {
  name: "ProjectsIndex",
  components: {
    SubHeading,
    BodyText,
    ProjectCard
  }
};
</script>