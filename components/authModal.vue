<script setup>
const mainStore = useMainStore();
const authPage = ref(true);
const regions = [
    {
        id: 8,
        name: "Qoraqalpog‘iston Respublikasi",
    },
    {
        id: 9,
        name: "Buxoro viloyati",
    },
    {
        id: 10,
        name: "Samarqand viloyati",
    },
    {
        id: 11,
        name: "Navoiy viloyati",
    },
    {
        id: 12,
        name: "Andijon viloyati",
    },
    {
        id: 13,
        name: "Farg‘ona viloyati",
    },
    {
        id: 14,
        name: "Surxondaryo viloyati",
    },
    {
        id: 15,
        name: "Sirdaryo viloyati",
    },
    {
        id: 16,
        name: "Xorazm viloyati",
    },
    {
        id: 17,
        name: "Toshkent viloyati",
    },
    {
        id: 18,
        name: "Qashqadaryo viloyati",
    },
    {
        id: 19,
        name: "Jizzax viloyati",
    },
    {
        id: 21,
        name: "Namangan viloyati",
    },
    {
        id: 22,
        name: "Toshkent shaxri",
    },
];
</script>

<template>
    <div class="auth">
        <div class="auth__inner" @click="mainStore.modalTogle(true)"></div>

        <div class="auth__s">
            <div class="auth__wrapper darkMode2">
                <template v-if="authPage == true">
                    <h4 class="auth__title darkMode">
                        {{ $t("entir") }}
                    </h4>
                    <p class="auth__text darkMode">Clarity sizga chinakam professional veb-sayt yaratish uchun kerakli bloklar va komponentlarni beradi.</p>
                    <form class="needs-validation" novalidate>
                        <div class="">
                            <label for="validationCustom01" class="form-label d-none">Telefon raqam</label>
                            <input type="text" class="form-control darkMode" placeholder="Telefon raqam" required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label for="validationCustom02" class="form-label d-none">Parol </label>
                            <input type="password" class="form-control darkMode" id="validationCustom02" placeholder="Parol " required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <button type="submit">Kirish</button>
                        </div>
                        <p class="auth__link">
                            Hisobingiz yo'qmi?
                            <span @click="authPage = false"> Ro'yxatdan o'tish</span>
                        </p>
                    </form>
                </template>

                <template v-else>
                    <h4 class="auth__title darkMode">Ro'yxatdan o'tish</h4>
                    <p class="auth__text darkMode">Clarity sizga chinakam professional veb-sayt yaratish uchun kerakli bloklar va komponentlarni beradi.</p>
                    <form class="needs-validation" validate>
                        <div class="">
                            <label for="validationCustom01" class="form-label d-none">Ism Familya</label>
                            <input type="text" class="form-control darkMode" placeholder="Ism Familya" required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label for="validationCustom01" class="form-label d-none">Telefon raqam</label>
                            <input type="text" class="form-control darkMode" placeholder="Telefon raqam" required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label for="region_id" class="form-label d-none">Viloyantingzni tanlang</label>
                            <select class="form-select darkMode" id="region_id" required>
                                <option selected disabled hidden value="">Viloyantingzni tanlang</option>
                                <option v-for="region in regions" :key="region.id" :label="region.name" :value="region.id">Barchasi</option>
                            </select>
                            <div class="invalid-feedback">Please select a valid state.</div>
                        </div>
                        <div class="">
                            <label for="validationCustom01" class="form-label d-none">Tumanigizni </label>
                            <input type="text" class="form-control darkMode" placeholder="Tumanigizni " required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label for="validationCustom02" class="form-label d-none">Parol </label>
                            <input type="password" class="form-control darkMode" id="validationCustom02" placeholder="Parol " required />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <div class="form-check">
                                <input type="checkbox" value="" id="invalidCheck" required />
                                <label class="form-check-label darkMode" for="invalidCheck"> Agree to terms and conditions </label>
                                <div class="invalid-feedback darkMode">You must agree before submitting.</div>
                            </div>
                        </div>
                        <div class="">
                            <button type="submit">Ro'yxatdan o'tish</button>
                        </div>
                        <p class="auth__link darkMode">
                            Hisobingiz yo'qmi?
                            <span @click="authPage = true"> Kirish</span>
                        </p>
                    </form>
                </template>
            </div>
        </div>
    </div>
</template>

<style></style>
