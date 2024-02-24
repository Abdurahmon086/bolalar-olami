const url = 'http://new.bolalarolami.uz/api/v2'
import { defineStore } from 'pinia'
import { useSingleStore } from './singleStore'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const singleStore = useSingleStore()

    // state
    const datas = ref([])
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");

    // getter

    // action
    async function searchShows(search) {
        const grabData = await fetch(URL + search.value);
        const json = await grabData.json();
        shows.value = json.data.posts;
        // console.log(json.data.posts);
    }


    const getSearchData = async (value) => {
        try {
            singleStore.loading = true
            const res = await fetch(`${url}/get-search?search=${value.value}`);
            const data = await res.json();
            datas.value = data.data.posts
            singleStore.loading = false
        } catch (err) {
            console.log(err);
        }
    };

    const submitForm = () => {
        if (!search.value) return;
        router.push({ path: "/search/", query: { q: search.value } });
        modal.value = true
        getSearchData(search)
        search.value = ''
    };

    return {
        submitForm,
        search,
        showAll,
        modal,
        getSearchData,
        datas
    };
})