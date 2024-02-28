<script setup>
useHead({ title: "Bolalar olami | posts" });
const mainStore = useMainStore()
</script>
<template>
    <div class="imgModal">
        <div class=" imgModal-top w-100 img-container">
            <img @click="mainStore.imgModal = false" src="/images/imgmodalImages/close.svg" class="img-fluid imgModal-top__img3"
                alt="close icon">
            <div class="imgModal-top__img">
                <img src="/images/imgmodalImages/logo1.png" class="img-fluid imgModal-top__img1" alt="modal-img">
                <img src="/images/imgmodalImages/img.png" class="img-fluid imgModal-top__img2" alt="modal-img">
            </div>

        </div>
    </div>
</template>