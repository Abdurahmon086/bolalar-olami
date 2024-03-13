<script setup lang="ts">
// import type { NuxtError } from "#app";

// // const props = defineProps({
// //     error: Object as () => NuxtError,
// // });

const handleError = () => clearError({ redirect: "/" });
</script>

<template>
    <div class="error">
        <div class="error__wrapper">
            <h2 class="error__title-404">404</h2>
            <div class="error__inner">
                <h4 class="error__title">Sahifa topilmadi</h4>
                <p class="error__text">Bu sahifa mavjud emas yoki olib tashlangan! Uyga qaytishingizni tavsiya qilamiz.</p>
                <button @click="handleError" class="error__btn"><NuxtImg src="/images/404-next.svg" alt="404 next icon" />Uyga qaytish</button>
            </div>
        </div>
    </div>
</template>
<style></style>
