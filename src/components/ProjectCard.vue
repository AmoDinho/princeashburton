<template>
  <div class="w-4/5 h-64 bg-yellow-lightest rounded-lg shadow-1 flex flex-col p-2">
    <SubHeading>{{projectName}}</SubHeading>
    <BodyText>{{description}}</BodyText>

    <BodyText class="mt-3 flex flex-wrap">
      <b>Technogies:</b>
      <div class="mr-1" v-for="names in tech">{{names}}</div>
    </BodyText>

    <div class="mt-10 flex">
      <a :href="url1">
      <div v-if="url1"
        <g-image src="~/assets/public.svg" class="mr-5" />
         </div>
      </a>
      <a :href="gitRepo">
        <div v-if="gitRepo">
          <g-image width="24" height="24" src="~/assets/github-1.svg" />
        </div>
        <div v-else></div>
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
