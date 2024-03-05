<script setup lang="ts">

const showButton = ref(false);

const scrollFunction = () => {
    if (window.scrollY > 40) {
        showButton.value = true;
    } else {
        showButton.value = false;
    }
};

const scrollTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

onMounted(() => {
    window.addEventListener('scroll', scrollFunction);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', scrollFunction);
});
</script>

<template>
    <NuxtLink @click="scrollTop">
        <button v-if="showButton" class="scrollerTop__btn darkMode-btn shadow">
            ↑
        </button>
    </NuxtLink>
</template>