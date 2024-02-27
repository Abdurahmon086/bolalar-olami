<script setup>
import { useMainStore } from '~/stores/mainStore';
import { useIndexStore } from '~/stores/indexStore';
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
