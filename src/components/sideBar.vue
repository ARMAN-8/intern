<template>
    <div class="fixed">
        <div class="sideBar" id="sidebar">
            <div class="min-h-screen lg:w-80 md:w-0 sm:w-0">
                <div class="flex items-center justify-center py-8">
                    <img src="../assets/INTERN-TEST.png" alt="">
                </div>
                <div class="mt-12">
                    <!--<div>
                        <img src="../assets/active.png" alt="">
                    </div>-->
                    <ul class="bor">
                        <li class="sideBarMenu m-8 bor">
                            <router-link class="sideBarText" exact to="/Block">
                                <!--<img src="../assets/tests.png" alt="">-->
                                <i class="fas fa-shopping-cart"/>
                                <span class="ml-4">{{ content.link_1 }}</span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/tariffs">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_2 }}</span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/account-settings">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_3 }}</span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/video-lessons">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_4 }}</span>
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sideBar',
        data() {
            return {
                content: {
                    link_1: 'Тесты',
                    link_2: 'Тарифы',
                    link_3: `Настройки аккаунта`,
                    link_4: 'Обучение',
                }
            }
        }
    }
</script>
<style>
    .sideBar {
        background: rgba(255, 204, 0, 1);
    }
    .sideBarText {
        @apply px-2 font-medium text-lg flex items-center justify-center my-4 hover:text-gray-400 focus:text-white
    }
    .sideBarMenu {
        color: black;
        @apply  flex items-center m-8 w-max ml-0
    }
    #sidebar a {
        color: #000;
    }
    #sidebar a.router-link-active {
        color: #fff;
    }
</style>
