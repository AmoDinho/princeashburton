<template>
    <a :href="url"> 
     <g-image context="~/images" :src="src" />
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
