<script setup>
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
</template>