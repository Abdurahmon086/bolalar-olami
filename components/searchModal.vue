<script setup>
const searchStore = useSearchStore();
</script>

<template>
    <div class="searchModal">
        <img @click="searchStore.modal = false" src="/images/search-x.svg" alt="search x icon" class="searchModal__x" />
        <form class="searchModal__form" @submit.prevent>
            <label for="search">Nimani qidiramiz?</label>
            <div class="searchModal__div">
                <input type="text" name="search" id="search" v-model="searchStore.search" />
                <button @click="searchStore.submitForm">Search</button>
            </div>
        </form>
    </div>
</template>
