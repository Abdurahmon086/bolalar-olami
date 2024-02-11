<script setup>
useHead({
    title: "Bolalar olami",
});
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
                                    <i class="fas fa-angle-left"></i>
                                    <span class="hero__infoTy">3</span>
                                    <i class="fas fa-angle-right"></i>
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
                                        <i
                                            class="fas fa-angle-right fa-sm mb-1"
                                        ></i>
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
                                    <i class="fas fa-angle-left"></i>
                                    <span class="hero__infoTy">3</span>
                                    <i class="fas fa-angle-right"></i>
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
                                        <i
                                            class="fas fa-angle-right fa-sm mb-1"
                                        ></i>
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
                                    <i class="fas fa-angle-left"></i>
                                    <span class="hero__infoTy">3</span>
                                    <i class="fas fa-angle-right"></i>
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
                                        <i
                                            class="fas fa-angle-right fa-sm mb-1"
                                        ></i>
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
                                    <i class="fas fa-angle-left"></i>
                                    <span class="hero__infoTy">3</span>
                                    <i class="fas fa-angle-right"></i>
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
                                        <i
                                            class="fas fa-angle-right fa-sm mb-1"
                                        ></i>
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
                <h4 class="news__title darkMode-title">Yangiliklar</h4>
                <div class="news__wrapper">
                    <div
                        class="news__left card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                    >
                        <img
                            src="/images/news1.jpg"
                            class="card-img img-fluid h-100 rounded-0"
                            alt="Stony Beach"
                        />
                        <div class="card-img-overlay rounded-0">
                            <h5 class="news__card-title">
                                Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                            </h5>
                        </div>
                    </div>
                    <div class="news__right">
                        <div
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <img
                                src="/images/news2.jpg"
                                class="card-img img-fluid h-100 rounded-0"
                                alt="Stony Beach"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    Yaponiyada tug‘ilishlar soni keskin kamaydi
                                </h5>
                            </div>
                        </div>
                        <div
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <img
                                src="/images/news2.jpg"
                                class="card-img img-fluid h-100 rounded-0"
                                alt="Stony Beach"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    Yaponiyada tug‘ilishlar soni keskin kamaydi
                                </h5>
                            </div>
                        </div>
                        <div
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <img
                                src="/images/news2.jpg"
                                class="card-img img-fluid h-100 rounded-0"
                                alt="Stony Beach"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    Yaponiyada tug‘ilishlar soni keskin kamaydi
                                </h5>
                            </div>
                        </div>
                        <div
                            class="card bg-dark text-white news__cards image-container w-100 border-0 rounded-0"
                        >
                            <img
                                src="/images/news2.jpg"
                                class="card-img img-fluid h-100 rounded-0"
                                alt="Stony Beach"
                            />
                            <div class="card-img-overlay rounded-0">
                                <h5 class="news__card-title">
                                    Yaponiyada tug‘ilishlar soni keskin kamaydi
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
                    <div class="lastNews__left">
                        <CardsMainCard />
                        <div
                            class="lastNews__left-inner card h-100 border-0 shadow-0 rounded-0 darkMode"
                        >
                            <div class="position-relative">
                                <img
                                    src="/images/lastNew1.jpg"
                                    class="card-img-top rounded-0"
                                    alt="Hollywood Sign on The Hill"
                                />
                                <span
                                    class="position-absolute lastNews__left-spLink darkMode"
                                    >Salomatlik</span
                                >
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title darkMode">
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </h5>
                                <p class="card-text darkMode">
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <span class="lastNews__left-sp darkMode-sp"
                                    >12.12.2023 12:32</span
                                >
                            </div>
                        </div>
                        <div
                            class="lastNews__left-inner card h-100 border-0 shadow-0 rounded-0 darkMode"
                        >
                            <div class="position-relative">
                                <img
                                    src="/images/lastNew2.jpg"
                                    class="card-img-top rounded-0"
                                    alt="Hollywood Sign on The Hill"
                                />
                                <span
                                    class="position-absolute lastNews__left-spLink darkMode"
                                    >Salomatlik</span
                                >
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title darkMode">
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </h5>
                                <p class="card-text darkMode">
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <span class="lastNews__left-sp darkMode-sp"
                                    >12.12.2023 12:32</span
                                >
                            </div>
                        </div>
                        <div
                            class="lastNews__left-inner card h-100 border-0 shadow-0 rounded-0 darkMode"
                        >
                            <div class="position-relative">
                                <img
                                    src="/images/lastNew3.jpg"
                                    class="card-img-top rounded-0"
                                    alt="Hollywood Sign on The Hill"
                                />
                                <span
                                    class="position-absolute lastNews__left-spLink darkMode"
                                    >Salomatlik</span
                                >
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title darkMode">
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </h5>
                                <p class="card-text darkMode">
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <span class="lastNews__left-sp darkMode-sp"
                                    >12.12.2023 12:32</span
                                >
                            </div>
                        </div>

                        <div
                            class="lastNews__left-inner card h-100 border-0 shadow-0 rounded-0 darkMode"
                        >
                            <div class="position-relative">
                                <img
                                    src="/images/lastNew4.jpg"
                                    class="card-img-top rounded-0"
                                    alt="Hollywood Sign on The Hill"
                                />
                                <span
                                    class="position-absolute lastNews__left-spLink darkMode"
                                    >Salomatlik</span
                                >
                            </div>
                            <div class="card-body d-flex flex-column">
                                <h5 class="card-title darkMode">
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </h5>
                                <p class="card-text darkMode">
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <span class="lastNews__left-sp darkMode-sp"
                                    >12.12.2023 12:32</span
                                >
                            </div>
                        </div>
                    </div>
                    <div class="lastNews__right darkMode border-0">
                        <h4 class="lastNews__right-title">
                            So'nggi yangiliklarga
                        </h4>
                        <ul class="lastNews__right-list list-unstyled darkMode">
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
                            <li class="border-bottom">
                                <p class="lastNews__right-text darkMode">
                                    Ertaga O‘zbekistonning qaysi hududlarida qor
                                    yog‘ishi ma’lum qilindi
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
                                            >80934</span
                                        >
                                    </div>
                                    <span
                                        class="lastNews__right-sp lastNews__right-spDate darkMode-sp"
                                        >12.12.2023</span
                                    >
                                </div>
                            </li>
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
                <div class="container">
                    <div
                        class="row social__qs-wrapper d-flex align-items-center justify-content-between"
                    >
                        <div
                            class="col d-none col-sm-4 p-0 d-md-block image-container h-100"
                        >
                            <img
                                src="/images/social.png"
                                alt="social image"
                                class="h-100 w-100"
                            />
                        </div>
                        <div
                            id="carouselExampleSlidesOnly"
                            class="carousel slide position-static col col-md-8 p-0 social__qs-inner"
                            data-bs-ride="carousel"
                        >
                            <div class="carousel-inner text-light">
                                <div
                                    class="carousel-item active social__qs h-100"
                                >
                                    <p class="social__qs-text">
                                        "Bola" degan so'zni birinchi bo'lib
                                        qaysi millat yaratgani no'malum
                                        bo'lsa-da, u dunyoning barcha millatlari
                                        tilida bir xil mazmunga egaligi
                                        ma'lumdir.
                                    </p>
                                    <h4 class="social__qs-title">
                                        0'ktam Mirzayorov
                                    </h4>
                                </div>
                                <div class="carousel-item social__qs h-100">
                                    <p class="social__qs-text">
                                        "Bola" degan so'zni birinchi bo'lib
                                        qaysi millat yaratgani no'malum
                                        bo'lsa-da, u dunyoning barcha millatlari
                                        tilida bir xil mazmunga egaligi
                                    </p>
                                    <h4 class="social__qs-title">
                                        0'ktam Mirzayorov
                                    </h4>
                                </div>
                                <div class="carousel-item social__qs h-100">
                                    <p class="social__qs-text">
                                        "Bola" degan so'zni birinchi bo'lib
                                        qaysi millat yaratgani no'malum
                                        bo'lsa-da, u dunyoning barcha millatlari
                                        tilida bir xil mazmunga.
                                    </p>
                                    <h4 class="social__qs-title">
                                        0'ktam Mirzayorov
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Media -->
        <section class="container" style="margin-bottom: 50px">
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
        <section class="container">
            <div class="achchiqtosh mt-5 mb-5">
                <div class="achchiqtosh__card-box10 d-flex flex-column">
                    <h4 class="achchiqtosh__title fw-bold darkMode-title">
                        Achchiqtosh
                    </h4>
                    <div class="position-relative">
                        <img
                            class="achchiqtosh-img1 img-fluid"
                            src="/images/achchiqtosh-img1.png"
                            alt="achchiqtosh-img1"
                        />
                        <p
                            class="achchiqtosh__posi-text position-absolute fw-bold"
                        >
                            Mirziyoyeva oilasi bolalar kutubxonasiga bordi.
                        </p>
                    </div>
                    <div
                        class="achchiqtosh__card d-flex mb-4 mt-3"
                        style="gap: 17px"
                    >
                        <div
                            class="darkMode achchiqtosh__card-box1 achchiqtosh__card-box bg-white"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                        <div
                            class="darkMode achchiqtosh__card-box2 achchiqtosh__card-box bg-white position-relative"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium fs-6"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                        <div
                            class="darkMode achchiqtosh__card-box3 achchiqtosh__card-box bg-white position-relative"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium fs-6"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="achchiqtosh__card1 d-flex" style="gap: 17px">
                        <div
                            class="darkMode achchiqtosh__card-box4 achchiqtosh__card-box bg-white position-relative"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium fs-6"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                        <div
                            class="darkMode achchiqtosh__card-box5 achchiqtosh__card-box bg-white position-relative"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium fs-6"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                        <div
                            class="darkMode achchiqtosh__card-box6 achchiqtosh__card-box bg-white position-relative"
                        >
                            <div class="position-relative">
                                <img
                                    class="img-fluid w-100"
                                    src="/images/achchiqtosh-img2.png"
                                    alt="achchiqtosh-img2"
                                />
                                <p
                                    class="darkMode achchiqtosh__text position-absolute fw-normal"
                                >
                                    SALOMATLIK
                                </p>
                            </div>
                            <div class="achchiqtosh__info darkMode">
                                <p
                                    class="darkMode-title achchiqtosh__info-text fw-medium fs-6"
                                >
                                    Mirziyoyeva oilasi bolalar kutubga bordi.
                                </p>
                                <p
                                    class="darkMode-title achchiqtosh__info-text1 fw-normal"
                                >
                                    Prezident yordamchisi Saida Mirziyoyeva
                                    farzandlari bilan bolalar kutubxonasiga
                                    keldi.....
                                </p>
                                <p
                                    class="darkMode-sp achchiqtosh__info-time fw-normal"
                                >
                                    12.12.2023 12:32
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <aside>
                    <div class="d-flex flex-column row-gap-3">
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
                    </div>
                </aside>
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
