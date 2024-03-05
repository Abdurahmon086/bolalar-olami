<script setup>
const mainStore = useMainStore()
</script>

<template>
    <section class="loopScroler bg-white darkMode mt-5 mb-0 d-none d-md-flex w-100">
        <Swiper :modules="[SwiperAutoplay]" :slides-per-view="5" :autoplay="{ delay: 3000 }" class="loopScroler__inner">
            <SwiperSlide v-for="slide in 100" :key="slide" class="loopScroler__wrapper list-unstyled m-0 darkMode">
                <li class="loopScroler__wrapper-item d-flex">
                    <template v-if="!mainStore.darkTheme">
                        <img src="/images/dunyoBola-img.svg" alt="dunyoBola-img" class=" d-block img-fluid" />
                    </template>

                    <template v-else>
                        <img src="/images/dunyoBola-img-dark1.jpg" alt="dunyoBola-img" class=" img-fluid" />
                    </template>
                </li>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
