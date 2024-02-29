<script setup lang="ts">
const scrollTop = () => {
    window.scrollTo(0, 0)
}
</script>

<template>
    <NuxtLink @click="scrollTop">
        |asdasd
    </NuxtLink>
</template>