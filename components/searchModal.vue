<script setup>
import { message } from 'ant-design-vue';
import { useSearchStore } from '~/stores/searchStore';
import { vRequired } from '~/utility/helpers'
import { reactive, ref } from 'vue';

const searchStore = useSearchStore();
const formRef = ref();
const data = reactive({
  searchData: null
})

const error = (msg) => {
  message.error(msg);
};
const success = (msg) => {
  message.success(msg);
};
const rules = {
  searchData: [
    {
      required: true,
      message: 'Qidiruv kalit so\'zini kiriting',
      trigger: 'change',
    },
  ],
};

const sendMessageAction = () => {

  formRef.value.validate().then(() => {
    if (data.searchData) {
      searchStore.search = data.searchData
      searchStore.submitForm()
      // return this.router.push({ path: '/search' })
    }
    else {
      console.log('Qidiruv matnini kiriting')
      error('Qidiruv matnini kiriting')
    }
  })
};

</script>

<template>
  <div class="searchModal">
    <img @click="searchStore.modal = false" src="/images/search-x.svg" alt="search x icon" class="searchModal__x" />
    <a-form @finish="sendMessageAction" ref="formRef" :model="data" :rules="rules" class="searchModal__form card__form">
      <a-form-item ref="searchData" name="searchData">
        <label for="search">Nimani qidiramiz?</label>
        <div class="searchModal__div">
          <a-input v-model:value="data.searchData" class="card__form-control lgText" placeholder="Qidirish" />
          <button @click="sendMessageAction">Search</button>
        </div>
      </a-form-item>
    </a-form>

    <!--        <form class="searchModal__form" @submit.prevent>-->
    <!--            <label for="search">Nimani qidiramiz?</label>-->
    <!--            <div class="searchModal__div">-->
    <!--                <input type="text" name="search" id="search" v-model="searchStore.search" />-->
    <!--                <button @click="searchStore.submitForm">Search</button>-->
    <!--            </div>-->
    <!--        </form>-->
  </div>
</template>
