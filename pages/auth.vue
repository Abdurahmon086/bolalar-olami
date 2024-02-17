<script setup></script>

<template>
    <div class="auth">
        <div class="auth__wrapper">
            <h4>Kirish</h4>
            <p>
                Clarity sizga chinakam professional veb-sayt yaratish uchun
                kerakli bloklar va komponentlarni beradi.
            </p>
            <form class="needs-validation" novalidate>
                <div class="">
                    <label for="validationCustom01" class="form-label"
                        >Telefon raqam</label
                    >
                    <input
                        type="text"
                        class="form-control"
                        id="validationCustom01"
                        value="Mark"
                        placeholder="Telefon raqam"
                        required
                    />
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="">
                    <label for="validationCustom02" class="form-label"
                        >Parol
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="validationCustom02"
                        value="Otto"
                        placeholder="Parol "
                        required
                    />
                    <div class="valid-feedback">Looks good!</div>
                </div>
                <div class="">
                    <button class="btn btn-primary" type="submit">
                        Submit form
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>
