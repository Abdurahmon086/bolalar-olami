<script setup>
useHead({ title: "Bolalar olami | posts" });
</script>

<template>
    <main class="darkMode-body bg-light pb-5">
        <section class="darkMode-body">
            <div class="mediaGaller">
                <div class="container">
                    <h3 class="mediaGaller-title">
                        Изображения и видео со всего мира
                    </h3>
                    <p class="mediaGaller-text">Media</p>
                    <div type="search" class="mediaGaller-seaBtn w-75">
                        <a href="#"><img src="/images/mediagalleriyaImages/search-icon.svg" class="img-fluid"
                                alt="searchiicon" />
                        </a>
                        <input type="text" placeholder="Искать лицензионный контент..."
                            class="mediaGaller-seaBtn-inp w-75" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h3 class="mediacard-title darkMode-title">470 ИЗОБРАЖЕНИЙ</h3>
                <div class="mediacard">
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img1.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img2.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img3.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img4.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img5.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img6.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img7.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img8.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img9.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img10.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img11.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="`/foto/foto-categories/foto_id`" class="mediacard-box darkMode">
                        <img src="/images/mediacardImages/img12.png" class="img-fluid w-100" alt="mediacard-img">
                        <h4 class="mediacard-box--title darkMode-title"> Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                </div>
            </div>
        </section>
        <section class="slide-option loopScroler mb-0 bg-white darkMode">
            <LoopScroler />
        </section>
    </main>
</template>