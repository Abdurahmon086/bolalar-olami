<script setup>
import Loader from "~/components/loader.vue";

const loader = ref(false);
const store = useMainStore();
const indexStore = useIndexStore();
const a = async () => {
    loader.value = true;
    await store.getNabarData();
    await indexStore.getIndexData();
    loader.value = false;
};
a();
</script>

<template>
    <template v-if="loader == true"> <Loader /> </template>
    <template v-else-if="loader == false">
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
