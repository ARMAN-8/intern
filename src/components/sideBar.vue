<template>
    <div class="fixed">
        <div class="sideBar z-10">
            <div class=" min-h-screen lg:w-80 md:w-0 sm:w-0">
                <div class="flex items-center justify-center py-8">
                    <img src="../assets/INTERN-TEST.png" alt="">
                </div>
                <div class="mt-12">
                    <!--<div>
                        <img src="../assets/active.png" alt="">
                    </div>-->
                    <ul class="m-8">
                        <li class="flex items-center m-8">
                            <a href="#" class="sideBarText">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_1 }}</span>
                            </a>
                        </li>
                        <li class="flex items-center m-8">
                            <a href="#" class="sideBarText">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_2 }}</span>
                            </a>
                        </li>
                        <li class="flex items-center m-8">
                            <a href="#" class="sideBarText">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_3 }}</span>
                            </a>
                        </li>
                        <li class="flex items-center m-8">
                            <a href="#" class="sideBarText">
                                <img src="../assets/tests.png" alt="">
                                <span class="ml-4">{{ content.link_4 }}</span>
                            </a>
                        </li>
                    </ul>
                    <div class="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'sideBar',
        data () {
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
        @apply px-2 font-medium font-medium text-xl flex items-center justify-center my-4 hover:text-gray-400 focus:text-white
    }
</style>
