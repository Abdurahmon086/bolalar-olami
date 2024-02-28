<script setup>
useHead({ title: "Bolalar olami | search" });
import Loader from '~/components/loader.vue';
import { onMounted } from 'vue';

const searchStore = useSearchStore();
const route = useRoute();

const localPath = useLocalePath();

const datas = ref(null)
datas.value = searchStore.datas

onMounted(() => {
    searchStore.getSearchData(route.query.q).then(data => {
        datas.value = data.data.posts;
    }).catch(error => {
        console.error('Ma\'lumotlarni yuklashda xato yuz berdi:', error);
    });
});

</script>

<template>
    <template v-if="datas">
        <main class="darkMode-body">
            <section>
                <div class="container">
                    <div class="tegs">
                        <p class="tegs-text darkMode-title">
                            {{ 'Kalit so‘z' + ' : ' + route.query.q }}
                        </p>
                        <div class="tegs-cardimg">
                            <div class="tegs-cardimg__left" v-if="datas">
                                <NuxtLink class="tegs-cardimg__left-wrapper darkMode"
                                    v-for="item in (searchStore?.datas.data ? searchStore?.datas.data : datas.data)"
                                    :key="item.id" :to="localPath(`/categories/${item.id}`)">
                                    <div class="position-relative">
                                        <img :src="item.detail_image?.card" class="img-fluid w-100" alt="card-img" />
                                        <p class="tegs-cardimg__left-wrapper-dec position-absolute darkMode">
                                            Maktab
                                        </p>
                                    </div>
                                    <div class="tegs-cardimg__left-wrapper-box">
                                        <h4 class="tegs-cardimg__left-wrapper-title darkMode-title hidden-text-2">
                                            {{ item[`title_${$i18n.locale}`] }}
                                        </h4>
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
                                </NuxtLink>
                            </div>
                            <aside class="tegs-cardimg__aside">
                                <img src="/images/talimImages/reklama-img1.png" class="img-fluid tegs-cardimg__aside-img1"
                                    alt="reklama-img" />
                                <img src="/images/talimImages/reklama-img2.png" class="img-fluid tegs-cardimg__aside-img2"
                                    alt="reklama-img" />
                                <img src="/images/talimImages/reklama-img3.png" class="img-fluid talim-cardimg__aside-img3"
                                    alt="reklama-img" />
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

<style scoped>
main {
    background: #f6f6f6;
    padding-bottom: 50px;
}
</style>
