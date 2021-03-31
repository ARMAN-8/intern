<template>
    <div class="fixed">
        <div class="sideBar" id="sidebar">
            <div class="min-h-screen lg:w-80 md:w-0 w-0">
                <div class="flex items-center justify-center py-8">
                    <img src="../assets/INTERN-TEST.png" alt="">
                </div>
                <div class="mt-12">
                    <!--<div>
                        <img src="../assets/active.png" alt="">
                    </div>-->
                    <ul class="">
                        <li class="sideBarMenu m-8">
                            <router-link class="sideBarText" exact to="/Block">
                                <!--<img src="../assets/tests.png" alt="">-->
                                <span class="pl-16">
                                    <font-awesome-icon icon="th-large"/>
                                <span class="ml-4">{{ content.link_1 }}</span>
                                </span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/tariffs">
                                <span class="pl-16">
                                    <font-awesome-icon icon="wallet"/>
                                    <span class="ml-4">{{ content.link_2 }}</span>
                                </span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/account-settings">
                                <span class="pl-16">
                                    <font-awesome-icon icon="user-cog"/>
                                <span class="ml-4">{{ content.link_3 }}</span>
                                </span>
                            </router-link>
                        </li>
                        <li class="sideBarMenu">
                            <router-link class="sideBarText" exact to="/video-lessons">
                                <span class="pl-16">
                                    <font-awesome-icon icon="chalkboard-teacher"/>
                                <span class="ml-4">{{ content.link_4 }}</span>
                                </span>
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
    /*#sidebar a.router-link-active {
        color: #fff;
        @apply border-l border-blue-400 ;
    }*/
    #sidebar ul li a.router-link-active {
        color: #fff;
        @apply py-2;
        background: url("../assets/oval.png")left no-repeat;
        margin-right: 10px;
    }
</style>
