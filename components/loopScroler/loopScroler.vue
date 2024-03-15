<script setup>
const mainStore = useMainStore();
</script>

<template>
    <section class="loopScroler bg-white darkMode mt-5 mb-0 d-none d-md-flex w-100">
        <Swiper :modules="[SwiperAutoplay]" :slides-per-group="6" :slides-per-view="6" :autoplay="{ delay: 3000 }" class="loopScroler__inner">
            <SwiperSlide v-for="slide in 9" :key="slide" class="loopScroler__wrapper list-unstyled m-0 darkMode">
                <li class="loopScroler__wrapper-item d-flex align-items-center">
                    <template v-if="!mainStore.darkTheme">
                        <NuxtImg src="/images/dunyoBola-img.svg" alt="dunyoBola-img" class="d-block img-fluid h-100 w-100" />
                        <!-- <NuxtImg  src="/images/image-removebg.png" alt="dunyoBola-img" class=" d-block img-fluid" /> -->
                    </template>

                    <template v-else>
                        <NuxtImg src="/images/dunyoBola-img-dark1.jpg" alt="dunyoBola-img" class="img-fluid h-100 w-100" />
                        <!-- <NuxtImg  src="/images/image-removebg.png" alt="dunyoBola-img" class=" d-block img-fluid" /> -->
                    </template>
                </li>
            </SwiperSlide>
        </Swiper>
    </section>
</template>
