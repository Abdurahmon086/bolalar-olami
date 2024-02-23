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
    loader.value = false;
    loader.value = singleStore.loading;
};
a();
</script>
<template>
    <template v-if="loader == true"> <Loader /> </template>
    <template v-else-if="loader == false">
        <NuxtLayout>
            <NuxtLoadingIndicator />
            <NuxtPage />
        </NuxtLayout>
    </template>
</template>
