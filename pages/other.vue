<template>
    <div class="lol">
        <Swiper
            :modules="[
                SwiperAutoplay,
                SwiperEffectCreative,
                SwiperKeyboard,
                SwiperPagination,
                SwiperFreeMode,
            ]"
            :pagination="{
                clickable: true,
            }"
            :slides-per-view="1"
            :loop="true"
            :effect="'creative'"
            :autoplay="{
                delay: 3000,
                disableOnInteraction: true,
            }"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
        >
            <SwiperSlide v-for="slide in 10" :key="slide">
                <div>{{ slide }}</div>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<style scoped>
.lol {
    margin: 200px 0;
    background: #000;
}

div {
    display: block;
    background: #e0cfcf;
    widows: 100px;
    height: 100px;
}
</style>
