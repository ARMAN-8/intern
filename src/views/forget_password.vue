<template>
    <div>
        <div class="forget_password">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <navBar/>
                <div>
                    <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                        <div class="">
                            <img src="../assets/forget_password.png" alt=""/>
                        </div>
                        <div class="lg:pt-36 md:pt-12 space-y-8 text-center">
                            <div class="font-normal text-4xl">
                                {{ forget_password.title }}
                            </div>
                            <div class="font-normal text-2xl">
                                {{ forget_password.subtitle }}
                            </div>
                            <div class="space-y-6">
                                <div>
                                    <label>
                                        <input placeholder="  Почта" type="email"
                                               class="formInput">
                                    </label>
                                </div>
                            </div>
                            <div class="text-center">
                                <button class="formButton">
                                    {{ forget_password.registration_btn }}
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
        name: 'forget_password',
        components: {
            navBar,
        },
        data() {
            return {
                forget_password: {
                    title: `Забыли пароль`,
                    subtitle: `Введите свою почти и мы отправим вам ссылку для восстановление пароля`,
                    registration_btn: `Получить`,
                }
            }
        }
    }
</script>
