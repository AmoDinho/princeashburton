<template>
  <div>
    <SubHeading class="mt-5">Fullstack Engineering</SubHeading>
    <BodyText>
      I am an analytical JavaScript engineer based in Cape Town, South Africa
      who has a strong bias towards action. I primarily develop Fullstack Event
      Driven applications primarily on AWS.
    </BodyText>

    <BodyText class="mt-3">
      I’m a big believer in creating customer driven experiences, that have led
      me to work in Retail and Logistics. These industries come with their fair
      share of unique customer challenges which have resulted in learning when
      to use particular technologies that best fit the needs of the problem at
      hand.
    </BodyText>

    <BodyText class="mt-3">
      When I’m not making technology, you can find me out on the ocean sailing,
      hiking on a mountain or out and about trying to soak up nature with
      friends & family.
    </BodyText>
    <BodyText class="mt-5 font-bold">My Skillset:</BodyText>
    <ul>
      <li class="flex">
        <g-image src="~/assets/minidisc_1f4bd.svg" class="mr-3" />
        <BodyText>React</BodyText>
      </li>
      <li class="flex">
        <g-image src="~/assets/minidisc_1f4bd.svg" class="mr-3" />
        <BodyText
          >AWS (Lambda,Open Search,DynamoDB,Event
          Bridge,SQS,SNS,Route53,CloudFront,Cognito,IAM,s3)
        </BodyText>
      </li>
      <li class="flex">
        <g-image src="~/assets/minidisc_1f4bd.svg" class="mr-3" />
        <BodyText>Github Actions/Gitlab Pipelines [CI/CD]</BodyText>
      </li>
      <li class="flex">
        <g-image src="~/assets/minidisc_1f4bd.svg" class="mr-3" />
        <BodyText>GraphQL/REST</BodyText>
      </li>
      <li class="flex">
        <g-image src="~/assets/minidisc_1f4bd.svg" class="mr-3" />
        <BodyText>SQL/No-SQL</BodyText>
      </li>
    </ul>
  </div>
</template>

<script>
import SubHeading from '../SubHeading';
import BodyText from '../BodyText';
export default {
  name: 'Engineering',
  components: {
    SubHeading,
    BodyText,
  },
};
</script>
