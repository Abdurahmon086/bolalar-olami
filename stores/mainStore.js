import { defineStore } from 'pinia'

const url = 'http://new.bolalarolami.uz/api/v2'


export const useMainStore = defineStore('mainStore', () => {
    const { locale, setLocale } = useI18n();
    // state
    const navData = ref([]);
    const activeText = ref(null);
    const auth = ref(false);
    const auths = ref(false);
    // getter

    const language = computed({
        get: () => locale.value,
        set: (value) => {
            setLocale(value);
        },
    });

    const navbarM = computed(() => {
        const map = {};
        const newArr = [];

        navData.value.forEach((element) => {
            map[element.id] = element;
            element.child = [];
        });

        navData.value.forEach((element) => {
            if (element.parent_id !== null) {
                map[element.parent_id].child.push(element);
            } else {
                newArr.push(element);
            }
        });

        return newArr;
    })

    // action
    const getNabarData = async () => {
        try {
            const res = await fetch(`${url}/resources/get-sections`);
            const data = await res.json();
            navData.value = data.data
        } catch (err) {
            console.log(err);
        }
    };

    const changeLocale = (lang, text) => {
        setLocale(lang);
        activeText.value = text;
    };

    const modalTogle = (value) => {
        if (value) {
            auth.value = false
            auths.value = false
        }
    }

    return {
        getNabarData,
        modalTogle,
        auths,
        changeLocale,
        language,
        navbarM,
        navData,
        auth,
        activeText
    };
})