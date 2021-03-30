<template>
    <div>
        <nav class="">
            <div class="">
                <div class="relative flex items-center justify-between sm:h-8 md:h-20 lg:h-20">
                    <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <!-- Mobile menu button-->
                        <!-- v-on:click="mobileMenu()" -->
                        <button id="mMenu" type="button"
                                class="hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu" aria-expanded="false">
                            <span class="sr-only">Open main menu</span>
                            <!--
                              Icon when menu is closed.

                              Heroicon name: outline/menu

                              Menu open: "hidden", Menu closed: "block"
                            -->
                            <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <!--
                              Icon when menu is open.

                              Heroicon name: outline/x

                              Menu open: "block", Menu closed: "hidden"
                            -->
                            <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1 flex items-center justify-between sm:items-stretch sm:justify-start">
                        <div class="flex-shrink-0 flex items-center">
                            <router-link to="/">
                                <img class="i_test_logo hidden lg:block md:block sm:block h-12 w-auto" src="../assets/i_test_logo.png" alt="iTest"/>
                            </router-link>
                        </div>
                    </div>
                    <div class="hidden sm:block sm:ml-6">
                        <div class="flex space-x-4">
                            <router-link to="/block">
                                <button class="outlineBtn mx-2">
                                    {{ signIn }}
                                </button>
                            </router-link>
                            <button class="outlineBtn mx-2">
                                {{ registration }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Mobile menu, show/hide based on menu state. -->
            <div class="sm:hidden" id="mobile-menu">
                <div class="flex justify-around mt-8">
                    <button class="outlineBtnMobile mx-2">
                        {{ signIn }}
                    </button>
                    <button class="outlineBtnMobile mx-2">
                        {{ registration }}
                    </button>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
    export default {
        name: 'navBar',
        data(){
            return{
                signIn: 'Войти',
                registration: 'Регистрация',
            }
        },
        methods: {
            mobileMenu: function () {
                /*alert('nfrjke');*/
            }
        },
    }
</script>
<style>
    .bor {
        @apply border border-red-800
    }
    .outlineBtn {
        @apply px-12 py-2 focus:outline-none border border-black hover:border-gray-600 hover:bg-gray-100 hover:text-black rounded-62 font-bold text-2xl
    }
    .outlineBtnMobile {
        @apply px-4 focus:outline-none border border-black hover:border-white hover:bg-black hover:text-white rounded-62 font-bold text-2xl
    }
    /*.i_test_logo {
        width: 8.3125rem;
        height: 3.875rem;
    }*/
</style>
