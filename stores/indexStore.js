import axios from 'axios';
import { defineStore } from 'pinia'
const url = 'http://admin.bolalarolami.uz/api/v2'


export const useIndexStore = defineStore('indexStore', () => {

  // action
  async function getIndexData() {
    try {
      const response = await axios.get(`${url}/home/get-news-home`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }

  return {
    getIndexData
  };
})