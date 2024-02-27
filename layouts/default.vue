<script setup>
const mainStore = useMainStore()
const indexStore = useIndexStore()
await indexStore.getIndexData()
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
