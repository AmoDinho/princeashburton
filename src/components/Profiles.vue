<template>
    <a :href="url"> 
     <g-image :src="path" />
     </a>
</template>

<script>
export default {
    props: {
        url: String,
        path: String
    }
}
</script>
