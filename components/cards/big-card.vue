<script setup>
const localPath = useLocalePath();

const props = defineProps({
    item: {
        type: Object,
        required: true,
    },
});
const { item } = props;
</script>

<template>
    <div class="lastNews__left-inner text-decoration-none card h-100 border-0 shadow-0 rounded-0 darkMode">
        <div class="position-relative lastNews__left-img">
            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                <img :src="(item.detail_image?.url ? item.detail_image?.url : '/images/logo.svg')"
                    class="card-img-top rounded-0" :alt="item[`title_${$i18n.locale}`]" />
                <span class="position-absolute lastNews__left-spLink darkMode">
                    {{ item.section[`title_${$i18n.locale}`] }}</span>
            </NuxtLink>
        </div>
        <div class="card-body d-flex flex-column">
            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                <h5 class="card-title darkMode hidden-text-2">
                    {{ item[`title_${$i18n.locale}`] }}
                </h5>
            </NuxtLink>
            <p class="card-text darkMode hidden-text-2">
                {{ item[`description_${$i18n.locale}`] }}
            </p>
            <span class="lastNews__left-sp darkMode-sp">{{ item.publish_date }}</span>
        </div>
    </div>
</template>