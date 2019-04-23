<template>
    <a :href="url"> 
     <g-image :src=src />
     </a>
</template>

<script>
export default {
    props: {
        url: String,
        src: String
    }
}
</script>
