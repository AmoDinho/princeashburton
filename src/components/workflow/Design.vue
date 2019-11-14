<template>
  <div>
    <div>
      <SubHeading>A bit about how go about making things</SubHeading>
    </div>

    <div>
      <SubHeading>Product Design</SubHeading>
      <BodyText>My design work usually starts with asking the question of who,what and how. This leads to gathering user research, which I then synthesis into user stories/use cases and start working on UI/UX, which usually yields mockups/prototypes.</BodyText>

      <BodyText>Usually all this cannot be done without some logical project management and agile approaches.</BodyText>
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