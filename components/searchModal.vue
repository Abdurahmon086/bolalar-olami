<script setup>
const searchStore = useSearchStore();
</script>

<template>
    <div class="searchModal">
        <img
            @click="searchStore.modal = true"
            src="/images/search-x.svg"
            alt="search x icon"
            class="searchModal__x"
        />
        <form
            @submit.prevent="searchStore.submitForm"
            class="searchModal__form"
        >
            <label for="search">Nimani qidiramiz?</label>
            <input
                type="text"
                name="search"
                id="search"
                v-model="searchStore.text"
            />
        </form>
    </div>
</template>
