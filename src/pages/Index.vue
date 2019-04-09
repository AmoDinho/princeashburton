<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    
   <Card />
   
    <p class="font-body">
      This is my portfolio page! It is still a WIP...
    </p>

   

  </Layout>
</template>

<script>

import Card from '~/components/Card';

export default {
  components: {
    Card
  },
  metaInfo: {
    title: 'Prince Ashburton'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
