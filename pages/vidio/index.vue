<script setup>
useHead({ title: "Bolalar olami | posts" });
import Loader from "~/components/loader.vue";

const store = useMediaStore();
await store.getMediaData();
</script>
<template>
    <template v-if="store.loader == true">
        <Loader />
    </template>
    <template v-else-if="store.loader == false">
        <main class="darkMode-body pb-5 bg-white">
            <!-- OUR GALLERY -->
            <section class="container darkMode-body">
                <div class="mediacate">
                    <h2 class="mediacate__text darkMode-title">
                        BIZNING GALEREYA
                    </h2>
                    <div class="mediacate__card">
                        <div class="mediacate__card-box position-relative">
                            <!-- <img src="/images/mediacategoryImages/mediaimg1.png" class="img-fluid mediacate__card-img"
                                alt="GALEREYA img" /> -->
                            <div class="mediacate__card-posi position-absolute w-100">
                                <iframe :src="store.datas.bannerVideos[0].youtube_link" width="100%"
                                    src="https://www.youtube.com/embed/6ZdkMZq95PI"
                                    title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen class="mediacate__iframe">
                                </iframe>

                                <!-- <div>
                                    <h3 class="mediacate__card-posi--title fw-medium text-white hidden-text-3">
                                        {{
                                            store.datas.bannerVideos[0][
                                                `title_${$i18n.locale}`
                                            ]
                                        }}
                                    </h3>
                                    <h3 class="mediacate__card-posi--title fw-normal">
                                        5 Videos
                                    </h3>
                                </div>
                                <NuxtLink :to="store.datas.bannerVideos[0].youtube_link
                                        " class="d-block">
                                    <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid d-block"
                                        alt="play-icon" />
                                </NuxtLink> -->
                            </div>
                        </div>
                        <div class="mediacate__card-box1">
                            <div class="position-relative">
                                <img src="/images/mediacategoryImages/mediaimg2.png"
                                    class="img-fluid rounded-0 mediacate__card-box1--img" alt="GALEREYA img" />
                                <h2 class="mediacate__card-bottom--title position-absolute">
                                    Barcha pleylistlar
                                </h2>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            Ijtimoiy so'rovnoma
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">
                                            32 Videos
                                        </p>
                                    </div>
                                    <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid"
                                        style="width: 40px; height: 40px" alt="play-icon" />
                                </div>
                            </div>
                            <div class="position-relative">
                                <img src="/images/mediacategoryImages/mediaimg3.png"
                                    class="img-fluid rounded-0 mediacate__card-box1--img" alt="GALEREYA img" />
                                <h2 class="mediacate__card-bottom--title position-absolute">
                                    Barcha fotosuratlar
                                </h2>
                                <div class="mediacate__card-bottom position-absolute w-100">
                                    <div>
                                        <p class="mediacate__card-bottom--text">
                                            Hamma rasmlar
                                        </p>
                                        <p class="mediacate__card-bottom--text1 fw-normal">
                                            65 rasmlar
                                        </p>
                                    </div>
                                    <div class="mediacate__card-bottom--imgdiv">
                                        <img src="/images/mediacategoryImages/gallery-icon.svg"
                                            class="img-fluid mediacate__card-bottom--img" alt="play-icon" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mediacate__galle">
                        <div class="mediacate__galle-wrapper position-relative"
                            v-for="item in store.datas?.bannerVideos.slice(1)">
                            <iframe :src="item.youtube_link" width="100%" src="https://www.youtube.com/embed/6ZdkMZq95PI"
                                title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowfullscreen class="mediacate__iframe">
                                <!-- 
                                <NuxtLink :to="item.youtube_link" class="d-block">
                                    <img src="/images/mediacategoryImages/group-icon.svg"
                                        class="position-absolute mediacate__galle--icon" alt="icon" />
                                </NuxtLink> -->
                            </iframe>
                        </div>
                    </div>
                </div>
            </section>
            <!-- media all -->
            <section class="container">
                <div v-for="items in store.datas?.videoCategories">
                    <div class="d-flex justify-content-between align-items-center" v-if="items?.videos.length > 0">
                        <h2 class="mediacate__all-text darkMode-title mb-0">
                            {{ items[`title_${$i18n.locale}`] }}
                        </h2>
                        <button id="myButton" @click="store.toggleCategory(items)"
                            class="btn btn-danger btn-sm mediaBtn">Hammasi</button>
                    </div>
                    <div class="mediacate__all">
                        <template v-if="!store.isActive(items)">
                            <div class="position-relative mediacate__all-card w-100 image-container"
                                v-for="item in items?.videos.slice(0, 4)">
                                <iframe :src="item.youtube_link" width="100%"
                                    src="https://www.youtube.com/embed/6ZdkMZq95PI"
                                    title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen class="mediacate__iframe-all"></iframe>
                                <!-- <img src="/images/mediacategoryImages/all-img.png"
                                    class="img-fluid h-100 rounded-0 card-img" alt="img" />
                                <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                                    <div>
                                        <p class="mediacate__all-box-text fw-medium text-white hidden-text-3">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                        <p class="mediacate__all-box-text fw-normal">
                                            {{ items.videos.length }} Videos
                                        </p>
                                    </div>
                                    <NuxtLink :to="item.youtube_link" class="d-block">
                                        <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid"
                                            style="width: 40px; height: 40px" alt="icon" />
                                    </NuxtLink>
                                </div> -->
                            </div>
                        </template>
                        <template v-else>
                            <div class="position-relative mediacate__all-card w-100 image-container"
                                v-for="item in items.videos">
                                <iframe :src="item.youtube_link" width="100%"
                                    src="https://www.youtube.com/embed/6ZdkMZq95PI"
                                    title="Нега Уйкуга Тоймаймиз? °Abdulloh Domla °Абдуллох Домла" frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    allowfullscreen class="mediacate__iframe-all"></iframe>
                                <!-- <img src="/images/mediacategoryImages/all-img.png"
                                    class="img-fluid h-100 rounded-0 card-img" alt="img" />
                                <div class="position-absolute mediacate__all-box w-100 card-img-overlay">
                                    <div>
                                        <p class="mediacate__all-box-text fw-medium text-white hidden-text-3">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                        <p class="mediacate__all-box-text fw-normal">
                                            {{ items.videos.length }} Videos
                                        </p>
                                    </div>
                                    <NuxtLink :to="item.youtube_link" class="d-block">
                                        <img src="/images/mediacategoryImages/play-icon.svg" class="img-fluid"
                                            style="width: 40px; height: 40px" alt="icon" />
                                    </NuxtLink>
                                </div> -->
                            </div>
                        </template>
                    </div>
                </div>
            </section>

            <section class="slide-option loopScroler mb-0 bg-white darkMode">
                <LoopScroler />
            </section>
        </main>
    </template>
</template>
