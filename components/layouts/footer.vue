<template>
    <footer class="darkMode bg-white">
        <div class="container">
            <div class="footer">
                <div class="footer__card d-flex justify-content-between">
                    <div class="">
                        <NuxtLink :to="localPath('/')">
                            <img
                                src="/images/footer-logo.svg"
                                class="lightIcon d-block img-fluid"
                                alt="bolalar olami Logo"
                                loading="lazy"
                            />
                            <img
                                src="/images/logo_d.svg"
                                class="darkIcon d-none img-fluid"
                                alt="bolalar olami Logo"
                                loading="lazy"
                            />
                        </NuxtLink>
                        <p class="footer__text darkMode">
                            {{ $t("footer_text") }}
                        </p>
                        <div class="d-flex" style="margin-top: 50px; gap: 22px">
                            <a href="#">
                                <img
                                    src="/images/instagram-logo.svg"
                                    alt="instagram-logo"
                            /></a>
                            <a href="#"
                                ><img
                                    src="/images/telegram-logo.svg"
                                    alt="telegram-logo"
                                />
                            </a>
                            <a href="#">
                                <img
                                    src="/images/facebook-logo.svg"
                                    alt="facebook-logo"
                            /></a>
                            <a href="#">
                                <img
                                    src="/images/youtube-logo.svg"
                                    alt="youtube-logo"
                            /></a>
                        </div>
                    </div>
                    <div class="">
                        <ul
                            class="footer__list list-unstyled d-flex flex-column"
                            style="gap: 24px"
                        >
                            <li>
                                <a
                                    class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                >
                                    {{ $t("about_us") }}</a
                                >
                            </li>
                            <li>
                                <a
                                    class="footer__link1 fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    >{{ $t("gNumber") }}</a
                                >
                            </li>
                            <li>
                                <a
                                    class="footer__link1 fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    style="
                                        display: block;
                                        max-width: 248px !important;
                                    "
                                    >{{ $t("founder") }}
                                    <span class="fw-normal">{{
                                        $t("founder_title")
                                    }}</span></a
                                >
                            </li>
                            <li>
                                <a
                                    class="footer__link1 fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    >{{ $t("responsible_editor") }}
                                    <span class="fw-normal">{{
                                        $t("responsible_editor_title")
                                    }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul
                            class="list-unstyled d-flex flex-column"
                            style="gap: 24px"
                        >
                            <li>
                                <a
                                    class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    >{{ $t("contact") }}</a
                                >
                            </li>
                            <li
                                class="d-flex align-items-center"
                                style="gap: 6px"
                            >
                                <img
                                    src="/images/mail-icon.svg"
                                    alt="mail-icon"
                                    class="lightIcon d-block"
                                />
                                <img
                                    src="/images/email-dark.svg"
                                    alt="email-dark icon"
                                    class="darkIcon d-none"
                                />

                                <a
                                    class="footer__link1 fw-normal text-decoration-none darkMode-title"
                                    href="#"
                                >
                                    bolalarolamiuz@gmail.com</a
                                >
                            </li>
                            <li class="d-flex" style="gap: 14px">
                                <img
                                    src="/images/phone-icon.svg"
                                    alt="phone-icon"
                                    class="lightIcon d-block"
                                />
                                <img
                                    src="/images/tell-dark.svg"
                                    alt="tell-dark icon"
                                    class="darkIcon d-none"
                                />
                                <a
                                    class="footer__link1 fw-normal text-decoration-none darkMode-title"
                                    href="#"
                                    >998 (90) 109 24 35</a
                                >
                            </li>
                            <li
                                class="d-flex align-items-start"
                                style="gap: 6px"
                            >
                                <img
                                    src="/images/location-icon.svg"
                                    alt="location-icon"
                                    class="lightIcon d-block"
                                />
                                <img
                                    src="/images/gps-dark.svg"
                                    alt="gps-dark icon"
                                    class="darkIcon d-none"
                                />
                                <a
                                    class="footer__link1 fw-normal text-decoration-none darkMode-title"
                                    href="#"
                                    style="display: block; max-width: 230px"
                                    >{{ $t("place") }}</a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul
                            class="list-unstyled d-flex flex-column"
                            style="gap: 24px"
                        >
                            <li>
                                <a
                                    class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    >{{ $t("for_support") }}</a
                                >
                            </li>
                            <li class="d-flex" style="gap: 14px">
                                <img
                                    src="/images/phone-icon.svg"
                                    alt="phone-icon"
                                    class="lightIcon d-block"
                                />
                                <img
                                    src="/images/tell-dark.svg"
                                    alt="tell-dark icon"
                                    class="darkIcon d-none"
                                />
                                <a
                                    class="footer__link1 fw-normal darkMode-title text-decoration-none"
                                    href="#"
                                    >998 (90) 109 24 35</a
                                >
                            </li>
                            <li class="d-flex" style="gap: 13px">
                                <img
                                    src="/images/telegram-icon.svg"
                                    alt="telegram-icon"
                                    class="lightIcon d-block"
                                />
                                <img
                                    src="/images/telegram-dark.svg"
                                    alt="telegram-dark icon"
                                    class="darkIcon d-none"
                                />
                                <a
                                    class="footer__link1 fw-normal darkMode-title text-decoration-none"
                                    href="#"
                                    >Telegram</a
                                >
                            </li>
                        </ul>
                    </div>
                </div>

                <p class="footer__co-text text-center darkMode-sp">
                    {{ $t("footer_title") }}
                </p>
            </div>
        </div>
    </footer>
</template>

<script lang="ts" setup>
const localPath = useLocalePath();
</script>

<style></style>
