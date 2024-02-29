<script setup>
useHead({
    title: "Bolalar olami",
});
import Loader from "~/components/loader.vue";
import { useIndexStore } from '~/stores/indexStore';

const localPath = useLocalePath();
const indexStore = useIndexStore();

await indexStore.getIndexData()

const data = indexStore?.datas;
const mainPosts4 = data.mainPosts.slice(1);

</script>

<template>
    <template v-if="!indexStore.loader">
        <main class="darkMode-body pb-5">
            <section class="hero">
                <div class="container">
                    <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination,]"
                        :pagination="{ clickable: true, }" :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
                            delay: 3000, disableOnInteraction: true,
                        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}" class="carousel">
                        <!-- Inner -->
                        <SwiperSlide v-for="(item, index) in data?.mainBanners" class="carousel-inner">
                            <div class="carousel-item image-container w-100">
                                <img :src="item.main_image.preview_url" class="img-fluid h-100 w-100"
                                    style="object-fit: cover" alt="hero image" />
                                <div class="carousel-caption">
                                    <div class="hero__pages d-flex align-items-center">
                                        <img src="/images/Vector-left.svg" alt="verctor left icon" />
                                        <span class="hero__infoTy">{{ index + 1 }}</span>
                                        <img src="/images/Vector-right.svg" alt="verctor right icon" />
                                        <span class="opacity-75 hero__infoTy-oth">{{ data.mainBanners.length }}</span>
                                    </div>
                                    <div
                                        class="carousel-card d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between">
                                        <h3 class="text-start hero__car-text heddin-text-2">
                                            {{ item.post[`title_${$i18n.locale}`] }}
                                        </h3>
                                        <NuxtLink :to="`/${item.post.section?.slug_uz}/${item.id}`"
                                            class="btn text-white hero__link-btn d-flex align-items-center darkMode2">
                                            Подробнее
                                            <img src="/images/Vector-oreng.svg" alt="vrctor orange icon" />
                                        </NuxtLink>
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
                        <NuxtLink :to="localPath(`/${data.mainPosts[0].section.slug_uz}/${data.mainPosts[0].id}`)"
                            class="news__left card bg-dark text-white news__cards image-container w-100 border-0 rounded-0">
                            <img :src="data.mainPosts[0].detail_image.card" class="card-img img-fluid h-100 rounded-0" :alt="data.mainPosts[0][`title_${$i18n.locale}`]
                                " />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    {{
                                        data.mainPosts[0][
                                            `title_${$i18n.locale}`
                                        ]
                                    }}
                                </h5>
                            </div>
                        </NuxtLink>
                        <div class="news__right">
                            <NuxtLink v-for="item in mainPosts4"
                                :to="localPath(`/${data.mainPosts[0].section.slug_uz}/${item.id}`)" :key="item.id"
                                class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0">
                                <img :src="item.detail_image?.card" class="card-img img-fluid h-100 rounded-0"
                                    :alt="item[`title_${$i18n.locale}`]" />
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
                    <div class="lastNews__wrapper">
                        <div class="lastNews__left-wrap">
                            <h4 class="news__title darkMode-title">
                                {{ $t("education") }}
                            </h4>
                            <div class="lastNews__left">
                                <div v-for="item in data.educationPosts" :key="item.id"
                                    class="lastNews__left-inner text-decoration-none card h-100 border-0 shadow-0 rounded-0 darkMode">
                                    <div class="position-relative lastNews__left-img">
                                        <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                            <img :src="item.detail_image?.card" class="card-img-top rounded-0"
                                                :alt="item[`title_${$i18n.locale}`]" />
                                            <span class="position-absolute lastNews__left-spLink darkMode">
                                                {{ item.section[`title_${$i18n.locale}`] }}</span>
                                        </NuxtLink>
                                    </div>
                                    <div class="card-body d-flex flex-column">
                                        <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                            <h5 class="card-title darkMode hidden-text-2">
                                                {{ item[`title_${$i18n.locale}`] }}
                                            </h5>
                                        </NuxtLink>
                                        <p class="card-text darkMode hidden-text-3">
                                            {{
                                                item[
                                                `description_${$i18n.locale}`
                                                ]
                                            }}
                                        </p>
                                        <span class="lastNews__left-sp darkMode-sp">{{ item.publish_date }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">
                                {{ $t("last_news") }}
                            </h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <NuxtLink v-for="item in data.recentNewsPosts"
                                    :to="localPath(`/${data.mainPosts[0].section.slug_uz}/${item.id}`)" :key="item.id"
                                    class="border-bottom text-decoration-none">
                                    <p class="lastNews__right-text darkMode">
                                        {{ item[`title_${$i18n.locale}`] }}
                                    </p>
                                    <div
                                        class="lastNews__right-view d-flex justify-content-between align-items-center darkMode-sp">
                                        <div class="d-flex align-items-center" style="gap: 7px">
                                            <img src="/images/eye.svg" alt="eye icon" />
                                            <span class="lastNews__right-sp darkMode-sp">{{ item.views_count }}</span>
                                        </div>
                                        <span
                                            class="lastNews__right-sp lastNews__right-spDate darkMode-sp">{{ item.publish_date }}</span>
                                    </div>
                                </NuxtLink>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="social">
                <div class="container">
                    <h4 class="social__name-title darkMode-title">
                        {{ $t("social_text") }}
                    </h4>
                    <Swiper class="carousel" :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1"
                        :loop="true" :effect="'creative'" :autoplay="{
                            delay: 3000,
                            disableOnInteraction: true,
                        }" :creative-effect="{
    prev: {
        shadow: false,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}">
                        <SwiperSlide v-for="item in data.quotations" :key="item.id" class="social__qs-wrapper">
                            <NuxtLink class="carousel-item">
                                <img :src="item.detail_image.original_url" :alt="item[`title_${$i18n.locale}`]"
                                    class="social__img" />
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
                        <iframe :src="data?.bannerVideos[0].youtube_link"
                            title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0" allowfullscreen
                            class="media__cards w-100"></iframe>
                        <NuxtLink class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0">
                            <img src="/images/media-img2.png" class="card-img img-fluid h-100 rounded-0" alt="media-img3" />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="media__card-title">
                                    Mirziyoyeva oilasi bolalar kutubxonasiga
                                    bordi.
                                </h5>
                            </div>
                        </NuxtLink>
                        <NuxtLink class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0">
                            <img src="/images/media-img3.png" class="card-img img-fluid h-100 rounded-0" alt="media-img3" />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="media__card-title">
                                    Mirziyoyeva oilasi bolalar kutubxonasiga
                                    bordi.
                                </h5>
                            </div>
                        </NuxtLink>
                        <iframe :src="data?.bannerVideos[1].youtube_link"
                            title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0" allowfullscreen
                            class="media__cards w-100"></iframe>

                    </div>
                </div>
            </section>
            <!-- Achchiqtosh -->
            <section class="achchiqtosh mt-3 mt-sm-5">
                <div class="container">
                    <div class="achchiqtosh__wrapper">
                        <div class="achchiqtosh__left d-flex flex-column">
                            <h4 class="achchiqtosh__title darkMode-title">
                                {{ $t("achiqtosh") }}
                            </h4>
                            <div class="">
                                <Swiper :modules="[
                                    SwiperAutoplay,
                                    SwiperEffectCreative,
                                ]" :slides-per-view="1" :loop="true" :effect="'creative'" :autoplay="{
    delay: 3000,
    disableOnInteraction: true,
}" :creative-effect="{
    prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
    },
    next: {
        translate: ['100%', 0, 0],
    },
}" class="achchiqtosh__carousel">
                                    <SwiperSlide v-for="item in data.achchiqtoshPosts" :key="item"
                                        class="achchiqtosh__carousel-inner">
                                        <NuxtLink class="achchiqtosh__carousel-item bg-dark image-container"
                                            :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                            <img :src="item.detail_image?.card" :alt="item[`title_${$i18n.locale}`]"
                                                class="achchiqtosh__carousel-img img-fluid h-100" />
                                            <div class="achchiqtosh__carousel-text">
                                                <h5 class="achchiqtosh__slider-text hidden-text-3">
                                                    {{ item[`title_${$i18n.locale}`] }}
                                                </h5>
                                            </div>
                                        </NuxtLink>
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("healthy") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <div v-for="item in data.healthPosts" :key="item.id"
                                        class="darkMode achchiqtosh__card-box text-decoration-none">
                                        <div class="position-relative achchiqtosh__img-wrapper">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <img class="img-fluid w-100" :src="item.detail_image?.card"
                                                    :alt="item[`title_${$i18n.locale}`]" />
                                                <span class="darkMode achchiqtosh__card-sp position-absolute">
                                                    {{ item.section[`title_${$i18n.locale}`] }}
                                                </span>
                                            </NuxtLink>
                                        </div>
                                        <div class="achchiqtosh__info darkMode">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <p class="darkMode-title achchiqtosh__info-title hidden-text-2">
                                                    {{ item[`title_${$i18n.locale}`] }}
                                                </p>
                                            </NuxtLink>
                                            <p class="darkMode-title achchiqtosh__info-text hidden-text-3">
                                                {{ item[`description_${$i18n.locale}`] }}
                                            </p>
                                            <p class="darkMode-sp achchiqtosh__info-time">
                                                {{ item.publish_date }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("clinc") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <div v-for="item in data.legalClinicPosts" :key="item.id"
                                        class="darkMode achchiqtosh__card-box text-decoration-none">
                                        <div class="position-relative achchiqtosh__img-wrapper">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <img class="img-fluid w-100" :src="item.detail_image?.card" :alt="item[
                                                    `title_${$i18n.locale}`
                                                ]
                                                    " />
                                                <span class="darkMode achchiqtosh__card-sp position-absolute">
                                                    {{ item.section[`title_${$i18n.locale}`] }}
                                                </span>
                                            </NuxtLink>
                                        </div>
                                        <div class="achchiqtosh__info darkMode">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <p class="darkMode-title achchiqtosh__info-title hidden-text-2">
                                                    {{ item[`title_${$i18n.locale}`] }}
                                                </p>
                                            </NuxtLink>
                                            <p class="darkMode-title achchiqtosh__info-text hidden-text-3">
                                                {{ item[`description_${$i18n.locale}`] }}
                                            </p>
                                            <p class="darkMode-sp achchiqtosh__info-time">
                                                {{ item.publish_date }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                                <h4 class="news__title darkMode-title achchiqtosh__title">
                                    {{ $t("useful") }}
                                </h4>
                                <div class="achchiqtosh__card">
                                    <div v-for="item in data.usefulPosts" :key="item.id"
                                        :to="localPath(`/categories/${item.id}`)"
                                        class="darkMode achchiqtosh__card-box text-decoration-none">
                                        <div class="position-relative achchiqtosh__img-wrapper">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <img class="img-fluid w-100" :src="item.detail_image?.card" :alt="item[
                                                    `title_${$i18n.locale}`
                                                ]
                                                    " />
                                                <span class="darkMode achchiqtosh__card-sp position-absolute">
                                                    {{ item.section[`title_${$i18n.locale}`] }}
                                                </span>
                                            </NuxtLink>
                                        </div>
                                        <div class="achchiqtosh__info darkMode">
                                            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                                <p class="darkMode-title achchiqtosh__info-title hidden-text-2">
                                                    {{ item[`title_${$i18n.locale}`] }}
                                                </p>
                                            </NuxtLink>
                                            <p class="darkMode-title achchiqtosh__info-text hidden-text-3">
                                                {{ item[`description_${$i18n.locale}`] }}
                                            </p>
                                            <p class="darkMode-sp achchiqtosh__info-time ">
                                                {{ item.publish_date }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row-gap-3 d-none d-sm-flex flex-column">
                            <img class="img-fluid achchiqtosh__card-box7" src="/images/reklama-img.png" alt="reklama-img" />
                            <img class="img-fluid achchiqtosh__card-box8" src="/images/reklama-img1.png"
                                alt="reklama-img1" />
                            <img class="img-fluid achchiqtosh__card-box9" src="/images/reklama-img1.png"
                                alt="reklama-img1" />
                            <img class="img-fluid achchiqtosh__card-box9" src="/images/reklama-img1.png"
                                alt="reklama-img1" />
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
</style>
