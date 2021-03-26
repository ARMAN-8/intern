<template>
    <div>
        <div class="registration">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <navBar/>
                <div>
                    <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                        <div class="">
                            <img src="../assets/registration.png" alt=""/>
                        </div>
                        <div class="lg:pt-36 md:pt-12 space-y-6 text-center">
                            <div class="lg:text-4xl md:text-3xl sm:text-2xl font-bold lg:mt-12">
                                {{ registration.title }}
                            </div>
                            <div class="font-medium">
                                {{ registration.subtitle }}
                            </div>
                            <div class="space-y-6">
                                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-content-center my-8">
                                    <div>
                                        <label>
                                            <input placeholder="  Имя" type="text"
                                                   class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-transparent">
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input placeholder="  Фамилия" type="text"
                                                   class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-transparent">
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="  Почта" type="email"
                                               class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-transparent">
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="  Пароль" type="password"
                                               class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-transparent">
                                    </label>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="bg-yellow-300 hover:bg-yellow-400 rounded-full py-2 px-8 font-medium focus:outline-none">
                                    {{ registration.registration_btn }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import navBar from "../components/navBar";
    export default {
        name: 'registration',
        components: {
            navBar,
        },
        data() {
            return {
                registration: {
                    title: `Регистрация`,
                    subtitle: `Платформа INTERN приветствует вас`,
                    registration_btn: `Регистрация`,
                }
            }
        }
    }
</script>
