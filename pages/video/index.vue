<script setup>
useSeoMeta({
    title: "Bolalar olami | video",
    templateParams: {
        blogCategory: "Video",
    },
});
defineOgImageComponent("NuxtSeo"); 
import Loader from "~/components/loader.vue";
const localPath = useLocalePath();
const store = useMediaStore();
const datas = computed(() => store.getMediaData);

onMounted(() => {
    store.setMediaData();
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body pb-5 bg-white">
            <!-- OUR GALLERY -->
            <section class="container darkMode-body">
                <div class="mediacate">
                    <h2 class="mediacate__text darkMode-title">
                        {{ $t("our_gallery") }}
                    </h2>
                    <div class="mediacate__card">
                        <div class="mediacate__card-box position-relative">
                            <iframe
                                :src="datas.bannerVideos[0].youtube_link"
                                :title="datas.bannerVideos[0][`title_${$i18n.locale}`]"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                class="w-100 mediacate__card-img"
                            >
                            </iframe>
                            <div class="mediacate__card-posi position-absolute w-100"></div>
                        </div>
                        <div class="mediacate__card-box1">
                            <div class="position-relative mediacate__card-box1-cards">
                                <img
                                    src="/images/mediacategoryImages/mediaimg2.png"
                                    class="img-fluid rounded-0 mediacate__card-box1--img h-100"
                                    alt="GALEREYA img"
                                />
                                <NuxtLink to="https://www.youtube.com/@bolalarolamiuz/playlists">
                                    <h2 class="mediacate__card-bottom--title position-absolute">
                                        {{ $t("all_playlists") }}
                                    </h2>
                                </NuxtLink>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            {{ $t("cocial_survey") }}
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">32 {{ $t("videos") }}</p>
                                    </div>
                                    <NuxtLink to="https://www.youtube.com/@bolalarolamiuz/playlists">
                                        <img
                                            src="/images/mediacategoryImages/play-icon.svg"
                                            class="img-fluid"
                                            style="width: 40px; height: 40px"
                                            alt="play-icon"
                                        />
                                    </NuxtLink>
                                </div>
                            </div>
                            <div class="position-relative">
                                <img
                                    src="/images/mediacategoryImages/mediaimg3.png"
                                    class="img-fluid rounded-0 mediacate__card-box1--img h-100"
                                    alt="GALEREYA img"
                                />
                                <NuxtLink :to="localPath(`/foto`)">
                                    <h2 class="mediacate__card-bottom--title position-absolute">
                                        {{ $t("all_photos") }}
                                    </h2>
                                </NuxtLink>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            {{ $t("all_pictures") }}
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">65 {{ $t("pictures") }}</p>
                                    </div>
                                    <div class="mediacate__card-bottom--imgdiv">
                                        <NuxtLink :to="localPath(`/foto`)">
                                            <img
                                                src="/images/mediacategoryImages/gallery-icon.svg"
                                                class="img-fluid mediacate__card-bottom--img"
                                                alt="play-icon"
                                            />
                                        </NuxtLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mediacate__galle">
                        <div class="mediacate__galle-wrapper position-relative" v-for="item in datas?.bannerVideos.slice(1)">
                            <iframe
                                :src="item.youtube_link"
                                width="100%"
                                :title="item[`title_${$i18n.locale}`]"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                class="mediacate__iframe"
                            >
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            <!-- media all -->
            <section class="container">
                <div v-for="items in datas?.videoCategories">
                    <div class="d-flex justify-content-between align-items-center" v-if="items?.videos.length > 0">
                        <h2 class="mediacate__all-text darkMode-title mb-0">
                            {{ items[`title_${$i18n.locale}`] }}
                        </h2>
                        <button id="myButton" v-if="items.videos.length > 4" @click="store.toggleCategory(items)" class="btn btn-danger btn-sm mediaBtn">
                            {{ $t("video_btn") }}
                        </button>
                    </div>
                    <div class="mediacate__all" :class="{ videoHidden: !store.isActive(items) }">
                        <div class="position-relative mediacate__all-card w-100 image-container" v-for="item in items.videos">
                            <iframe
                                :src="item.youtube_link"
                                width="100%"
                                :title="item[`title_${$i18n.locale}`]"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen
                                class="mediacate__iframe-all"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            <section class="slide-option loopScroler mb-0 bg-white darkMode">
                <LoopScroler />
            </section>
        </main>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>

<style scoped>
.videoHidden {
    max-height: 214px;
    overflow: hidden;
}

@media only screen and (min-width: 768px) {
    .videoHidden {
        max-height: 460px;
        overflow: hidden;
    }
}

@media only screen and (min-width: 1200px) {
    .videoHidden {
        max-height: 174px;
        overflow: hidden;
    }
}
</style>
