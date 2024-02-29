<script setup>
useHead({ title: "Bolalar olami | posts" });
const mainStore = useMainStore()
</script>
<template>
    <main class="bg-light darkMode-body pb-5">
        <section>
            <div class="container">
                <h3 class="mediabox-title darkMode-title">470 ИЗОБРАЖЕНИЙ</h3>
                <div class="mediabox">
                    <div class="mediabox-left">
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                        <img @click="mainStore.imgModal = !mainStore.imgModal" src="/images/mediacardImages/img.png"
                            class="img-fluid w-100" alt="mediabox-img" />
                    </div>
                    <div class="mediabox-right darkMode">
                        <h2 class="mediabox-right--title darkMode-title">
                            Lorem Ipsum
                        </h2>
                        <p class="mediabox-right--text darkMode-title">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="slide-option loopScroler mb-0 bg-white darkMode">
            <LoopScroler />
        </section>
        <template v-if="mainStore.imgModal">
            <Imgmodal />
        </template>
    </main>
</template>
