<script setup>
import Loader from "~/components/loader.vue";

const loader = ref(false);
const store = useMainStore();
const indexStore = useIndexStore();
const singleStore = useSingleStore();
const a = async () => {
    loader.value = true;
    await store.getNabarData();
    await indexStore.getIndexData();
    loader.value = singleStore.loading;
    loader.value = false;
};
a();
</script>
<template>
    <template v-if="loader == true"> <Loader /> </template>
    <template v-else-if="loader == false">
        <LayoutsMainNavbar />
        <div class="">
            <slot />
        </div>
        <LayoutsFooter
    /></template>
</template>

<style></style>
