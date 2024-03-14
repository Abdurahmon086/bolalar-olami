<script setup>
import { useMainStore } from "~/stores/mainStore";
const mainStore = useMainStore();
</script>

<template>
    <LayoutsMainNavbar />
    <div class="">
        <template v-if="mainStore.auth == true">
            <AuthModal />
        </template>
        <slot />
    </div>

    <LayoutsFooter />
    <ScrollerTop class="scrollerTop" />
</template>
