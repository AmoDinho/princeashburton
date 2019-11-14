<template>
  <div class="w-2/5 h-48 bg-yellow-lightest rounded-lg shadow-1">
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