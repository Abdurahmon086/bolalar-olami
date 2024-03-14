<script setup>
const localPath = useLocalePath();
</script>
<template>
    <footer class="darkMode bg-white">
        <div class="container">
            <div class="footer">
                <div class="footer__card d-flex justify-content-between">
                    <div class="">
                        <NuxtLink :to="localPath('/')">
                            <NuxtImg src="/images/footer-logo.svg" width="184" height="50" class="lightIcon d-block img-fluid" alt="bolalar olami Logo" />
                            <NuxtImg src="/images/logo_d.svg" width="184" height="50" class="darkIcon d-none img-fluid" alt="bolalar olami Logo" />
                        </NuxtLink>
                        <p class="footer__text darkMode">
                            {{ $t("footer_text") }}
                        </p>
                    </div>
                    <div class="">
                        <ul class="footer__list list-unstyled d-flex flex-column" style="gap: 24px">
                            <li>
                                <a class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title" href="#"> {{ $t("about_us") }}</a>
                            </li>
                            <li>
                                <a class="footer__link1 fw-bold text-decoration-none darkMode-title" href="#">{{ $t("gNumber") }}</a>
                            </li>
                            <li>
                                <a
                                    class="footer__link1 fw-bold text-decoration-none darkMode-title"
                                    href="#"
                                    style="display: block; max-width: 248px !important"
                                    >{{ $t("founder") }} <span class="fw-normal">{{ $t("founder_title") }}</span></a
                                >
                            </li>
                            <li>
                                <a class="footer__link1 fw-bold text-decoration-none darkMode-title" href="#"
                                    >{{ $t("responsible_editor") }} <span class="fw-normal">{{ $t("responsible_editor_title") }}</span></a
                                >
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="list-unstyled d-flex flex-column" style="gap: 24px">
                            <li>
                                <a class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title" href="#">{{ $t("contact") }}</a>
                            </li>
                            <li class="d-flex align-items-center" style="gap: 6px">
                                <NuxtImg src="/images/mail-icon.svg" width="16" height="16" alt="mail-icon" class="lightIcon d-block" />
                                <NuxtImg src="/images/email-dark.svg" alt="email-dark icon" width="16" height="16" class="darkIcon d-none" />

                                <a class="footer__link1 fw-normal text-decoration-none darkMode-title" style="height: 20px; margin-top: 5px" href="#">
                                    bolalarolamiuz@gmail.com</a
                                >
                            </li>
                            <li class="d-flex" style="gap: 6px">
                                <NuxtImg src="/images/phone-icon.svg" width="16" height="16" alt="phone-icon" class="lightIcon d-block" />
                                <NuxtImg src="/images/tell-dark.svg" width="16" height="16" alt="tell-dark icon" class="darkIcon d-none" />
                                <a class="footer__link1 fw-normal text-decoration-none darkMode-title" href="#">+998(90) 004 41 21</a>
                            </li>
                            <li class="d-flex align-items-start" style="gap: 6px">
                                <NuxtImg src="/images/location-icon.svg" width="16" height="16" alt="location-icon" class="lightIcon d-block" />
                                <NuxtImg src="/images/gps-dark.svg" width="16" height="16" alt="gps-dark icon" class="darkIcon d-none" />
                                <a class="footer__link1 fw-normal text-decoration-none darkMode-title" href="#" style="display: block; max-width: 230px">{{
                                    $t("place")
                                }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="">
                        <ul class="list-unstyled d-flex flex-column" style="gap: 24px">
                            <li>
                                <a class="footer__link text-decoration-none fw-bold text-decoration-none darkMode-title" href="#">{{ $t("for_support") }}</a>
                            </li>
                            <li class="d-flex" style="gap: 10px">
                                <NuxtImg src="/images/phone-icon.svg" width="16" height="16" alt="phone-icon" class="lightIcon d-block" />
                                <NuxtImg src="/images/tell-dark.svg" width="16" height="16" alt="tell-dark icon" class="darkIcon d-none" />
                                <a class="footer__link1 fw-normal darkMode-title text-decoration-none" href="#">+998(90) 004 41 21</a>
                            </li>
                            <li class="d-flex" style="gap: 13px">
                                <NuxtImg src="/images/telegram-icon.svg" width="16" height="16" alt="telegram-icon" class="lightIcon d-block" />
                                <NuxtImg src="/images/telegram-dark.svg" width="16" height="16" alt="telegram-dark icon" class="darkIcon d-none" />
                                <a class="footer__link1 fw-normal darkMode-title text-decoration-none" href="https://t.me/bolalarolamiadmin" target="_blank"
                                    >Telegram</a
                                >
                            </li>
                            <div class="d-flex" style="gap: 22px">
                                <a href="https://www.instagram.com/Bolalarolami.uz" target="_blank">
                                    <NuxtImg src="/images/instagram-logo.svg" width="22" height="22" alt="instagram-logo"
                                /></a>
                                <a href="https://t.me/bolalarolamiuz" target="_blank"
                                    ><NuxtImg src="/images/telegram-logo.svg" width="24" height="24" alt="telegram-logo" />
                                </a>
                                <a href="https://www.facebook.com/bolalarolami" target="_blank">
                                    <NuxtImg src="/images/facebook-logo.svg" width="24" height="24" alt="facebook-logo"
                                /></a>
                                <a href="https://www.youtube.com/@bolalarolamiuz" target="_blank">
                                    <NuxtImg src="/images/youtube-logo.svg" width="24" height="24" alt="youtube-logo"
                                /></a>
                            </div>
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

<style></style>
