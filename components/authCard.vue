<script setup>
import { useMainStore } from "~/stores/mainStore";
const mainStore = useMainStore();
const authPage = ref(true);
</script>
<template>
    <div class="auth">
        <div class="auth__inner" @click="mainStore.modalTogle(true)"></div>

        <div class="auth__s">
            <div class="auth__wrapper">
                <template v-if="authPage == true">
                    <h4 class="auth__title">
                        {{ $t("entir") }}
                    </h4>
                    <p class="auth__text">
                        Clarity sizga chinakam professional veb-sayt yaratish
                        uchun kerakli bloklar va komponentlarni beradi.
                    </p>
                    <form class="needs-validation" novalidate>
                        <div class="">
                            <label
                                for="validationCustom01"
                                class="form-label d-none"
                                >Telefon raqam</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Telefon raqam"
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label
                                for="validationCustom02"
                                class="form-label d-none"
                                >Parol
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom02"
                                placeholder="Parol "
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <button type="submit">Kirish</button>
                        </div>
                        <p class="auth__link">
                            Hisobingiz yo'qmi?
                            <span @click="authPage = false">
                                Ro'yxatdan o'tish</span
                            >
                        </p>
                    </form>
                </template>
                <template v-else>
                    <h4 class="auth__title">Ro'yxatdan o'tish</h4>
                    <p class="auth__text">
                        Clarity sizga chinakam professional veb-sayt yaratish
                        uchun kerakli bloklar va komponentlarni beradi.
                    </p>
                    <form class="needs-validation" validate>
                        <div class="">
                            <label
                                for="validationCustom01"
                                class="form-label d-none"
                                >Ism Familya</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Ism Familya"
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label
                                for="validationCustom01"
                                class="form-label d-none"
                                >Telefon raqam</label
                            >
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Telefon raqam"
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label
                                for="validationCustom04"
                                class="form-label d-none"
                                >Viloyantingzni tanlang</label
                            >
                            <select
                                class="form-select"
                                id="validationCustom04"
                                required
                            >
                                <option selected disabled hidden value="">
                                    Viloyantingzni tanlang
                                </option>
                                <option>...1</option>
                                <option>...2</option>
                            </select>
                            <div class="invalid-feedback">
                                Please select a valid state.
                            </div>
                        </div>
                        <div class="">
                            <label
                                for="validationCustom01"
                                class="form-label d-none"
                                >Tumanigizni
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Tumanigizni "
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <label
                                for="validationCustom02"
                                class="form-label d-none"
                                >Parol
                            </label>
                            <input
                                type="password"
                                class="form-control"
                                id="validationCustom02"
                                placeholder="Parol "
                                required
                            />
                            <div class="valid-feedback">Looks good!</div>
                        </div>
                        <div class="">
                            <div class="form-check">
                                <input
                                    type="checkbox"
                                    value=""
                                    id="invalidCheck"
                                    required
                                />
                                <label
                                    class="form-check-label"
                                    for="invalidCheck"
                                >
                                    Agree to terms and conditions
                                </label>
                                <div class="invalid-feedback">
                                    You must agree before submitting.
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <button type="submit">Ro'yxatdan o'tish</button>
                        </div>
                        <p class="auth__link">
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
