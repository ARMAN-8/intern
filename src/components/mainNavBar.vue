<template>
    <div>
        <div class="bg-gray-200 w-full p-2">
            <div class="lg:ml-80 md:ml-72 px-4">
                <div class="flex justify-between p-4">
                    <div>
                        <span class="text-2xl font-bold">
                            {{ content.title }}
                        </span>
                        <p class="font-medium mt-4">
                            {{ content.description }}
                        </p>
                    </div>
                    <div class="font-medium pr-8">
                        <router-link to="/">
                            {{ content.logOut }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainNavBar',
        data() {
            return {
                content: {
                    title: 'Тесты',
                    description: 'Приобретайте нужный пакет услуг для вашей работы',
                    logOut: 'Выйти',
                }
            }
        }
    }
</script>
