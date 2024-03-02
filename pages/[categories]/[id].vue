<script setup>
useHead({ title: "Bolalar olami | posts" });
import Loader from "~/components/loader.vue";
import { useSingleStore } from '~/stores/singleStore';
import { onMounted } from 'vue';

const route = useRoute();

const localPath = useLocalePath();
const singleStore = useSingleStore();
const datas = computed(() => singleStore.getSingleData);

onMounted(() => {
  console.log('mounted ishlamayabdi')
    singleStore.setSingleData(route.params.id)
});

</script>

<template>
    <template v-if="datas">
        <div class="shows darkMode pb-5">
            <div class="navigate">
                <div class="container">
                    <nav aria-label="breadcrumb ">
                        <ol class="breadcrumb d-flex align-items-center">
                            <li class="breadcrumb-item d-flex align-items-center">
                                <NuxtLink class="darkMode text-decoration-none" to="/">Asosiy</NuxtLink>
                            </li>
                            <li class="breadcrumb-item d-flex align-items-center">
                                <NuxtLink :to="`/${datas.post?.section.slug_uz}/?id=${datas.post?.section.id}`"
                                    class="darkMode text-decoration-none">
                                    {{ datas.post.section[`title_${$i18n.locale}`] }}
                                </NuxtLink>
                            </li>
                            <li class="breadcrumb-item d-flex align-items-center active darkMode" aria-current="page">
                                {{ datas?.post[`title_${$i18n.locale}`] }}
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div>
                <div class="container main__wrapper d-md-flex justify-content-md-between darkMode-title">
                    <section class="single">
                        <h2 class="single__title">
                            {{ datas?.post[`title_${$i18n.locale}`] }}
                        </h2>
                        <div class="single__info">
                            <span class="darkMode pt-1">{{
        datas?.post.publish_date
    }}</span>
                            <div class="single__info-inner">
                                <img src="/images/eye_main.svg" alt="eye icon" />
                                <span class="darkMode">{{
            datas?.post.views_count
        }}</span>
                            </div>
                            <!-- <div class="single__info-inner">
                            <img src="/images/message.svg" alt="message icon" />
                            <span class="darkMode">98</span>
                        </div>
                        <div class="single__info-inner">
                            <img src="/images/share.svg" alt="share icon" />
                            <span class="darkMode">98</span>
                        </div> -->
                        </div>
                        <img :src="(datas?.post.detail_image?.card ? datas?.post.detail_image?.card : '/images/logo.svg')"
                            :alt="datas?.post[`title_${$i18n.locale}`]" class="single__mainImg object-fit-fill" />
                        <div class="single__inner">
                            <!-- <ul
                            class="single__social d-none d-sm-flex list-unstyled"
                        >
                            <li class="darkMode-btn">
                                <img
                                    src="/images/insta.svg"
                                    alt="instagram icon"
                                />
                            </li>
                            <li class="darkMode-btn">
                                <img
                                    src="/images/telegram1.svg"
                                    alt="telegram icon"
                                />
                            </li>
                            <li class="darkMode-btn">
                                <img src="/images/share.svg" alt="share icon" />
                            </li>
                        </ul> -->
                            <div class="single__main">
                                <div class="single__main-inner d-flex">
                                    <!-- <ul
                                    class="single__social list-unstyled d-flex d-sm-none"
                                >
                                    <li class="darkMode-btn">
                                        <img
                                            src="/images/insta.svg"
                                            alt="instagram icon"
                                        />
                                    </li>
                                    <li class="darkMode-btn">
                                        <img
                                            src="/images/telegram1.svg"
                                            alt="telegram icon"
                                        />
                                    </li>
                                    <li class="darkMode-btn">
                                        <img
                                            src="/images/share.svg"
                                            alt="share icon"
                                        />
                                    </li>
                                </ul> -->
                                    <div class="single__text-wrapper single__text" v-html="datas?.post[`content_${$i18n.locale}`]
        "></div>
                                </div>
                                <!-- <div class="single__qs darkMode-body">
                                <img src="/images/dod.svg" alt="dod icon" />
                                <p class="single__qs-text">
                                    Shuningdek, Prezident yordamchisi ta’lim
                                    islohoti doirasida “Xorijiy tillarni
                                    o‘qitish bo‘yicha eng yaxshi maktab” tanlovi
                                    o‘tkazilganini, unda 6885 ta maktab va
                                    7–9-sinflarning 35 mingga yaqin o‘quvchilari
                                    ishtirok etganini qayd etgan.
                                </p>
                            </div> -->
                                <template v-if="datas?.post.tags.length != 0">
                                    <div class="single__tags d-none d-md-block darkMode-body">
                                        <h4 class="single__tags-title">
                                            Teglar
                                        </h4>
                                        <ul class="list-unstyled">
                                            <NuxtLink v-for="item of datas?.post.tags" :to="`/tegs/${item.id}`">
                                                <li class="darkMode-btn button-container-1">
                                                    {{
        item[
        `title_${$i18n.locale}`
        ]
    }}
                                                </li>
                                            </NuxtLink>
                                        </ul>
                                    </div>
                                </template>
                                <!-- <div
                                class="single__auther auther d-none d-md-flex darkMode-body"
                            >
                                <div class="single__auther-name">
                                    <p class="single__auther-text">
                                        Maqola muallifi
                                    </p>
                                    <div class="single__auther-inner">
                                        <img
                                            src="/images/person.png"
                                            alt="person image"
                                        />
                                        <h4 class="single__auther-title">
                                            Firdavs Muzafarov
                                        </h4>
                                    </div>
                                </div>
                                <div class="single__auther-name">
                                    <p class="single__auther-text">
                                        Maqolaga baho bering
                                    </p>
                                    <div class="rating">
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="5"
                                            id="5"
                                        /><label for="5">☆</label>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="4"
                                            id="4"
                                        /><label for="4">☆</label>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="3"
                                            id="3"
                                        /><label for="3">☆</label>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="2"
                                            id="2"
                                        /><label for="2">☆</label>
                                        <input
                                            type="radio"
                                            name="rating"
                                            value="1"
                                            id="1"
                                        /><label for="1">☆</label>
                                    </div>
                                </div>
                                <div class="single__auther-name">
                                    <p class="single__auther-text">Ulashish</p>
                                    <ul
                                        class="single__auther-share list-unstyled"
                                    >
                                        <li class="darkMode-btn">
                                            <img
                                                src="/images/telegram1.svg"
                                                alt="telegram icon"
                                            />
                                        </li>
                                        <li class="darkMode-btn">
                                            <img
                                                src="/images/insta.svg"
                                                alt="instagram icon"
                                            />
                                        </li>
                                        <li class="darkMode-btn">
                                            <img
                                                src="/images/share.svg"
                                                alt="share icon"
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div> -->
                            </div>
                        </div>
                    </section>
                    <aside>
                        <section class="aside">
                            <h4 class="aside__title">Ko'p o'qilganlar</h4>
                            <div class="aside__wrapper">
                                <div v-for="item in datas?.mostReadPosts" :key="item.id"
                                    class="aside__left-inner card h-100 shadow-0 border-0 rounded-0 bg-light text-decoration-none darkMode">
                                    <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)"
                                        class="position-relative">
                                        <img :src="(item.detail_image?.card ? item.detail_image?.card : '/images/logo.svg')"
                                            :alt="item[`title_${$i18n.locale}`]" class="card-img-top rounded-0" />
                                        <span
                                            class="position-absolute aside__left-spLink darkMode">{{ item.section[`title_${$i18n.locale}`] }}</span>
                                    </NuxtLink>
                                    <div class="card-body d-flex flex-column">
                                        <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                                            <h5 class="card-title darkMode heddin-text-2">
                                                {{ item[`title_${$i18n.locale}`] }}
                                            </h5>
                                        </NuxtLink>
                                        <p class="card-text darkMode heddin-text-3">
                                            {{
        item[
        `description_${$i18n.locale}`
        ]
    }}
                                        </p>
                                        <span class="aside__left-sp darkMode-sp">
                                            {{ item.publish_date }}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </aside>
                </div>

                <LoopScroler />
            </div>
        </div>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>

<style scoped>
.shows {
    background-color: #fff;
    min-height: 100vh !important;
}
</style>
