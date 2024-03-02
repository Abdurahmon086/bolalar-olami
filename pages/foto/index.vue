<script setup>
useHead({ title: "Bolalar olami | foto" });
const localPath = useLocalePath()
</script>

<template>
    <main class="darkMode-body pb-5 bg-light">
        <section class="darkMode-body">
            <div class="mediaGaller">
                <div class="container">
                    <h3 class="mediaGaller-title">
                        Изображения и видео со всего мира
                    </h3>
                    <p class="mediaGaller-text">Media</p>
                    <div type="search" class="mediaGaller-seaBtn w-75">
                        <a href="#">
                            <img src="/images/mediagalleriyaImages/search-icon.svg" class="img-fluid"
                                alt="searchiicon" />
                        </a>
                        <input type="text" placeholder="Искать лицензионный контент..."
                            class="mediaGaller-seaBtn-inp w-75" />
                    </div>
                </div>
            </div>
        </section>
        <section class="darkMode-body">
            <div class="container">
                <div class="mediaGaller-wrapper">
                    <div class="mediaGaller-wrapper--box" style="margin-bottom: 100px">
                        <p class="mediaGaller-wrapper-text darkMode-title">
                            Избранные фотографии
                        </p>
                        <p class="mediaGaller-wrapper-text1 darkMode-title">
                            Оцените тематические коллекции, тщательно собранные
                            нашими фоторедакторами
                        </p>
                    </div>
                    <div class="mediaGaller-wrapper--card">
                        <div class="mediaGaller-wrapper--card-box">
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-ategories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.2.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.3.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                        </div>
                        <div class="mediaGaller-wrapper--card-box">
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.4.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.7.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list mediaGaller-wrapper--card-item2 darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.8.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list1 darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item1 darkMode-card">
                                    <p class="mediaGaller-wrapper--card-item1--text">
                                        Больше подборок
                                    </p>
                                    <a href="#">
                                        <img src="/images/mediagalleriyaImages/right-icon.svg"
                                            class="img-fuild mediaGaller-wrapper--card-list1-link" style="width: 24px"
                                            alt="right-icon" /></a>
                                </NuxtLink>
                            </ul>
                        </div>
                        <div class="mediaGaller-wrapper--card-box">
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.5.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.6.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
                            <ul class="mediaGaller-wrapper--card-list darkMode">
                                <NuxtLink :to="localPath(`/foto/foto-categories`)"
                                    class="mediaGaller-wrapper--card-item">
                                    <img src="/images/mediagalleriyaImages/img1.4.png" class="img-fuild w-100"
                                        alt="galleriya-img" />
                                    <p class="mediaGaller-wrapper--card-text darkMode-title">
                                        Новый Год
                                    </p>
                                    <p class="mediaGaller-wrapper--card-span darkMode-sp">
                                        493 изображения
                                    </p>
                                </NuxtLink>
                            </ul>
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
