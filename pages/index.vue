<script setup>
useHead({
    title: "Bolalar olami",
});

const mainStore = useMainStore();
const indexStore = useIndexStore();
const localPath = useLocalePath();

const data = indexStore.datas;

const mainPosts4 = data.mainPosts.slice(1);
</script>

<template>
    <main class="darkMode-body pb-5">
        <template v-if="mainStore.auth == true">
            <AuthCard />
        </template>
        <section class="hero">
            <div class="container">
                <!-- Carousel wrapper -->
                <div
                    id="carouselExampleCaptions"
                    class="carousel slide carousel-fade pointer-event"
                    data-bs-ride="carousel"
                    data-bs-interval="500"
                >
                    <!-- Indicators -->
                    <div class="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="0"
                            class="active rounded-circle"
                            aria-current="true"
                            aria-label="Slide 1"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="1"
                            class="rounded-circle"
                            aria-label="Slide 2"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="2"
                            class="rounded-circle"
                            aria-label="Slide 3"
                        ></button>
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to="3"
                            class="rounded-circle"
                            aria-label="Slide 4"
                        ></button>
                    </div>

                    <!-- Inner -->
                    <div class="carousel-inner">
                        <!-- Single item -->
                        <div class="carousel-item active image-container w-100">
                            <img
                                src="/images/hero_img.jpg"
                                class="img-fluid h-100 w-100"
                                style="object-fit: cover"
                                alt="hero image"
                            />
                            <div class="carousel-caption">
                                <div
                                    class="hero__pages d-flex align-items-center"
                                >
                                    <img
                                        src="/images/Vector-left.svg"
                                        alt="verctor left icon"
                                    />
                                    <span class="hero__infoTy">3</span>
                                    <img
                                        src="/images/Vector-right.svg"
                                        alt="verctor right icon"
                                    />
                                    <span class="opacity-75 hero__infoTy-oth"
                                        >12</span
                                    >
                                </div>
                                <div
                                    class="d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between"
                                >
                                    <h3 class="text-start hero__car-text">
                                        Yaponiyada tug‘ilishlar soni kamaydi
                                    </h3>
                                    <a
                                        class="btn text-white hero__link-btn d-flex align-items-center darkMode2"
                                        data-bs-ripple-init
                                        href="#!"
                                        role="button"
                                    >
                                        Подробнее
                                        <img
                                            src="/images/Vector-oreng.svg"
                                            alt="vrctor orange icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item image-container w-100">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                                class="img-fluid h-100 w-100"
                                alt="Sunset Over the City"
                            />
                            <div class="carousel-caption">
                                <div
                                    class="hero__pages d-flex align-items-center"
                                >
                                    <img
                                        src="/images/Vector-left.svg"
                                        alt="verctor left icon"
                                    />
                                    <span class="hero__infoTy">3</span>
                                    <img
                                        src="/images/Vector-right.svg"
                                        alt="verctor right icon"
                                    />
                                    <span class="opacity-75 hero__infoTy-oth"
                                        >12</span
                                    >
                                </div>
                                <div
                                    class="d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between"
                                >
                                    <h3 class="text-start hero__car-text">
                                        Yaponiyada tug‘ilishlar soni keskin
                                        kamaydi
                                    </h3>
                                    <a
                                        class="btn text-white hero__link-btn d-flex align-items-center darkMode2"
                                        data-bs-ripple-init
                                        href="#!"
                                        role="button"
                                    >
                                        Подробнее
                                        <img
                                            src="/images/Vector-oreng.svg"
                                            alt="vrctor orange icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item image-container w-100">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(23).webp"
                                class="img-fluid h-100 w-100"
                                alt="Sunset Over the City"
                            />
                            <div class="carousel-caption">
                                <div
                                    class="hero__pages d-flex align-items-center"
                                >
                                    <img
                                        src="/images/Vector-left.svg"
                                        alt="verctor left icon"
                                    />
                                    <span class="hero__infoTy">3</span>
                                    <img
                                        src="/images/Vector-right.svg"
                                        alt="verctor right icon"
                                    />
                                    <span class="opacity-75 hero__infoTy-oth"
                                        >12</span
                                    >
                                </div>
                                <div
                                    class="d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between"
                                >
                                    <h3 class="text-start hero__car-text">
                                        Yaponiyada tug‘ilishlar soni keskin
                                        kamaydi
                                    </h3>
                                    <a
                                        class="btn text-white hero__link-btn d-flex align-items-center darkMode2"
                                        data-bs-ripple-init
                                        href="#!"
                                        role="button"
                                    >
                                        Подробнее
                                        <img
                                            src="/images/Vector-oreng.svg"
                                            alt="vrctor orange icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item image-container w-100">
                            <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/Slides/img%20(22).webp"
                                class="img-fluid h-100 w-100"
                                alt="Sunset Over the City"
                            />
                            <div class="carousel-caption">
                                <div
                                    class="hero__pages d-flex align-items-center"
                                >
                                    <img
                                        src="/images/Vector-left.svg"
                                        alt="verctor left icon"
                                    />
                                    <span class="hero__infoTy">3</span>
                                    <img
                                        src="/images/Vector-right.svg"
                                        alt="verctor right icon"
                                    />
                                    <span class="opacity-75 hero__infoTy-oth"
                                        >12</span
                                    >
                                </div>
                                <div
                                    class="d-flex flex-column align-items-start flex-sm-row align-items-sm-end justify-content-sm-between"
                                >
                                    <h3 class="text-start hero__car-text">
                                        Yaponiyada tug‘ilishlar soni keskin
                                        kamaydi
                                    </h3>
                                    <a
                                        class="btn text-white hero__link-btn d-flex align-items-center darkMode2"
                                        data-bs-ripple-init
                                        href="#!"
                                        role="button"
                                    >
                                        Подробнее
                                        <img
                                            src="/images/Vector-oreng.svg"
                                            alt="vrctor orange icon"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="news">
            <div class="container">
                <h4 class="news__title darkMode-title">
                    {{ $t("main_title") }}
                </h4>
                <div class="news__wrapper">
                    <NuxtLink
                        :to="
                            localPath(`/category/${data.mainPosts[0].id}`)
                        "
                        class="news__left card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            :src="data.mainPosts[0].detail_image.card"
                            class="card-img img-fluid h-100 rounded-0"
                            :alt="data.mainPosts[0][`title_${$i18n.locale}`]"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="news__card-title">
                                {{ data.mainPosts[0][`title_${$i18n.locale}`] }}
                            </h5>
                        </div>
                    </NuxtLink>
                    <div class="news__right">
                        <NuxtLink
                            v-for="item in mainPosts4"
                            :to="localPath(`/category/${item.id}`)"
                            :key="item.id"
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <img
                                :src="item.detail_image.card"
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
                <div class="lastNews__wrapper">
                    <div class="lastNews__left-wrap">
                        <h4 class="news__title darkMode-title">
                            {{ $t("education") }}
                        </h4>
                        <div class="lastNews__left">
                            <NuxtLink
                                v-for="item in data.educationPosts"
                                :to="localPath(`/category/${item.id}`)"
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
                                :to="localPath(`/category/${item.id}`)"
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
        <section class="social">
            <div class="container">
                <h4 class="social__name-title darkMode-title">
                    {{ $t("social_text") }}
                </h4>
                <div
                    id="carouselExampleAutoplaying"
                    class="carousel slide"
                    data-bs-ride="carousel"
                    data-bs-interval="500"
                >
                    <div class="carousel-inner social__qs-wrapper">
                        <NuxtLink
                            v-for="(item, index) in data.quotations"
                            :key="item.id"
                            class="carousel-item"
                            :class="{ active: index === 0 }"
                        >
                            <img
                                :src="item.detail_image.original_url"
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
                    </div>
                </div>
            </div>
        </section>
        <!-- Media -->
        <section class="media">
            <div class="container">
                <h4 class="media__title darkMode-title">
                    {{ $t("media") }}
                </h4>
                <div class="media__wrapper">
                    <NuxtLink
                        class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            src="/images/media-img1.png"
                            class="card-img img-fluid h-100 rounded-0"
                            alt="media-img3"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="media__card-title">
                                Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                            </h5>
                        </div>
                    </NuxtLink>
                    <NuxtLink
                        class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            src="/images/media-img2.png"
                            class="card-img img-fluid h-100 rounded-0"
                            alt="media-img3"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="media__card-title">
                                Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                            </h5>
                        </div>
                    </NuxtLink>
                    <NuxtLink
                        class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            src="/images/media-img3.png"
                            class="card-img img-fluid h-100 rounded-0"
                            alt="media-img3"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="media__card-title">
                                Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                            </h5>
                        </div>
                    </NuxtLink>
                    <NuxtLink
                        class="card bg-dark text-white media__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            src="/images/media-img4.png"
                            class="card-img img-fluid h-100 rounded-0"
                            alt="media-img3"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="media__card-title">
                                Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                            </h5>
                        </div>
                    </NuxtLink>
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
                        <div
                            id="carouselExampleAutoplaying"
                            class="carousel slide carousel-fade pointer-event"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-inner">
                                <NuxtLink
                                    v-for="(
                                        item, index
                                    ) in data.achchiqtoshPosts"
                                    :key="item.id"
                                    class="carousel-item position-relative image-container card border-0 rounded-0 bg-dark"
                                    :class="{ active: index === 0 }"
                                    data-bs-interval="500"
                                    data-bs-ride="true"
                                    :to="localPath(`/category/${item.id}`)"
                                >
                                    <img
                                        :src="item.detail_image.card"
                                        :alt="item[`title_${$i18n.locale}`]"
                                        class="card-img img-fluid h-100 rounded-0"
                                    />
                                    <div class="card-img-overlay rounded-0">
                                        <h5
                                            class="achchiqtosh__slider-text position-absolute"
                                        >
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </h5>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">
                                {{ $t("healthy") }}
                            </h4>
                            <div class="achchiqtosh__card">
                                <NuxtLink
                                    v-for="item in data.healthPosts"
                                    :key="item.id"
                                    :to="localPath(`/category/${item.id}`)"
                                    class="darkMode achchiqtosh__card-box text-decoration-none"
                                >
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            :src="item.detail_image.card"
                                            :alt="item[`title_${$i18n.locale}`]"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            {{ $t("healthy") }}
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            {{
                                                item[
                                                    `description_${$i18n.locale}`
                                                ]
                                            }}
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            {{ item.publish_date }}
                                        </p>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">
                                {{ $t("clinc") }}
                            </h4>
                            <div class="achchiqtosh__card">
                                <NuxtLink
                                    v-for="item in data.legalClinicPosts"
                                    :key="item.id"
                                    :to="localPath(`/category/${item.id}`)"
                                    class="darkMode achchiqtosh__card-box text-decoration-none"
                                >
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            :src="item.detail_image.card"
                                            :alt="item[`title_${$i18n.locale}`]"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            {{ $t("clinc") }}
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            {{
                                                item[
                                                    `description_${$i18n.locale}`
                                                ]
                                            }}
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            {{ item.publish_date }}
                                        </p>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">
                                {{ $t("useful") }}
                            </h4>
                            <div class="achchiqtosh__card">
                                <NuxtLink
                                    v-for="item in data.usefulPosts"
                                    :key="item.id"
                                    :to="localPath(`/category/${item.id}`)"
                                    class="darkMode achchiqtosh__card-box text-decoration-none"
                                >
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            :src="item.detail_image.card"
                                            :alt="item[`title_${$i18n.locale}`]"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            {{ $t("useful") }}
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            {{
                                                item[
                                                    `description_${$i18n.locale}`
                                                ]
                                            }}
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            {{ item.publish_date }}
                                        </p>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <div class="row-gap-3 d-none d-sm-flex flex-column">
                        <img
                            class="img-fluid achchiqtosh__card-box7"
                            src="/images/reklama-img.png"
                            alt="reklama-img"
                        />
                        <img
                            class="img-fluid achchiqtosh__card-box8"
                            src="/images/reklama-img1.png"
                            alt="reklama-img1"
                        />
                        <img
                            class="img-fluid achchiqtosh__card-box9"
                            src="/images/reklama-img1.png"
                            alt="reklama-img1"
                        />
                        <img
                            class="img-fluid achchiqtosh__card-box9"
                            src="/images/reklama-img1.png"
                            alt="reklama-img1"
                        />
                    </div>
                </div>
            </div>
        </section>
        <LoopScroler />
    </main>
</template>

<style scoped>
main {
    background: #f6f6f6;
}
</style>
