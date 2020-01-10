<template>
  <div>
    <div>
      <SubHeading class="mt-5">A bit about how I go about making things</SubHeading>
    </div>

    <div>
      <SubHeading class="mt-5">Product Design</SubHeading>
      <BodyText>My design work starts with asking the question of who,what and how. This leads to gathering user research, which I then synthesis into user stories/use cases and start working on UI/UX, which yields mockups/prototypes. I am also a big believer in design systems for projects that call for them.</BodyText>

      <BodyText
        class="mt-3"
      > All this cannot be done without some logical project management and agile approaches.</BodyText>

      <BodyText class="mt-5 font-bold">Tools and techniques I use:</BodyText>
      <ul>
        <li class="flex">
          <g-image src="~/assets/floppy-disk_1f4be.svg" class="mr-3" />
          <BodyText>Figma</BodyText>
        </li>
        <li class="flex">
          <g-image src="~/assets/floppy-disk_1f4be.svg" class="mr-3" />
          <BodyText>Airtable</BodyText>
        </li>
        <li class="flex">
          <g-image src="~/assets/floppy-disk_1f4be.svg" class="mr-3" />
          <BodyText>Draw.io</BodyText>
        </li>
        <li class="flex">
          <g-image src="~/assets/floppy-disk_1f4be.svg" class="mr-3 ss:mb-10" />
          <BodyText>Structual analysis which yields: Activity, State or Sequence diagrams</BodyText>
        </li>
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
