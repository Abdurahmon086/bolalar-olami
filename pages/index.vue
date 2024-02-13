<script setup>
useHead({
    title: "Bolalar olami",
});
const url = "http://new.bolalarolami.uz/api/v2";
const { data } = await useFetch(`${url}/home/get-news-home`);

const educationPosts = data.value.data.educationPosts;
const mainPosts = data.value.data.mainPosts;
const recentNewsPosts = data.value.data.recentNewsPosts;

const mainPosts4 = mainPosts.slice(1);
console.log(mainPosts4);

console.log(educationPosts, mainPosts, recentNewsPosts);
</script>

<template>
    <main class="darkMode-body pb-5">
        <section class="hero">
            <div class="container">
                <!-- Carousel wrapper -->
                <div
                    id="carouselExampleCaptions"
                    class="carousel slide carousel-fade"
                    data-bs-ride="carousel"
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
                <h4 class="news__title darkMode-title">Asosiy</h4>
                <div class="news__wrapper">
                    <div
                        class="news__left card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            :src="mainPosts[0].detail_image.card"
                            class="card-img img-fluid h-100 rounded-0"
                            :alt="mainPosts[0].title_uz"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="news__card-title">
                                {{ mainPosts[0].title_uz }}
                            </h5>
                        </div>
                    </div>
                    <div class="news__right">
                        <div
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                            v-for="item in mainPosts4"
                        >
                            <img
                                :src="item.detail_image.card"
                                class="card-img img-fluid h-100 rounded-0"
                                :alt="item.title_uz"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    {{ item.title_uz }}
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="lastNews">
            <div class="container">
                <div class="lastNews__wrapper">
                    <div class="lastNews__left-wrap">
                        <h4 class="news__title darkMode-title">Ta'lim</h4>
                        <div class="lastNews__left">
                            <div
                                class="lastNews__left-inner card h-100 border-0 shadow-0 rounded-0 darkMode"
                                v-for="item in educationPosts"
                            >
                                <div
                                    class="position-relative lastNews__left-img"
                                >
                                    <img
                                        :src="item.detail_image.card"
                                        class="card-img-top rounded-0"
                                        :alt="item.title_kr"
                                    />
                                    <span
                                        class="position-absolute lastNews__left-spLink darkMode"
                                        >Salomatlik</span
                                    >
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title darkMode">
                                        {{ item.title_kr }}
                                    </h5>
                                    <p class="card-text darkMode">
                                        {{ item.description_kr }}
                                    </p>
                                    <span
                                        class="lastNews__left-sp darkMode-sp"
                                        >{{ item.publish_date }}</span
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="lastNews__right darkMode border-0">
                        <h4 class="lastNews__right-title">
                            So'nggi yangiliklarga
                        </h4>
                        <ul class="lastNews__right-list list-unstyled darkMode">
                            <NuxtLink
                                class="border-bottom text-decoration-none"
                                v-for="item in recentNewsPosts"
                            >
                                <p class="lastNews__right-text darkMode">
                                    {{ item.title_uz }}
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
                    Social questionnaire
                </h4>
                <div
                    id="carouselExampleInterval"
                    class="carousel slide"
                    data-bs-ride="carousel"
                >
                    <div class="carousel-inner social__qs-wrapper">
                        <div class="carousel-item active">
                            <img
                                src="/images/social-img.png"
                                alt="social image"
                                class="social__img"
                            />
                            <div class="social__qs">
                                <p class="social__qs-text">
                                    "Bola" degan so'zni birinchi bo'lib qaysi
                                    millat yaratgani no'malum bo'lsa-da, u
                                    dunyoning barcha millatlari tilida bir xil
                                    mazmunga egaligi ma'lumdir.
                                </p>
                                <h4 class="social__qs-title">
                                    0'ktam Mirzayorov
                                </h4>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img
                                src="/images/social-img.png"
                                alt="social image"
                                class="social__img"
                            />
                            <div class="social__qs">
                                <p class="social__qs-text">
                                    "Bola" degan asd so'zni birinchi bo'lib
                                    qaysi millat yaratgani no'malum bo'lsa-da, u
                                    dunyoning barcha millatlari tilida bir xil
                                    mazmunga egaligi ma'lumdir.
                                </p>
                                <h4 class="social__qs-title">
                                    0'ktam Mirzayorov
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Media -->
        <section class="container">
            <div>
                <h4 class="media__title fw-bold darkMode-title">Media</h4>
                <div class="media__card">
                    <div class="position-relative media__card-img w-100 h-100">
                        <!-- <img class="img-fluid media__card--img w-100" src="/images/media-img1.png" alt="media-img1"> -->
                        <p
                            class="media__text position-absolute fw-bold fs-4 text-white"
                        >
                            Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                        </p>
                    </div>

                    <div class="position-relative media__card-img2 w-100 h-100">
                        <img
                            class="img-fluid w-100"
                            src="/images/media-img2.png"
                            alt="media-img2"
                        />
                        <p
                            class="media__text position-absolute fw-bold fs-4 text-white"
                        >
                            Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                        </p>
                    </div>

                    <div class="position-relative media__card-img3 w-100 h-100">
                        <img
                            class="img-fluid w-100"
                            src="/images/media-img3.png"
                            alt="media-img3"
                        />
                        <p
                            class="media__text position-absolute fw-bold fs-4 text-white"
                        >
                            Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                        </p>
                    </div>
                    <div class="position-relative media__card-img4 w-100 h-100">
                        <img
                            class="img-fluid w-100"
                            src="/images/media-img4.png"
                            alt="media-img4"
                        />
                        <p
                            class="media__text position-absolute fw-bold fs-4 text-white"
                        >
                            Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <!-- Achchiqtosh -->
        <section class="achchiqtosh">
            <div class="container">
                <div class="achchiqtosh__wrapper">
                    <div class="achchiqtosh__left d-flex flex-column">
                        <h4 class="achchiqtosh__title darkMode-title">
                            Achchiqtosh
                        </h4>
                        <div
                            id="carouselExampleInterval"
                            class="carousel slide"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-inner">
                                <div
                                    class="carousel-item position-relative image-container card border-0 rounded-0 bg-dark active"
                                    data-bs-interval="1000"
                                >
                                    <img
                                        src="/images/achchiqtosh-img1.png"
                                        class="card-img img-fluid h-100 rounded-0"
                                        alt="Stony Beach"
                                    />
                                    <div class="card-img-overlay rounded-0">
                                        <h5
                                            class="achchiqtosh__slider-text position-absolute"
                                        >
                                            Mirziyoyeva oilasi bolalar
                                            kutubxonasigaasdasdasd asd asd asd
                                            ada sdf sfsdfssdf sdf sdf sdfs fds
                                            fd sdasda sda bordi.
                                        </h5>
                                    </div>
                                </div>
                                <div
                                    class="carousel-item position-relative image-container card border-0 rounded-0 bg-dark"
                                    data-bs-interval="1000"
                                >
                                    <img
                                        src="/images/achchiqtosh-img1.png"
                                        class="card-img img-fluid h-100 rounded-0"
                                        alt="Stony Beach"
                                    />
                                    <div class="card-img-overlay rounded-0">
                                        <h5
                                            class="achchiqtosh__slider-text position-absolute"
                                        >
                                            Mirziyoyeva oilasi bolalar
                                            kutubxonasigaasdasdasd asd asd asd
                                            ada sdf sfsdfssdf sdf sdf sdfs fds
                                            fd sdasda sda bordi.
                                        </h5>
                                    </div>
                                </div>
                                <div
                                    class="carousel-item position-relative image-container card border-0 rounded-0 bg-dark"
                                    data-bs-interval="1000"
                                >
                                    <img
                                        src="/images/achchiqtosh-img1.png"
                                        class="card-img img-fluid h-100 rounded-0"
                                        alt="Stony Beach"
                                    />
                                    <div class="card-img-overlay rounded-0">
                                        <h5
                                            class="achchiqtosh__slider-text position-absolute"
                                        >
                                            Mirziyoyeva oilasi bolalar
                                            kutubxonasigaasdasdasd asd asd asd
                                            ada sdf sfsdfssdf sdf sdf sdfs fds
                                            fd sdasda sda bordi.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">
                                Salomatlik
                            </h4>
                            <div class="achchiqtosh__card">
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">
                                Xususiy kilinika
                            </h4>
                            <div class="achchiqtosh__card">
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="achchiqtosh__main-inner mt-3 mt-lg-5">
                            <h4 class="news__title darkMode-title">Foydali</h4>
                            <div class="achchiqtosh__card">
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
                                <div class="darkMode achchiqtosh__card-box">
                                    <div
                                        class="position-relative achchiqtosh__img-wrapper"
                                    >
                                        <img
                                            class="img-fluid w-100"
                                            src="/images/achchiqtosh-img2.png"
                                            alt="achchiqtosh-img2"
                                        />
                                        <span
                                            class="darkMode achchiqtosh__card-sp position-absolute"
                                        >
                                            SALOMATLIK
                                        </span>
                                    </div>
                                    <div class="achchiqtosh__info darkMode">
                                        <p
                                            class="darkMode-title achchiqtosh__info-title"
                                        >
                                            Mirziyoyeva oilasi bolalar kutubga
                                            bordi.
                                        </p>
                                        <p
                                            class="darkMode-title achchiqtosh__info-text"
                                        >
                                            Prezident yordamchisi Saida
                                            Mirziyoyeva farzandlari bilan
                                            bolalar kutubxonasiga keldi.....
                                        </p>
                                        <p
                                            class="darkMode-sp achchiqtosh__info-time"
                                        >
                                            12.12.2023 12:32
                                        </p>
                                    </div>
                                </div>
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
        <section class="slide-option loopScroler bg-white darkMode mb-0">
            <div id="infinite" class="highway-slider">
                <div class="highway-barrier">
                    <ul class="highway-lane list-unstyled m-0 darkMode">
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                        <li class="highway-car">
                            <img
                                src="/images/dunyoBola-img.svg"
                                alt="dunyoBola-img"
                                class="lightIcon d-block img-fluid"
                            />
                            <img
                                src="/images/dunyoBola-img-dark1.jpg"
                                alt="dunyoBola-img"
                                class="darkIcon d-none darkMode img-fluid"
                                style="width: 204px"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    </main>
</template>
