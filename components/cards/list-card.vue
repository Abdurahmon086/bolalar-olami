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
    <NuxtLink :to="localPath(`/${item.section.slug_uz}/${item.id}`)" class="border-bottom text-decoration-none">
        <p class="lastNews__right-text darkMode">
            {{ item[`title_${$i18n.locale}`] }}
        </p>
        <div class="lastNews__right-view d-flex justify-content-between align-items-center darkMode-sp">
            <!-- <div class="d-flex align-items-center" style="gap: 7px">
                      <img src="/images/eye.svg" alt="eye icon" />
                      <span class="lastNews__right-sp darkMode-sp">{{ item.views_count }}</span>
                    </div> -->
            <span class="lastNews__right-sp lastNews__right-spDate darkMode-sp">{{ item.publish_date }}</span>
        </div>
    </NuxtLink>
</template>