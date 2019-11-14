<template>
  <div>
    <SubHeading>Fullstack Engineering</SubHeading>
    <BodyText>
      I enjoy architecting fullstack
      applications on the cloud. I can
      make either consumer apps
      (web) or developer tools which I
      use JavaScript. My Machine
      Learning is usually done in
      Python.
    </BodyText>
    <BodyText>My Skillset</BodyText>
    <ul>
      <li>React</li>
      <li>Vue</li>
      <li>Netlify</li>
      <li>AWS</li>
      <li>SciKitLearn</li>
      <li>FastAI</li>
      <li>CI/CD</li>
      <li>GraphQL</li>
      <li>SQL/No-SQL</li>
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