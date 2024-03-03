<script setup>
useHead({ title: "Bolalar olami | tags" });

const route = useRoute();
const tageStore = useTageStore();

const datas = computed(() => tageStore.getTagsData);

onMounted(() => {
    tageStore.setTagsData(route.params.ids)
});
</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body">
            <section>
                <div class="container">
                    <div class="tegs">
                        <p class="tegs-text text-capitalize darkMode-title">
                            {{ 'Kalit so‘z' + ' : ' + datas?.posts.data[0].section[`title_${$i18n.locale}`] }}
                        </p>
                        <div class="tegs-cardimg">
                            <div class="tegs-cardimg__left">
                                <div class="tegs-cardimg__left-wrapper darkMode" v-for="item in datas?.posts.data"
                                    :key="item.id">
                                    <div class="position-relative">
                                        <NuxtLink :to="`/${item.section[`slug_uz`]}/${item.id}`">
                                            <img :src="item.detail_image.card ? item.detail_image.card : '/images/logo.svg'"
                                                class="img-fluid w-100" alt="card-img" />
                                            <p class="tegs-cardimg__left-wrapper-dec position-absolute darkMode">
                                                {{ item.section[`title_${$i18n.locale}`] }}
                                            </p>
                                        </NuxtLink>
                                    </div>
                                    <div class="tegs-cardimg__left-wrapper-box">
                                        <NuxtLink :to="`/${item.section[`slug_uz`]}/${item.id}`">
                                            <h4
                                                class="tegs-cardimg__left-wrapper-title darkMode-title hidden-text-2 card--title">
                                                {{ item[`title_${$i18n.locale}`] }}
                                            </h4>
                                        </NuxtLink>
                                        <p class="tegs-cardimg__left-wrapper-text darkMode-title hidden-text-3">
                                            {{
        item[
        `description_${$i18n.locale}`
        ]
    }}
                                        </p>
                                        <p class="tegs-cardimg__left-wrapper-time darkMode-sp">
                                            {{ item.publish_date }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <aside class="tegs-cardimg__aside">
                                <img src="/images/talimImages/reklama-img1.png"
                                    class="img-fluid tegs-cardimg__aside-img1" alt="reklama-img" />
                                <img src="/images/talimImages/reklama-img2.png"
                                    class="img-fluid tegs-cardimg__aside-img2" alt="reklama-img" />
                                <!-- <img src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3"  alt="reklama-img"> -->
                            </aside>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    </template>

    <template v-else>
        <Loader />
    </template>
</template>

<style scoped type="sass">
main {
    background: #f6f6f6;
    padding-bottom: 50px;
}
</style>
