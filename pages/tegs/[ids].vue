<script setup>
useSeoMeta({ title: "Bolalar olami | tags" });
defineOgImageComponent("NuxtSeo", {
    // icon: true/,
    siteName: "Bolalar olami",
    siteLogo: "/images/logo.svg",
    theme: "#F7931E",
    colorMode: "light",
});

const route = useRoute();
const tageStore = useTageStore();

const datas = computed(() => tageStore.getTagsData);

onMounted(() => {
    tageStore.setTagsData(route.params.ids);
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body">
            <section>
                <div class="container">
                    <div class="tegs">
                        <p class="tegs-text text-capitalize darkMode-title">
                            {{ $t("keyword") + " : " + datas?.posts.data[0].section[`title_${$i18n.locale}`] }}
                        </p>
                        <div class="tegs-cardimg">
                            <div class="tegs-cardimg__left">
                                <CardsMiddleCard v-for="item in datas?.posts.data" :key="item.id" :item="item" />
                            </div>
                            <aside class="tegs-cardimg__aside">
                                <NuxtImg src="/images/talimImages/reklama-img1.png" class="img-fluid tegs-cardimg__aside-img1 w-100" alt="reklama-img" />
                                <NuxtImg src="/images/talimImages/reklama-img2.png" class="img-fluid tegs-cardimg__aside-img2 w-100" alt="reklama-img" />
                                <!-- <NuxtImg  src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3"  alt="reklama-img"> -->
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>

<style scoped type="sass">
main {
    background: #f6f6f6;
    padding-bottom: 50px;
}
</style>
