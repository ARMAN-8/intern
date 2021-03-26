<template>
    <div>
        <div class="verify_link">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <navBar/>
                <div class="space-y-8">
                    <div class="text-center font-medium lg:text-4xl md:text-3xl sm:text-2xl mt-64">
                        {{ title }}
                    </div>
                    <div class="text-center">
                        <router-link class="text-blue-500 font-medium" to="/signIn">
                            {{ signIn }}
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import navBar from "../components/navBar";

    export default {
        name: 'verify_link',
        components: {
            navBar,
        },
        data() {
            return {
                title: `Мы отпарвили вам ссылку для восстановления`,
                signIn: `Вернуться во вход`,
            }
        }
    }
</script>
