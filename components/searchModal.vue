<script setup>
const searchStore = useSearchStore();
</script>

<template>
    <div class="searchModal">
        <img
            @click="searchStore.modal = false"
            src="/images/search-x.svg"
            alt="search x icon"
            class="searchModal__x"
        />
        <form
            @submit.prevent="searchStore.submitForm"
            class="searchModal__form"
        >
            <label for="search">Nimani qidiramiz?</label>
           <div class="searchModal__div">
            <input
                type="text"
                name="search"
                id="search"
                v-model="searchStore.search" 
            />
            <button type="sumbit" class="">Search</button>

           </div>
        </form>
    </div>
</template>
