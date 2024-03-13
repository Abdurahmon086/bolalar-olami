<script setup>
useSeoMeta({ title: "Bolalar olami | posts" });
const mainStore = useMainStore();
</script>

<template>
    <div class="imgModal">
        <div class="imgModal__inner" @click="mainStore.imgModal = false"></div>
        <div class="imgModal__top">
            <NuxtImg @click="mainStore.imgModal = false" src="/images/imgmodalImages/close.svg" class="img-fluid imgModal__top-img3" alt="close icon" />
            <div class="imgModal__top-img">
                <NuxtImg src="/images/imgmodalImages/logo1.png" class="img-fluid imgModal__top-img1" alt="modal-img" />
                <NuxtImg src="/images/imgmodalImages/img.png" class="img-fluid imgModal__top-img2" alt="modal-img" />
            </div>
        </div>
    </div>
</template>
