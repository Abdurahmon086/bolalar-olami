import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2'


export const useSearchStore = defineStore('searchStore', () => {
    const router = useRouter();

    const rout = useRoute()
    const { locale } = useI18n()

    // state
    const datas = ref([])
    const modal = ref(false)
    const showAll = ref(false);
    const search = ref("");
    const loader = ref(false)

    // getter

    // action
    const getSearchData = async (value) => {
        try {
            loader.value = true
            const res = await fetch(`${url}/get-search?search=${value.value == '' ? rout.query.q : value.value}`);
            const data = await res.json();
            datas.value = data.data.posts
            loader.value = false
        } catch (err) {
            console.log(err);
        }
    };

    const submitForm = () => {
        if (!search.value) return;
        const pathPrefix = locale.value == 'uz' ? '' : '/' + locale.value;
        router.push({ path: `${pathPrefix}/search/`, query: { q: search.value } });
        modal.value = false;
        getSearchData(search);
        search.value = '';
    };

    if (modal && search.value.length > 1) {
        getSearchData(search)
    }

    return {
        submitForm,
        search,
        showAll,
        modal,
        getSearchData,
        datas,
        loader
    };
})