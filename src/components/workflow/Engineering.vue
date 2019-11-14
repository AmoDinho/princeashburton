<template>
  <div>
    <SubHeading class="mt-5">Fullstack Engineering</SubHeading>
    <BodyText>
      I enjoy architecting fullstack
      applications on the cloud. I can
      make either consumer apps
      (web) or developer tools which I
      use JavaScript. My Machine
      Learning is usually done in
      Python.
    </BodyText>
    <BodyText class="mt-5 font-bold">My Skillset:</BodyText>
    <ul>
      <li class="flex">
        <BodyText>React</BodyText>
      </li>
      <li class="flex">
        <BodyText>Vue</BodyText>
      </li>
      <li class="flex">
        <BodyText>Netlify</BodyText>
      </li>
      <li class="flex">
        <BodyText>AWS</BodyText>
      </li>
      <li class="flex">
        <BodyText>SciKitLearn</BodyText>
      </li>
      <li class="flex">
        <BodyText>FastAI</BodyText>
      </li>
      <li class="flex">
        <BodyText>CI/CD</BodyText>
      </li>
      <li class="flex">
        <BodyText>GraphQL</BodyText>
      </li>
      <li class="flex">
        <BodyText>SQL/No-SQL</BodyText>
      </li>
    </ul>
  </div>
</template>

<script>
import SubHeading from "../SubHeading";
import BodyText from "../BodyText";
export default {
  name: "Engineering",
  components: {
    SubHeading,
    BodyText
  }
};
</script>