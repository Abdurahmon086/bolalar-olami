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
    <div class="darkMode achchiqtosh__card-box text-decoration-none">
        <div class="position-relative achchiqtosh__img-wrapper">
            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                <img class="img-fluid w-100"
                    :src="(item.detail_image?.url ? item.detail_image?.url : '/images/logo.svg')"
                    :alt="item[`title_${$i18n.locale}`]" />
                <span class="darkMode achchiqtosh__card-sp position-absolute">
                    {{ item.section[`title_${$i18n.locale}`] }}
                </span>
            </NuxtLink>
        </div>
        <div class="achchiqtosh__info darkMode">
            <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)">
                <p class="darkMode-title achchiqtosh__info-title hidden-text-2">
                    {{ item[`title_${$i18n.locale}`] }}
                </p>
            </NuxtLink>
            <p class="darkMode-title achchiqtosh__info-text hidden-text-3">
                {{ item[`description_${$i18n.locale}`] }}
            </p>
            <p class="darkMode-sp achchiqtosh__info-time">
                {{ item.publish_date }}
            </p>
        </div>
    </div>
</template>