const url = 'http://new.bolalarolami.uz/api/v2'
import { defineStore } from 'pinia'
import { useSingleStore } from './singleStore'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();
    const singleStore = useSingleStore()
    // state
    const state = reactive({
        datas: {},
    })
    const modal = ref(false)
    const showAll = ref(false);
    const text = ref("");

    // getter

    // action

    const submitForm = () => {
        router.push({ path: "/search/", query: { q: text.value } });
        modal.value = true
        getSearchData()
    };

    const getSearchData = async () => {
        try {
            singleStore.loading = true
            const res = await fetch(`${url}/get-search?search=${text.value}`);
            const data = await res.json();
            console.log(data.data.posts);
            state.datas.value = data.data
            // text.value = ''
            singleStore.loading = false
            return data.data
        } catch (err) {
            console.log(err);
        }
    };



    return {
        submitForm,
        text,
        showAll,
        modal,
        getSearchData,
        datas: state.datas
    };
})