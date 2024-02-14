<script setup>
useHead({ title: "Bolalar olami | posts" });
const route = useRoute();
const id = route.params.id;
const url = "http://new.bolalarolami.uz/api/v2";

const { data } = await useFetch(`${url}/get-post/${id}`);
const posts = data.value.data.post;
const mostReadPosts = data.value.data.mostReadPosts;

</script>

<template>
    <div class="show darkMode">
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
                            {{ posts.title_uz }}
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
                        {{ posts.title_uz }}
                    </h2>
                    <div class="single__info">
                        <span class="darkMode pt-1">{{
                            posts.publish_date
                        }}</span>
                        <div class="single__info-inner">
                            <img src="/images/eye_main.svg" alt="eye icon" />
                            <span class="darkMode">{{
                                posts.views_count
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
                        :src="posts.detail_image.card"
                        :alt="posts.title_uz"
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
                                <div class="single__text-wrapper">
                                    {{ posts.content_uz }}
                                    <!-- {{ posts}} -->
                                </div>
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

                            <p class="single__text">
                                22 dekabr kuni tanlov va fan olimpiadalarida
                                g‘alaba qozongan maktab o‘quvchilari Prezident
                                Administratsiyasiga bordi. Bu haqda O‘zbekiston
                                Respublikasi Prezidenti Shavkat Mirziyoyevning
                                to‘ng‘ich qizi – Prezident yordamchisi Saida
                                Mirziyoyeva o‘zining ijtimoiy tarmoqdagi
                                sahifasida ma’lum qildi.
                            </p>
                            <p class="single__text">
                                Men ularga mamnuniyat bilan Administratsiya ish
                                faoliyati haqida tushuncha berib, ekskursiya
                                uyushtirdim. Bolalar aqlli va qiziquvchan.
                                Ko‘ngli ochiq va to‘g‘riso‘z. Ular bizning
                                kelajagimiz, deydi Mirziyoyeva.
                            </p>
                            <p class="single__text">
                                Shuningdek, Prezident yordamchisi ta’lim
                                islohoti doirasida “Xorijiy tillarni o‘qitish
                                bo‘yicha eng yaxshi maktab” tanlovi
                                o‘tkazilganini, unda 6885 ta maktab va
                                7–9-sinflarning 35 mingga yaqin o‘quvchilari
                                ishtirok etganini qayd etgan.
                            </p>
                            <p class="single__text">
                                Uning aytishicha, g‘olib jamoalar pul
                                mukofotlariga ega bo‘lgan va 70 nafar finalchi
                                14 nafar o‘qituvchi hamrohligida Buyuk
                                Britaniyada bo‘lib, u yerda bir hafta mobaynida
                                nufuzli ingliz maktablarining o‘quvchilari
                                sifatida dars va mashg‘ulotlarda qatnashgan. .
                                Uning aytishicha, g‘olib jamoalar pul
                                mukofotlariga ega bo‘lgan va 70 nafar finalchi
                                14 nafar o‘qituvchi hamrohligida Buyuk
                                Britaniyada
                            </p>
                            <p class="single__text">
                                Uning aytishicha, g‘olib jamoalar pul
                                mukofotlariga ega bo‘lgan va 70 nafar finalchi
                                14 nafar o‘qituvchi hamrohligida Buyuk
                                Britaniyada bo‘lib, u yerda bir hafta mobaynida
                                nufuzli ingliz maktablarining o‘quvchilari
                                sifatida dars va mashg‘ulotlarda qatnashgan.
                                bo‘lib, u yerda bir hafta mobaynida nufuzli
                                ingliz maktablarining o‘quvchilari sifatida dars
                                va mashg‘ulotlarda qatnashgan.
                            </p>

                            <div
                                class="single__tags d-none d-md-block darkMode-body"
                            >
                                <h4 class="single__tags-title">Teglar</h4>
                                <ul class="list-unstyled">
                                    <li class="darkMode-btn">Maktablar</li>
                                    <li class="darkMode-btn">Bolalar</li>
                                    <li class="darkMode-btn">O'quvchi</li>
                                    <li class="darkMode-btn">Maktab</li>
                                    <li class="darkMode-btn">Sahovat</li>
                                    <li class="darkMode-btn">O'zbekiston</li>
                                </ul>
                            </div>
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
                            <div class="single__message none-container">
                                <div class="single__message-top darkMode-body">
                                    <div
                                        class="single__message-2btn d-flex align-items-center justify-content-between"
                                    >
                                        <img
                                            src="/images/person.png"
                                            alt="person image"
                                        />
                                        <button
                                            class="d-block d-sm-none btn btn-light border-0 shadow-0 darkMode-btn"
                                            data-mdb-ripple-init
                                            data-mdb-ripple-color="dark"
                                        >
                                            Yuborish
                                        </button>
                                    </div>
                                    <textarea
                                        name=""
                                        id=""
                                        cols="30"
                                        rows="10"
                                        placeholder="Fikr qo‘shish…"
                                        class="darkMode-btn"
                                    ></textarea>
                                    <button
                                        class="d-none d-sm-block btn btn-light border-0 shadow-0 darkMode-btn"
                                        data-mdb-ripple-init
                                        data-mdb-ripple-color="dark"
                                    >
                                        Yuborish
                                    </button>
                                </div>
                                <ul class="single__message-list list-unstyled">
                                    <li
                                        class="single__message-item item darkMode"
                                    >
                                        <div class="item__inner">
                                            <div class="item__left">
                                                <img
                                                    src="/images/person.png"
                                                    alt="person image"
                                                />
                                                <h4 class="darkMode">Bahrom</h4>
                                            </div>
                                            <!-- <div class="item__right">
                                            <img src="" alt="">
                                            <img src="" alt="">
                                        </div> -->
                                        </div>
                                        <p class="item__text">
                                            @maxblagun Agar siz hali ham yangi
                                            bo'lsangiz, React-ni ko'rib
                                            chiqishdan oldin HTML, CSS va JS
                                            asoslariga e'tibor qaratishni
                                            maslahat beraman. Oldinga sakrash
                                            juda jozibali, lekin avvalo
                                            mustahkam poydevor qo'ying.
                                        </p>
                                    </li>
                                    <li
                                        class="single__message-item item darkMode"
                                    >
                                        <div class="item__inner">
                                            <div class="item__left">
                                                <img
                                                    src="/images/person.png"
                                                    alt="person image"
                                                />
                                                <h4 class="darkMode">Bahrom</h4>
                                            </div>
                                            <!-- <div class="item__right">
                                            <img src="" alt="">
                                            <img src="" alt="">
                                        </div> -->
                                        </div>
                                        <p class="item__text">
                                            @maxblagun Agar siz hali ham yangi
                                            bo'lsangiz, React-ni ko'rib
                                            chiqishdan oldin HTML, CSS va JS
                                            asoslariga e'tibor qaratishni
                                            maslahat beraman. Oldinga sakrash
                                            juda jozibali, lekin avvalo
                                            mustahkam poydevor qo'ying.
                                        </p>
                                    </li>
                                    <li
                                        class="single__message-item item darkMode"
                                    >
                                        <div class="item__inner">
                                            <div class="item__left">
                                                <img
                                                    src="/images/person.png"
                                                    alt=" person image"
                                                />
                                                <h4 class="darkMode">Bahrom</h4>
                                            </div>
                                            <div class="item__right">
                                                <img
                                                    src="/images/shape.svg"
                                                    alt="delete icon"
                                                />
                                                <img
                                                    src="/images/rename.svg"
                                                    alt="rename icon"
                                                />
                                            </div>
                                        </div>
                                        <p class="item__text">
                                            @maxblagun Agar siz hali ham yangi
                                            bo'lsangiz, React-ni ko'rib
                                            chiqishdan oldin HTML, CSS va JS
                                            asoslariga e'tibor qaratishni
                                            maslahat beraman. Oldinga sakrash
                                            juda jozibali, lekin avvalo
                                            mustahkam poydevor qo'ying.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <aside>
                    <section class="aside">
                        <h4 class="aside__title">Ko'p o'qilganlar</h4>
                        <div class="aside__wrapper">
                            <NuxtLink
                                v-for="item in mostReadPosts"
                                :to="`/show/category/${item.id}`"
                                :key="item.id"
                                class="aside__left-inner card h-100 shadow-0 border-0 rounded-0 bg-light text-decoration-none darkMode"
                            >
                                <div class="position-relative">
                                    <img
                                        :src="item.detail_image.card"
                                        :alt="item.title_uz"
                                        class="card-img-top rounded-0"
                                    />
                                    <span
                                        class="position-absolute aside__left-spLink darkMode"
                                        >Salomatlik</span
                                    >
                                </div>
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title darkMode">
                                        {{ item.title_uz }}
                                    </h5>
                                    <p class="card-text darkMode">
                                        {{ item.description_uz }}
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

            <section
                class="slide-option loopScroler bg-white darkMode d-none d-md-flex"
            >
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
        </div>
    </div>
</template>

<style scoped>
.show {
    background-color: #fff;
}
</style>
