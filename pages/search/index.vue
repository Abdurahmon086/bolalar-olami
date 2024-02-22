<script setup>
useHead({ title: "Bolalar olami | search" });

const indexStore = useIndexStore();
const localPath = useLocalePath();

const data = indexStore.datas;
</script>

<template>
    <main>
        <section class="container">
            <div class="search-result">
                <div class="search-result__box">
                    <p class="search-result__text">Kalit so’zi</p>
                    <img
                        src="/images/searchImages/close-icon.svg"
                        class="img-fluid"
                        alt="close icon"
                    />
                </div>

                <div class="search-result__card">
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
                    </div>
                    <div class="search-result__card-wrapper position-relative">
                        <img
                            src="/images/searchImages/img1.png"
                            class="img-fluid w-100"
                            alt="img"
                        />
                        <div
                            class="search-result__card-wrapper-box position-absolute w-100 h-100"
                        >
                            <p
                                class="search-result__card-wrapper-text position-absolute"
                            >
                                Yaponiyada tug‘ilishlar soni keskin kamaydi
                            </p>
                        </div>
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
                            <NuxtLink
                                v-for="item in data.educationPosts"
                                :to="localPath(`/show/category/${item.id}`)"
                                :key="item.id"
                                class="lastNews__left-inner text-decoration-none card h-100 border-0 shadow-0 rounded-0 darkMode"
                            >
                                <div
                                    class="position-relative lastNews__left-img"
                                >
                                    <img
                                        :src="item.detail_image.card"
                                        class="card-img-top rounded-0"
                                        :alt="item[`title_${$i18n.locale}`]"
                                    />
                                    <span
                                        class="position-absolute lastNews__left-spLink darkMode"
                                    >
                                        {{ $t("education") }}</span
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
                                    <span
                                        class="lastNews__left-sp darkMode-sp"
                                        >{{ item.publish_date }}</span
                                    >
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="lastNews__right darkMode border-0">
                        <h4 class="lastNews__right-title">
                            {{ $t("last_news") }}
                        </h4>
                        <ul class="lastNews__right-list list-unstyled darkMode">
                            <NuxtLink
                                v-for="item in data.recentNewsPosts"
                                :to="localPath(`/show/category/${item.id}`)"
                                :key="item.id"
                                class="border-bottom text-decoration-none"
                            >
                                <p class="lastNews__right-text darkMode">
                                    {{ item[`title_${$i18n.locale}`] }}
                                </p>
                                <div
                                    class="lastNews__right-view d-flex justify-content-between align-items-center darkMode-sp"
                                >
                                    <div
                                        class="d-flex align-items-center"
                                        style="gap: 7px"
                                    >
                                        <img
                                            src="/images/eye.svg"
                                            alt="eye icon"
                                        />
                                        <span
                                            class="lastNews__right-sp darkMode-sp"
                                            >{{ item.views_count }}</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >{{ item.publish_date }}</span
                                    >
                                </div>
                            </NuxtLink>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped>
main {
    background: #f6f6f6;
    padding-bottom: 50px;
}
</style>
