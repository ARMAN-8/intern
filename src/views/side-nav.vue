<template>
    <div class="relative min-h-screen md:flex">
        <!--mobile menu bar-->
        <div class="bg-gray-300 text-gray-100 flex justify-between md:hidden">
            <!--logo-->
            <a href="#" class="block p-4 text-black font-bold">INTERN TEST</a>
            <!--mobile menu button-->
            <button id="mobile-menu-button" class="mobile-menu-button p-4 focus:outline-none">
                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
        <!--sidebar-->
        <div id="sidebar" class="sidebar side-nav bg-yellow-1000 text-black w-72 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
            <!--mobile close button-->
            <div class="flex justify-end mx-2 md:hidden lg:hidden">
                <button id="mobile-menu-close" class="mobile-menu-button focus:outline-none">
                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <!--logo-->
            <div class="flex items-center justify-center py-8">
                <img src="../assets/INTERN-TEST.png" alt="">
            </div>
            <!--nav-->
            <nav class="mt-12">
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
                                <span class="pl-16 flex items-center">
                                    <font-awesome-icon icon="user-cog"/>
                                <span class="ml-4">
                                    {{ content.link_3 }} <br>
                                    {{ content.link_4 }}
                                </span>
                                </span>
                        </router-link>
                    </li>
                    <li class="sideBarMenu">
                        <router-link class="sideBarText" exact to="/video-lessons">
                                <span class="pl-16">
                                    <font-awesome-icon icon="chalkboard-teacher"/>
                                <span class="ml-4">{{ content.link_5 }}</span>
                                </span>
                        </router-link>
                    </li>
                </ul>
            </nav>
        </div>
        <!--content-->
        <mainNavBar class="hidden lg:block"/>

    </div>
</template>
<script>
    import mainNavBar from "../components/mainNavBar";
    export default {
        name: 'side-nav',
        components: {
            mainNavBar
        },
        data() {
            return {
                content: {
                    link_1: 'Тесты',
                    link_2: 'Тарифы',
                    link_3: `Настройки`,
                    link_4: `аккаунта`,
                    link_5: 'Обучение',
                },
            };
        },
        mounted() {
            // grab everything we need
            const btn = document.querySelector('#mobile-menu-button'),
                sidebar = document.querySelector('#sidebar'),
                sidebarCloseBtn = document.querySelector('#mobile-menu-close'),
                sideNav = document.querySelector('.side-nav');

            // add our event listener for the click
            if (btn){
                btn.addEventListener('click', () => {
                    sidebar.classList.toggle('-translate-x-full');
                });
            }
            if (sidebarCloseBtn){
                sidebarCloseBtn.addEventListener('click', () => {
                    sideNav.classList.toggle('-translate-x-full');
                });
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
