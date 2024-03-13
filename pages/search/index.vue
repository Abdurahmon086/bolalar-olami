<script setup>
useSeoMeta({ title: "Bolalar olami | search" }); 
defineOgImageComponent("NuxtSeo");

import Loader from "~/components/loader.vue";
import { onMounted } from "vue";

const searchStore = useSearchStore();
const route = useRoute();

const datas = computed(() => searchStore.getSearchData);

onMounted(() => {
    searchStore.setSearchData(route.query.q);
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body">
            <section>
                <div class="container">
                    <div class="tegs">
                        <p class="tegs-text darkMode-title">
                            {{ $t("keyword") + " : " + route.query.q }}
                        </p>
                        <div class="tegs-cardimg">
                            <div class="tegs-cardimg__left" v-if="datas">
                                <CardsMiddleCard v-for="item in datas.data" :key="item.id" :item="item" />
                            </div>
                            <aside class="tegs-cardimg__aside">
                                <img src="/images/talimImages/reklama-img1.png" class="img-fluid tegs-cardimg__aside-img1" alt="reklama-img" />
                                <img src="/images/talimImages/reklama-img2.png" class="img-fluid tegs-cardimg__aside-img2" alt="reklama-img" />
                                <img src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3" alt="reklama-img" />
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

<style scoped>
main {
    background: #f6f6f6;
    padding-bottom: 50px;
}
</style>
