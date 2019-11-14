<template>
  <div class="w-2/5 h-48 bg-yellow-lightest rounded-lg shadow-1 flex flex-col p-2">
    <SubHeading>{{projectName}}</SubHeading>
    <BodyText>{{description}}</BodyText>

    <BodyText class="mt-3">Technogies: {{tech}}</BodyText>

    <div class="mt-10">
      <a :href="url1">
        <g-image src="~/assets/public.svg" class="mr-5" />
      </a>
      <a :href="gitRepo">
        <g-image width="24" height="24" src="~/assets/github-1.svg" />
      </a>
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