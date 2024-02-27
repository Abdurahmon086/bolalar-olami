<script setup>
useHead({ title: "Bolalar olami | category" });
const localPath = useLocalePath()
const route = useRoute();

const categoryStore = useCategoryStore()
const mainStore = useMainStore()
await categoryStore.getCategoryData(mainStore.category.id)

</script>

<template>
    <template v-if="categoryStore.loader == true">
        <Loader />
    </template>
    <template v-else-if="categoryStore.loader == false">
        <main class="darkMode-body pb-5 bg-light">
            <section class="darkMode-body">
                <div class="container">
                    <h3 class="talim-title darkMode-title text-capitalize">{{ route.params.categories }}</h3>
                    <div class="talim-box">
                        <div class="talim-box-wrapper">
                            <div class="talim-box__left position-relative image-container item1">
                                <NuxtLink :to="localPath(`/categories/${categoryStore.datas?.bannerPosts[0]?.id}`)">
                                    <img :src="categoryStore.datas?.bannerPosts[0]?.detail_image.card"
                                        class="img-fluid w-100 h-100" alt="talim-img" />
                                    <div class="talim-box__left-box position-absolute w-100 h-100">
                                        <h3 class="talim-box__left-title position-absolute hidden-text-3">
                                            {{ categoryStore.datas?.bannerPosts[0]?.title_uz }}
                                        </h3>
                                    </div>
                                </NuxtLink>
                            </div>
                            <div class="talim-box-card">
                                <div class="talim-cardimg__left-wrapper darkMode"
                                    v-for="item in categoryStore.datas?.bannerPosts.slice(1)">
                                    <div class="position-relative">
                                        <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                            <img :src="item.detail_image.card" class="img-fluid w-100"
                                                :alt="item[`title_${$i18n.locale}`]" />
                                            <p class="talim-cardimg__left-wrapper-dec position-absolute darkMode">
                                                Salomatlik
                                            </p>
                                        </NuxtLink>
                                    </div>
                                    <div class="talim-cardimg__left-wrapper-box">
                                        <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                            <h4 class="talim-cardimg__left-wrapper-title darkMode-title hidden-text-2">
                                                {{ item[`title_${$i18n.locale}`] }}
                                            </h4>
                                        </NuxtLink>
                                        <p class="talim-cardimg__left-wrapper-text darkMode-title hidden-text-3">
                                            {{ item[`description_${$i18n.locale}`] }}
                                        </p>
                                        <p class="talim-cardimg__left-wrapper-time darkMode-sp">
                                            {{ item.publish_date }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">So'nggi maqolalar</h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <li class="border-bottom" v-for="item in categoryStore.datas?.resentPosts">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <p class="lastNews__right-text darkMode hidden-text-2">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                    </NuxtLink>
                                    <div
                                        class="lastNews__right-view d-flex justify-content-between align-items-center darkMode-sp">
                                        <div class="d-flex align-items-center" style="gap: 7px">
                                            <img src="/images/eye.svg" alt="eye icon" />
                                            <span class="lastNews__right-sp darkMode-sp">{{ item.views_count }}</span>
                                        </div>
                                        <span
                                            class="lastNews__right-sp lastNews__right-spDate darkMode-sp">{{ item.publish_date }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <img src="/images/talimImages/reklama-y-img.png" class="img-fluid pt-3" alt="" />
                </div>
            </section>
            <section class="lastNews">
                <div class="container">
                    <div class="lastNews__wrapper">
                        <div class="lastNews__left">
                            <div class="lastNews__left-inner card h-100 shadow-0 rounded-0 darkMode border-0"
                                v-for="item in categoryStore.datas?.categoryPosts.slice(0, 4)">
                                <div class="position-relative">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <img :src="item.detail_image.card" class="card-img-top rounded-0"
                                            :alt="item[`title_${$i18n.locale}`]" />
                                        <span class="position-absolute lastNews__left-spLink darkMode">Salomatlik</span>
                                    </NuxtLink>
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <h5 class="card-title darkMode hidden-text-2">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </h5>
                                    </NuxtLink>
                                    <p class="card-text darkMode hidden-text-3">
                                        {{ item[`description_${$i18n.locale}`] }}
                                    </p>
                                    <span class="lastNews__left-sp darkMode-sp">{{ item.publish_date }}</span>
                                </div>
                            </div>
                        </div>
                        <div class="lastNews__right darkMode border-0">
                            <h4 class="lastNews__right-title">Ko'p o'qilgan</h4>
                            <ul class="lastNews__right-list list-unstyled darkMode">
                                <li class="border-bottom" v-for="item in categoryStore.datas?.mostReadPosts">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <p class="lastNews__right-text darkMode hidden-text-2">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                    </NuxtLink>
                                    <div
                                        class="lastNews__right-view d-flex justify-content-between align-items-center darkMode-sp">
                                        <div class="d-flex align-items-center" style="gap: 7px">
                                            <img src="/images/eye.svg" alt="eye icon" />
                                            <span class="lastNews__right-sp darkMode-sp">{{ item.views_count }}</span>
                                        </div>
                                        <span
                                            class="lastNews__right-sp lastNews__right-spDate darkMode-sp">{{ item.publish_date }}</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section class="darkMode-body">
                <div class="container">
                    <div class="talim-cardimg">
                        <div class="talim-cardimg__left">
                            <div class="talim-cardimg__left-wrapper darkMode"
                                v-for="item in categoryStore.datas?.categoryPosts.slice(4)">
                                <div class="position-relative">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <img :src="item.detail_image.card" class="img-fluid w-100"
                                            :alt="item[`title_${$i18n.locale}`]" />
                                        <p class="talim-cardimg__left-wrapper-dec position-absolute darkMode">
                                            Salomatlik
                                        </p>
                                    </NuxtLink>
                                </div>
                                <div class="talim-cardimg__left-wrapper-box">
                                    <NuxtLink :to="localPath(`/categories/${item.id}`)">
                                        <h4 class="talim-cardimg__left-wrapper-title darkMode-title hidden-text-2">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </h4>
                                    </NuxtLink>
                                    <p class="talim-cardimg__left-wrapper-text darkMode-title hidden-text-3">
                                        {{ item[`description_${$i18n.locale}`] }}
                                    </p>
                                    <p class="talim-cardimg__left-wrapper-time darkMode-sp">
                                        {{ item.publish_date }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <aside class="talim-cardimg__aside">
                            <img src="/images/talimImages/reklama-img1.png" class="img-fluid talim-cardimg__aside-img1"
                                alt="reklama-img" />
                            <img src="/images/talimImages/reklama-img2.png" class="img-fluid talim-cardimg__aside-img2"
                                alt="reklama-img" />
                            <img src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3"
                                alt="reklama-img" />
                        </aside>
                    </div>
                </div>
            </section>
            <section class="slide-option loopScroler mb-0 bg-white darkMode">
                <LoopScroler />
            </section>
        </main>
    </template>
</template>
