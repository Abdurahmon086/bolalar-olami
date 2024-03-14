<script setup>
useHead({ title: "Bolalar olami | category" });

import { onMounted } from "vue";
const localPath = useLocalePath();
const route = useRoute();

const categoryStore = useCategoryStore();

const datas = computed(() => categoryStore.getCategoryData);

onMounted(() => {
    categoryStore.setCategoryData(route.query.id);
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body pb-2 bg-light">
            <section class="darkMode-body">
                <div class="container">
                    <h3 class="talim-title darkMode-title text-capitalize">
                        {{ datas?.bannerPosts[0].section[`title_${$i18n.locale}`] }}
                    </h3>
                    <div class="talim-box">
                        <div class="talim-box-wrapper">
                            <div class="talim-box__left position-relative image-container item1">
                                <NuxtLink :to="localPath(`/${datas?.bannerPosts[0].section.slug_uz}/${datas?.bannerPosts[0]?.id}`)">
                                    <NuxtImg
                                        :src="datas?.bannerPosts[0]?.detail_image?.url ? datas?.bannerPosts[0]?.detail_image?.url : '/images/logo.svg'"
                                        class="img-fluid w-100 h-100"
                                        alt="talim-img"
                                    />
                                    <div class="talim-box__left-box position-absolute w-100 h-100">
                                        <h3 class="talim-box__left-title position-absolute hidden-text-3">
                                            {{ datas?.bannerPosts[0][`title_${$i18n.locale}`] }}
                                        </h3>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div class="talim-box-card">
                                <CardsBigCard v-for="item in datas?.bannerPosts.slice(1)" :key="item.id" :item="item" />
                            </div>
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">{{ $t("latest_articles") }}</h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <CardsListCard v-for="item in datas?.resentPosts" :key="item.id" :item="item" />
                            </ul>
                        </div>
                    </div>
                    <NuxtImg src="/images/talimImages/reklama-y-img.png" class="img-fluid pt-3 w-100" alt="" />
                </div>
            </section>
            <section class="lastNews">
                <div class="container">
                    <div class="lastNews__wrapper">
                        <div class="lastNews__left">
                            <CardsBigCard v-for="item in datas?.categoryPosts.slice(0, 4)" :key="item.id" :item="item" />
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">{{ $t("most_read") }}</h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <CardsListCard v-for="item in datas?.mostReadPosts" :key="item.id" :item="item" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="darkMode-body">
                <div class="container">
                    <div class="talim-cardimg">
                        <div class="talim-cardimg__left">
                            <CardsMiddleCard v-for="item in datas?.categoryPosts.slice(4)" :key="item.id" :item="item" />
                        </div>
                        <aside class="talim-cardimg__aside">
                            <NuxtImg src="/images/talimImages/reklama-img1.png" class="img-fluid talim-cardimg__aside-img1" alt="reklama-img" />
                            <NuxtImg src="/images/talimImages/reklama-img2.png" class="img-fluid talim-cardimg__aside-img2" alt="reklama-img" />
                            <NuxtImg src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3" alt="reklama-img" />
                        </aside>
                    </div>
                </div>
            </section>
            <section class="slide-option loopScroler mb-5 bg-white darkMode">
                <LoopScroler />
            </section>
        </main>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>
