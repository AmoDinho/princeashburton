<template>
  <div>
    <SubHeading>{{projectName}}</SubHeading>
    <BodyText>{{description}}</BodyText>

    <BodyText>Technogies: {{tech}}</BodyText>

    <div>
      <BodyText>Live url:{{url1}}</BodyText>
      <BodyText>Git repo:{{gitRepo}}</BodyText>
    </div>
  </div>
</template>
<script>
import SubHeading from "./SubHeading";
import BodyText from "./BodyText";
export default {
  name: "ProjectCard",
  components: {
    SubHeading,
    BodyText
  },
  props: {
    projectName: String,
    url1: String,
    gitRepo: String,
    url2: String,
    description: String,
    tech: Array
  }
};
</script>