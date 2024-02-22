<script setup>
import Loader from "~/components/loader.vue";
const store = useMainStore();
store.getNabarData();
</script>
<template>
    <template v-if="store.loader == true"> <Loader /> </template>
    <template v-else-if="store.loader == false">
        <div class="">
            <LayoutsMainNavbar />
            <div class="">
                <slot />
            </div>
            <LayoutsFooter />
        </div>
    </template>
</template>

<style></style>
