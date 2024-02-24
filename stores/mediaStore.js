import { defineStore } from 'pinia'
const url = 'http://new.bolalarolami.uz/api/v2/get-videos '
// export const usemediaStore = defineStore('mediaStore', () => {
// function toggleClass() {
//     var divs = document.getElementsByClassName("myDiv");
//     for (var i = 0; i < divs.length; i++) {
//         var div = divs[i];
//         if (div.classList.contains("newClass")) {
//             div.classList.remove("newClass");
//             div.classList.add("classOld");
//         } else {
//             div.classList.remove("classOld");
//             div.classList.add("newClass");
//         }
//     }
// }
//     return{
// toggleClass
//     };
// })
export const useMediaStore = defineStore('counter', () => {
    const isBool = ref(false);

    function $boolFunc() {
        isBool.value = !isBool.value;
        console.log(isBool.value);
        
    }

    return { isBool, $boolFunc }
})