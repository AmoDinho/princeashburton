<template>
  <div>
    <div>
      <SubHeading class="mt-5">A bit about how go about making things</SubHeading>
    </div>

    <div>
      <SubHeading class="mt-5">Product Design</SubHeading>
      <BodyText>My design work usually starts with asking the question of who,what and how. This leads to gathering user research, which I then synthesis into user stories/use cases and start working on UI/UX, which usually yields mockups/prototypes.</BodyText>

      <BodyText
        class="mt-3"
      >Usually all this cannot be done without some logical project management and agile approaches.</BodyText>

      <BodyText class="mt-5">Tools and techniques I use:</BodyText>
      <ul>
        <li>Figma</li>
        <li>Airtable</li>
        <li>Draw.io</li>
        <li>Structual analysis which normally yields: Activity, state or Sequence diagrams</li>
      </ul>
    </div>
  </div>
</template>
<script>
import SubHeading from "../SubHeading";
import BodyText from "../BodyText";
export default {
  name: "Design",
  components: {
    SubHeading,
    BodyText
  }
};
</script>