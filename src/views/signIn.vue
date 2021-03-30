<template>
    <div>
        <div class="signIn">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <navBar/>
                <div>
                    <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                        <div class="">
                            <img src="../assets/registration.png" alt=""/>
                        </div>
                        <div class="lg:pt-36 md:pt-12 space-y-8 text-center">
                            <div class="font-normal text-4xl">
                                {{ signIn.title }}
                            </div>
                            <div class="font-normal text-2xl">
                                {{ signIn.subtitle }}
                            </div>
                            <div class="space-y-6">
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
                            <div class="flex justify-end">
                                <router-link class="text-lg font-normal" to="/forget_password">
                                    {{ signIn.forgetPassword }}
                                </router-link>
                            </div>
                            <div class="text-center">
                                <button class="formButton">
                                    {{ signIn.signIn_btn }}
                                </button>
                            </div>
                            <div class="text-center">
                                {{ signIn.across }}
                                <div class="flex items-center justify-center">
                                    <a href="#" class="m-4">
                                        <img src="../assets/facebook.png" alt="">
                                    </a>
                                    <a href="#" class="m-4">
                                        <img src="../assets/google_plus.png" alt="">
                                    </a>
                                </div>
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
         name: 'sigIn',
        components: {
             navBar,
        },
        data() {
             return {
                 signIn: {
                     title: `Войти`,
                     subtitle: `С возвращением!`,
                     forgetPassword: `Забыли пароль?`,
                     signIn_btn: `Войти`,
                     across: `Через`,
                 }
             }
        }
    }
</script>
