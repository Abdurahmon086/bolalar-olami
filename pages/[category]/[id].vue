<script setup>
useHead({ title: "Bolalar olami | posts" });
const localPath = useLocalePath();
const singleStore = useSingleStore();
const route = useRoute();
const id = route.params.id;

await singleStore.getSingleData(id);
const data = singleStore.datas;
</script>

<template>
    <div class="show darkMode pb-5">
        <div class="navigate">
            <div class="container">
                <nav aria-label="breadcrumb ">
                    <ol class="breadcrumb d-flex align-items-center">
                        <li class="breadcrumb-item d-flex align-items-center">
                            <a class="darkMode text-decoration-none" href="#"
                                >Asosiy</a
                            >
                        </li>
                        <li class="breadcrumb-item d-flex align-items-center">
                            <a class="darkMode text-decoration-none" href="#"
                                >Yangiliklar</a
                            >
                        </li>
                        <li
                            class="breadcrumb-item d-flex align-items-center active darkMode"
                            aria-current="page"
                        >
                            {{ data.post[`title_${$i18n.locale}`] }}
                        </li>
                    </ol>
                </nav>
            </div>
        </div>
        <div>
            <div
                class="container main__wrapper d-md-flex justify-content-md-between darkMode-title"
            >
                <section class="single">
                    <h2 class="single__title">
                        {{ data.post[`title_${$i18n.locale}`] }}
                    </h2>
                    <div class="single__info">
                        <span class="darkMode pt-1">{{
                            data.post.publish_date
                        }}</span>
                        <div class="single__info-inner">
                            <img src="/images/eye_main.svg" alt="eye icon" />
                            <span class="darkMode">{{
                                data.post.views_count
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
                    <img
                        :src="data.post.detail_image.card"
                        :alt="data.post[`title_${$i18n.locale}`]"
                        class="single__mainImg"
                    />
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
                                <div
                                    class="single__text-wrapper single__text"
                                    v-html="
                                        data.post[`content_${$i18n.locale}`]
                                    "
                                ></div>
                            </div>
                            <div class="single__qs darkMode-body">
                                <img src="/images/dod.svg" alt="dod icon" />
                                <p class="single__qs-text">
                                    Shuningdek, Prezident yordamchisi ta’lim
                                    islohoti doirasida “Xorijiy tillarni
                                    o‘qitish bo‘yicha eng yaxshi maktab” tanlovi
                                    o‘tkazilganini, unda 6885 ta maktab va
                                    7–9-sinflarning 35 mingga yaqin o‘quvchilari
                                    ishtirok etganini qayd etgan.
                                </p>
                            </div>
                            <template v-if="data.post.tags.length != 0">
                                <div
                                    class="single__tags d-none d-md-block darkMode-body"
                                >
                                    <h4 class="single__tags-title">Teglar</h4>
                                    <ul class="list-unstyled">
                                        <NuxtLink
                                            v-for="item of data.post.tags"
                                        >
                                            <li class="darkMode-btn">
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
                            <div
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
                            </div>
                        </div>
                    </div>
                </section>
                <aside>
                    <section class="aside">
                        <h4 class="aside__title">Ko'p o'qilganlar</h4>
                        <div class="aside__wrapper">
                            <NuxtLink
                                v-for="item in data.mostReadPosts"
                                :to="localPath(`/category/${item.id}`)"
                                :key="item.id"
                                class="aside__left-inner card h-100 shadow-0 border-0 rounded-0 bg-light text-decoration-none darkMode"
                            >
                                <div class="position-relative">
                                    <img
                                        :src="item.detail_image.card"
                                        :alt="item[`title_${$i18n.locale}`]"
                                        class="card-img-top rounded-0"
                                    />
                                    <span
                                        class="position-absolute aside__left-spLink darkMode"
                                        >Salomatlik</span
                                    >
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title darkMode">
                                        {{ item[`title_${$i18n.locale}`] }}
                                    </h5>
                                    <p class="card-text darkMode">
                                        {{
                                            item[`description_${$i18n.locale}`]
                                        }}
                                    </p>
                                    <span class="aside__left-sp darkMode-sp">
                                        {{ item.publish_date }}
                                    </span>
                                </div>
                            </NuxtLink>
                            <!-- <img
                                src="/images/add_main.jpg"
                                alt="add image"
                                class="aside__img-add"
                            /> -->
                        </div>
                    </section>
                </aside>
            </div>

            <LoopScroler />
        </div>
    </div>
</template>

<style scoped>
.show {
    background-color: #fff;
}
</style>
