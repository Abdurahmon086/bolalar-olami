<script setup>
useSeoMeta({ title: "Bolalar olami | foto galery" });
defineOgImageComponent("NuxtSeo", {
    // icon: true/,
    siteName: "Bolalar olami",
    siteLogo: "/images/logo.svg",
    theme: "#F7931E",
    colorMode: "light",
});

const localPath = useLocalePath();
</script>

<template>
    <main class="darkMode-body bg-light pb-5">
        <section class="darkMode-body">
            <div class="mediaGaller">
                <div class="container">
                    <h3 class="mediaGaller-title">
                        {{ $t("imagesFrom") }}
                    </h3>
                    <p class="mediaGaller-text">{{ $t("media") }}</p>
                    <div type="search" class="mediaGaller-seaBtn w-75">
                        <a href="#"><NuxtImg src="/images/mediagalleriyaImages/search-icon.svg" class="img-fluid" alt="searchiicon" /> </a>
                        <input type="text" placeholder="Искать лицензионный контент..." class="mediaGaller-seaBtn-inp w-75" />
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div class="container">
                <h3 class="mediacard-title darkMode-title">470 {{ $t("images") }}</h3>
                <div class="mediacard">
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img1.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img2.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img3.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img4.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img5.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img6.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img7.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img8.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img9.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img10.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img11.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
                        <p class="mediacard-box--text darkMode-title">493 изображения</p>
                    </NuxtLink>
                    <NuxtLink :to="localPath(`/foto/foto-categories/foto_id`)" class="mediacard-box darkMode">
                        <NuxtImg src="/images/mediacardImages/img12.png" class="img-fluid w-100" alt="mediacard-img" />
                        <h4 class="mediacard-box--title darkMode-title">Новый Год</h4>
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
