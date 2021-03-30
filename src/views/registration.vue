<template>
    <div>
        <div class="registration">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <navBar/>
                <div>
                    <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                        <div class="">
                            <img src="../assets/signIn.png" alt=""/>
                        </div>
                        <div class="lg:pt-36 md:pt-12 space-y-8 text-center">
                            <div class="font-normal text-4xl">
                                {{ registration.title }}
                            </div>
                            <div class="font-normal text-2xl">
                                {{ registration.subtitle }}
                            </div>
                            <div class="space-y-6">
                                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 justify-content-center my-8">
                                    <div>
                                        <label>
                                            <input placeholder="  Имя" type="text"
                                                   class="formInput">
                                        </label>
                                    </div>
                                    <div>
                                        <label>
                                            <input placeholder="  Фамилия" type="text"
                                                   class="formInput">
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="  Почта" type="email"
                                               class="formInput">
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <input placeholder="  Пароль" type="password"
                                               class="formInput">
                                    </label>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="formButton">
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
