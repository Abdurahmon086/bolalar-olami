<script setup>
useSeoMeta({
    title: "Bolalar olami",
});

defineOgImageComponent("NuxtSeo", {
    // icon: true/,
    siteName: "Bolalar olami",
    siteLogo: "/images/logo.svg",
    theme: "#F7931E",
    colorMode: "light",
});

import Loader from "~/components/loader.vue";
import { useIndexStore } from "~/stores/indexStore";

const localPath = useLocalePath();
const indexStore = useIndexStore();

const datas = computed(() => indexStore.getHomeData);

onMounted(() => {
    indexStore.setHomeData();
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body pb-5">
            <section class="hero">
                <div class="container">
                    <Swiper
                        :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                        :pagination="{ clickable: true }"
                        :slides-per-view="1"
                        :loop="true"
                        :effect="'creative'"
                        :autoplay="{
                            delay: 30000,
                            disableOnInteraction: true,
                        }"
                        :creative-effect="{
                            prev: {
                                shadow: false,
                                translate: ['-20%', 0, -1],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }"
                        class="carousel"
                    >
                        <SwiperSlide v-for="(item, index) in datas?.mainBanners" class="carousel-inner">
                            <div class="carousel-item image-container w-100">
                                <NuxtImg
                                    :src="item.main_image?.preview ? item.main_image?.url : '/images/logo.svg'"
                                    class="img-fluid h-100 w-100"
                                    style="object-fit: cover"
                                    alt="hero image"
                                />
                                <div class="s" :class="item.header_type == 1 ? 'hero__bgLiner' : ''">
                                    <div class="carousel-caption">
                                        <div class="hero__pages d-flex align-items-center">
                                            <NuxtImg src="/images/Vector-left.svg" alt="verctor left icon" />
                                            <span class="hero__infoTy">{{ index + 1 }}</span>
                                            <NuxtImg src="/images/Vector-right.svg" alt="verctor right icon" />
                                            <span class="opacity-75 hero__infoTy-oth">{{ datas.mainBanners.length }}</span>
                                        </div>
                                        <div
                                            class="carousel-card d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between"
                                        >
                                            <h3 class="text-start hero__car-text heddin-text-2">
                                                {{ item.post[`title_${$i18n.locale}`] }}
                                            </h3>
                                            <NuxtLink
                                                :to="localPath(`/${item.post.section.slug_uz}/${item.post.id}`)"
                                                class="btn text-white hero__link-btn d-flex align-items-center darkMode2"
                                            >
                                                {{ $t("hero_btn") }}
                                                <NuxtImg src="/images/Vector-oreng.svg" alt="vrctor orange icon" />
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <section class="news">
                <div class="container">
                    <h4 class="media__title news__tt darkMode-title">
                        {{ $t("main_title") }}
                    </h4>
                    <div class="news__wrapper">
                        <NuxtLink
                            :to="localPath(`/${datas?.mainPosts[0].section.slug_uz}/${datas.mainPosts[0].id}`)"
                            class="news__left card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <NuxtImg
                                :src="datas.mainPosts[0].detail_image.url ? datas.mainPosts[0].detail_image.url : '/images/logo.svg'"
                                class="card-img img-fluid h-100 rounded-0"
                                :alt="datas.mainPosts[0][`title_${$i18n.locale}`]"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    {{ datas.mainPosts[0][`title_${$i18n.locale}`] }}
                                </h5>
                            </div>
                        </NuxtLink>
                        <div class="news__right">
                            <NuxtLink
                                v-for="item in datas?.mainPosts.slice(1)"
                                :to="localPath(`/${datas.mainPosts[0].section.slug_uz}/${item.id}`)"
                                :key="item.id"
                                class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                            >
                                <NuxtImg
                                    :src="item.detail_image?.url ? item.detail_image?.url : '/images/logo.svg'"
                                    class="card-img img-fluid h-100 rounded-0"
                                    :alt="item[`title_${$i18n.locale}`]"
                                />
                                <div class="card-img-overlay rounded-0">
                                    <h5 class="news__card-title">
                                        {{ item[`title_${$i18n.locale}`] }}
                                    </h5>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </section>
            <section class="lastNews">
                <div class="container">
                    <h4 class="news__title darkMode-title">
                        {{ $t("education") }}
                    </h4>
                    <div class="lastNews__wrapper">
                        <div class="lastNews__left-wrap">
                            <div class="lastNews__left">
                                <CardsBigCard v-for="item in datas?.educationPosts" :key="item.id" :item="item" />
                            </div>
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">{{ $t("last_news") }}:</h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <CardsListCard v-for="item in datas?.recentNewsPosts" :key="item.id" :item="item" />
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="social">
                <div class="container">
                    <h4 class="social__name-title darkMode-title">
                        {{ $t("quote_the_day") }}
                    </h4>
                    <Swiper
                        class="carousel"
                        :modules="[SwiperAutoplay, SwiperEffectCreative]"
                        :slides-per-view="1"
                        :loop="true"
                        :effect="'creative'"
                        :autoplay="{
                            delay: 3000,
                            disableOnInteraction: true,
                        }"
                        :creative-effect="{
                            prev: {
                                shadow: false,
                                translate: ['-20%', 0, -1],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }"
                    >
                        <SwiperSlide v-for="item in datas?.quotations" :key="item.id" class="social__qs-wrapper">
                            <NuxtLink class="carousel-item">
                                <NuxtImg
                                    :src="item.detail_image.original_url ? item.detail_image.original_url : '/images/logo.svg'"
                                    :alt="item[`title_${$i18n.locale}`]"
                                    class="social__img"
                                />
                                <div class="social__qs">
                                    <p class="social__qs-text">
                                        {{ item[`title_${$i18n.locale}`] }}
                                    </p>
                                    <h4 class="social__qs-title">
                                        {{ item.author_name }}
                                    </h4>
                                </div>
                            </NuxtLink>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
            <!-- Media -->
            <section class="media">
                <div class="container">
                    <h4 class="media__title darkMode-title">
                        {{ $t("media") }}
                    </h4>
                    <div class="media__wrapper">
                        <iframe
                            :src="datas?.bannerVideos[0].youtube_link"
                            :title="datas?.bannerVideos[0][`title_${$i18n.locale}`]"
                            frameborder="0"
                            allowfullscreen
                            class="media__cards w-100"
                        ></iframe>
                        <NuxtLink class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0">
                            <NuxtImg src="/images/media-img2.png" class="card-img img-fluid h-100 rounded-0" alt="media-img3" />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="media__card-title">Mirziyoyeva oilasi bolalar kutubxonasiga bordi.</h5>
                            </div>
                        </NuxtLink>
                        <NuxtLink class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0">
                            <NuxtImg src="/images/media-img3.png" class="card-img img-fluid h-100 rounded-0" alt="media-img3" />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="media__card-title">Mirziyoyeva oilasi bolalar kutubxonasiga bordi.</h5>
                            </div>
                        </NuxtLink>
                        <iframe
                            :src="datas?.bannerVideos[1].youtube_link"
                            :title="datas?.bannerVideos[1][`title_${$i18n.locale}`]"
                            frameborder="0"
                            allowfullscreen
                            class="media__cards w-100"
                        ></iframe>
                    </div>
                </div>
            </section>
            <!-- Achchiqtosh -->
            <section class="achchiqtosh mt-3 mt-sm-5">
                <div class="container">
                    <h4 class="achchiqtosh__title darkMode-title">
                        {{ $t("achiqtosh") }}
                    </h4>
                    <div class="achchiqtosh__wrapper">
                        <div class="achchiqtosh__left d-flex flex-column">
                            <div class="">
                                <Swiper
                                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                                    :slides-per-view="1"
                                    :loop="true"
                                    :effect="'creative'"
                                    :autoplay="{
                                        delay: 3000,
                                        disableOnInteraction: true,
                                    }"
                                    :creative-effect="{
                                        prev: {
                                            shadow: true,
                                            translate: ['-20%', 0, -1],
                                        },
                                        next: {
                                            translate: ['100%', 0, 0],
                                        },
                                    }"
                                    class="achchiqtosh__carousel"
                                >
                                    <SwiperSlide v-for="item in datas?.achchiqtoshPosts" :key="item" class="achchiqtosh__carousel-inner">
                                        <NuxtLink
                                            class="achchiqtosh__carousel-item bg-dark image-container"
                                            :to="localPath(`/${item.section.slug_uz}/${item.id}`)"
                                        >
                                            <NuxtImg
                                                :src="item.detail_image?.url ? item.detail_image?.url : '/images/logo.svg'"
                                                :alt="item[`title_${$i18n.locale}`]"
                                                class="achchiqtosh__carousel-img img-fluid h-100"
                                            />
                                            <div class="achchiqtosh__carousel-text">
                                                <h5 class="achchiqtosh__slider-text hidden-text-3">
                                                    {{ item[`title_${$i18n.locale}`] }}
                                                </h5>
                                            </div>
                                        </NuxtLink>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-3">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("healthy") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <CardsMiddleCard v-for="item in datas?.healthPosts" :key="item.id" :item="item" />
                                </div>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-3">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("clinc") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <CardsMiddleCard v-for="item in datas?.legalClinicPosts" :key="item.id" :item="item" />
                                </div>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-3">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("useful") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <CardsMiddleCard v-for="item in datas?.usefulPosts" :key="item.id" :item="item" />
                                </div>
                            </div>
                        </div>
                        <div class="row-gap-3 d-none d-sm-flex flex-column mt-2 sidbar">
                            <NuxtImg class="img-fluid achchiqtosh__card-box7" src="/images/reklama-img.png" alt="reklama-img" />
                            <NuxtImg class="img-fluid achchiqtosh__card-box8" src="/images/reklama-img1.png" alt="reklama-img1" />
                            <NuxtImg class="img-fluid achchiqtosh__card-box9" src="/images/reklama-img1.png" alt="reklama-img1" />
                            <NuxtImg class="img-fluid achchiqtosh__card-box9" src="/images/reklama-img1.png" alt="reklama-img1" />
                        </div>
                    </div>
                </div>
            </section>
            <LoopScroler />
        </main>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>

<style scoped>
main {
    background: #f6f6f6;
}

.hero__bgLiner {
    background: linear-gradient(to bottom, #fff3 40%, #000 90%) !important;
}

.sidbar {
    position: sticky;
    top: 0;
    height: 93.5%;
}
</style>
