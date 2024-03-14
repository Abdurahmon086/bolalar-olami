<script setup>
useSeoMeta({ title: "Bolalar olami | bookshelter" });
defineOgImageComponent("NuxtSeo", {
    // icon: true/,
    siteName: "Bolalar olami",
    siteLogo: "/images/logo.svg",
    theme: "#F7931E",
    colorMode: "light",
});

</script>
<template>
    <main class="darkMode-body bg-light pb-3">
        <section id="section" class="darkMode-body">
            <div class="container">
                <div class="books-card darkMode-body">
                    <p class="books-card__text darkMode-title">Asosiy</p>
                    <p class="books-card__text darkMode-title">Yangiliklar</p>
                    <p class="books-card__text darkMode-title">Maktab o'quvchilari ilk bor Prezident Administratsiyasiga bordi</p>
                </div>
            </div>
        </section>
        <section>
            <div class="container books-wrapper darkMode-body">
                <div class="books-wrapper__part darkMode">
                    <h3 class="books-wrapper__part-title darkMode-title">
                        {{ $t("sections") }}
                    </h3>
                    <ul class="books-wrapper__part-list">
                        <li class="books-wrapper__part-item darkMode-title">Bolalar adabiyoti</li>
                        <li class="books-wrapper__part-item darkMode-title">Badiiy adabiyotlar</li>
                        <li class="books-wrapper__part-item darkMode-title">Bolalar adabiyoti</li>
                        <li class="books-wrapper__part-item darkMode-title">IТ sohasiga oid kitoblar</li>
                        <li class="books-wrapper__part-item darkMode-title">Diniy adabiyotlar</li>
                        <li class="books-wrapper__part-item darkMode-title">IТ sohasiga oid kitoblar</li>
                        <li class="books-wrapper__part-item darkMode-title">Bolalar adabiyoti</li>
                    </ul>
                </div>
                <div class="books-wrapper__total darkMode-body">
                    <div class="books-wrapper__total-box">
                        <h3 class="books-wrapper__total-box--title darkMode-title">
                            {{ $t("books") }}
                        </h3>
                        <input class="books-wrapper__total-box--insearch darkMode-btn" type="search" placeholder="Qidirish" />
                    </div>
                    <div class="books-wrapper__total-card">
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img1.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" class="img-fluid" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                        <div class="books-wrapper__total-card--box darkMode">
                            <NuxtImg src="/images/booksImages/books-img.png" class="img-fluid books-wrapper__total-card--box-img w-100" alt="books-img" />
                            <p class="books-wrapper__total-card--box-natext darkMode-title">
                                Barbara Oukli: Raqamlar <br />
                                uchun yaralgan
                            </p>
                            <p class="books-wrapper__total-card--box-vatext darkMode-title">Erkin Vohidovning</p>
                            <button class="books-wrapper__total-card--box-btn w-100">
                                Yuklab olish
                                <NuxtImg src="/images/booksImages/download.svg" alt="dowlond-icon" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide-option loopScroler mb-0 bg-white darkMode">
            <LoopScroler />
        </section>
    </main>
</template>
