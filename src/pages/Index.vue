<template>
  <Layout>
    
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="flex justify-center" >
           <Card />
    </div>
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
