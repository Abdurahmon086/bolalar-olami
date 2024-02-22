<script setup>
const { locales } = useI18n();
const mainStore = useMainStore();
const navMain = mainStore.navbarM;

const localPath = useLocalePath();

//hooks
const darkTheme = ref(false);

const switchToggle = () => {
    darkTheme.value = !darkTheme.value;
    const darkIcons = document.querySelectorAll(".darkIcon");
    const lightIcons = document.querySelectorAll(".lightIcon");

    if (darkTheme.value) {
        document.body.classList.add("darkBody");
        darkIcons.forEach((icon) => icon.classList.remove("d-none"));
        lightIcons.forEach((icon) => icon.classList.add("d-none"));
    } else {
        document.body.classList.remove("darkBody");
        darkIcons.forEach((icon) => icon.classList.add("d-none"));
        lightIcons.forEach((icon) => icon.classList.remove("d-none"));
    }
};
</script>

<template>
    <header class="header fixed-top darkMode">
        <div class="header__wrapper">
            <!-- header top navbar -->
            <div
                class="container header__top d-flex justify-content-between align-items-center"
            >
                <div class="header__top-left">
                    <span class="header__info-text">{{ $t("city") }}</span>
                    <a class="link-opacity-75-hover" href="#"
                        >info@bolalarolami</a
                    >
                </div>
                <div class="header__top-right d-flex align-items-center">
                    <div class="header__top-texts d-none d-md-flex">
                        <span class="darkMode">{{ $t("gNumber") }}</span>
                        <span class="darkMode">{{ $t("editor") }}</span>
                    </div>
                    <div
                        class="header__top-menuList d-flex align-items-center"
                        style="gap: 16px"
                    >
                        <!-- <img
                            src="/images/glasses.svg"
                            alt="glasses icon"
                            class="lightIcon d-block"
                        />
                        <img
                            src="/images/glasses_d.svg"
                            alt="glasses icon"
                            class="darkIcon d-none"
                        /> -->
                        <div id="themingSwitcher" @click="switchToggle">
                            <img
                                src="/images/moon.svg"
                                alt="moon icon"
                                class="lightIcon d-block cur"
                            />
                            <img
                                src="/images/moon_d.svg"
                                alt="moon icon"
                                class="darkIcon d-none"
                            />
                        </div>
                        <button
                            @click="
                                (mainStore.auth = true),
                                    (mainStore.auths = false)
                            "
                            type="button"
                            class="header__top-mainBtn btn d-xl-none shadow-0 darkMode-btn"
                            data-bs-ripple-init
                        >
                            {{ $t("entir") }}
                        </button>

                        <select
                            class="header__top-btn darkMode-btn d-xl-none"
                            aria-label="Default select example"
                            v-model="mainStore.language"
                        >
                            <option v-for="item in locales" :value="item.code">
                                {{ item.code }}
                            </option>
                        </select>

                        <ul
                            class="header__top-list d-none d-xl-flex align-items-center list-unstyled m-0"
                            style="gap: 10px"
                        >
                            <li
                                class="header__top-item darkMode"
                                :class="{
                                    active: mainStore.activeText === 'text1',
                                }"
                                @click="mainStore.changeLocale('uz', 'text1')"
                            >
                                Uz
                            </li>
                            <li
                                class="header__top-item darkMode"
                                :class="{
                                    active: mainStore.activeText === 'text2',
                                }"
                                @click="mainStore.changeLocale('kr', 'text2')"
                            >
                                Уз
                            </li>
                            <li
                                class="header__top-item darkMode"
                                :class="{
                                    active: mainStore.activeText === 'text3',
                                }"
                                @click="mainStore.changeLocale('en', 'text3')"
                            >
                                En
                            </li>
                            <li
                                class="header__top-item darkMode"
                                :class="{
                                    active: mainStore.activeText === 'text4',
                                }"
                                @click="mainStore.changeLocale('ru', 'text4')"
                            >
                                Ру
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- header bottom navbar -->
            <nav
                class="header__navbar navbar navbar-expand-xl navbar-light shadow-0 darkMode"
            >
                <div class="container darkMode">
                    <!-- brand -->
                    <NuxtLink :to="localPath('/')" class="navbar-brand m-0">
                        <img
                            src="/images/logo.svg"
                            class="lightIcon d-block"
                            height="29"
                            alt="bolalar olami Logo"
                            loading="lazy"
                        />
                        <img
                            src="/images/logo_d.svg"
                            class="darkIcon d-none"
                            height="29"
                            alt="bolalar olami Logo"
                            loading="lazy"
                        />
                    </NuxtLink>

                    <!-- middle -->
                    <div
                        class="darkMode navbar-collapse header__navbar-middle collapse"
                        id="navbarSupportedContent"
                    >
                        <!-- navbar list -->
                        <ul
                            class="darkMode navbar-nav d-none d-xl-flex justify-content-center w-100"
                        >
                            <li
                                class="nav-item position-relative darkMode"
                                v-for="nav in navMain"
                                :key="nav.id"
                            >
                                <a class="nav-link darkMode-title" href="#">
                                    {{ nav[`title_${$i18n.locale}`] }}
                                </a>
                                <div
                                    class="darkMode d-none item-menu list-group list-group-light position-absolute"
                                >
                                    <button
                                        type="button"
                                        class="list-group-item darkMode list-group-item-action border-0"
                                        v-for="navItem in nav.child"
                                        :key="navItem.id"
                                    >
                                        {{ navItem[`title_${$i18n.locale}`] }}
                                    </button>
                                </div>
                            </li>
                        </ul>

                        <!-- accordion -->
                        <div
                            class="darkMode accordion accordion-flush container my-3 d-flex flex-column d-xl-none left-0"
                            style="gap: 12px"
                            id="accordionFlushExample"
                        >
                            <div
                                class="accordion-item darkMode-btn"
                                v-for="menu in navMain"
                                :key="menu.id"
                            >
                                <h2 class="accordion-header">
                                    <button
                                        class="darkMode rounded-3 accordion-button shadow-0 collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        :data-bs-target="
                                            '#flush-collapseOne' + menu.id
                                        "
                                        aria-expanded="true"
                                        :aria-controls="
                                            'flush-collapseOne' + menu.id
                                        "
                                    >
                                        {{ menu[`title_${$i18n.locale}`] }}
                                    </button>
                                </h2>
                                <div
                                    :id="'flush-collapseOne' + menu.id"
                                    data-bs-parent="#accordionFlushExample"
                                    class="accordion-collapse collapse border-0"
                                    :aria-labelledby="menu.id"
                                >
                                    <ul class="accordion-body list-unstyled">
                                        <li
                                            v-for="navItem in menu.child"
                                            :key="navItem.id"
                                        >
                                            {{
                                                navItem[`title_${$i18n.locale}`]
                                            }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- right -->
                    <div
                        class="header__navbar-right d-flex align-items-center darkMode"
                    >
                        <NuxtLink
                            to="/search"
                            type="button"
                            class="darkMode-btn btn shadow-0 header__navbar-btn"
                        >
                            <img
                                src="/images/search.svg"
                                class="lightIcon d-block"
                                alt="search icon"
                            />
                            <img
                                src="/images/search_d.svg"
                                class="darkIcon d-none"
                                alt="search icon"
                            />
                        </NuxtLink>
                        <button
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            class="darkMode-btn navbar-toggler header__navbar-btn d-xl-none collapsed"
                        >
                            <img src="/images/x.svg" alt="x icon" class="" />
                            <img
                                src="/images/menu.svg"
                                alt="menu icon"
                                class="d-none"
                            />
                        </button>
                        <!-- Avatar -->
                        <div class="dropdown">
                            <a
                                class="dropdown-toggle d-flex align-items-center hidden-arrow"
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                <img
                                    src="/images/person.png"
                                    class="rounded-circle"
                                    height="35"
                                    alt="person"
                                    loading="lazy"
                                />
                            </a>

                            <!-- width uzi 182px  -->
                            <ul
                                class="darkMode dropdown-menu dropdown-menu-end"
                                style="width: 192px"
                                aria-labelledby="navbarSupportedContent"
                            >
                                <li
                                    class="darkMode d-flex align-items-start"
                                    style="
                                        gap: 8px;
                                        padding: 10px 10px 4px 10px;
                                    "
                                >
                                    <img
                                        src="/images/person.png"
                                        class="rounded-circle"
                                        height="35"
                                        alt="person"
                                        loading="lazy"
                                    />

                                    <div>
                                        <h4
                                            class="m-0"
                                            style="
                                                font-size: 14px;
                                                line-height: 20px;
                                            "
                                        >
                                            Firdavs Muzaffarov
                                        </h4>
                                        <span
                                            style="
                                                color: rgba(36, 36, 36, 0.5);
                                                font-size: 11px;
                                                line-height: 20px;
                                            "
                                            class="darkMode-sp"
                                            >info@gmail.com</span
                                        >
                                    </div>
                                </li>
                                <li>
                                    <a class="dropdown-item darkMode" href="#"
                                        >Akaunt sozlamalari</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item darkMode" href="#"
                                        >Qorong'i rejim</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item darkMode" href="#"
                                        >Yordam</a
                                    >
                                </li>
                                <li>
                                    <a class="dropdown-item darkMode" href="#"
                                        >Chiqish</a
                                    >
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </header>
</template>

<style scoped>
.active {
    color: rgb(228, 28, 28);
    font-weight: 700;
}
</style>
