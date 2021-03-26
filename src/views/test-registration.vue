<template>
    <div>
        <div class="test-registration m-2">
            <div class="flex justify-between items-center px-8 my-8">
                <div>
                    <img src="../assets/i_test_logo.png" class="" alt="" style="width: 169px; height: 62px;">
                </div>
                <div class="">
                    <!--<button class="font-bold">
                        {{ backBtn }}
                    </button>-->
                </div>
            </div>
            <div class="Completed text-2xl font-bold lg:mx-8 md:mx-8 sm:mx-0 lg:mt-12 md:mt-28 mt-12 space-y-12">
                <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 grid-rows-1 gap-4">
                    <div class="grid-1 lg:block md:hidden sm:hidden">
                        <img src="../assets/test-registration.png" alt="">
                    </div>
                    <div class="grid-2 text-center lg:mt-14 md:mt-12">
                        <div class="font-bold md:text-2xl my-8">
                            {{ registration.title }}
                        </div>
                        <div class="grid grid-flow-col-2 grid-cols grid-rows-3 gap-8 text-black mt-12">
                            <div class="w-full">
                                <div>
                                    <label>
                                        <input placeholder="  Имя" type="text"
                                               class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                    </label>
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <label>
                                        <input placeholder="  Фамилия" type="text"
                                               class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                    </label>
                                </div>
                            </div>
                            <div class="grid-3 col-span-2">
                                <label>
                                    <input placeholder="  Номер" type="number"
                                           class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                </label>
                            </div>
                            <div class="grid-4">
                                <label>
                                    <input placeholder="  Возраст" type="number"
                                           class="border border-black rounded-full py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                </label>
                            </div>
                            <div class="grid-5">
                                <button class="border border-black rounded-l-full py-2 px-2 focus:outline-none focus:bg-yellow-300 w-1/2">Мужской</button>
                                <button class="border border-black rounded-r-full py-2 px-2 focus:outline-none focus:bg-yellow-300 w-1/2">Женский</button>
                            </div>
                        </div>
                        <div class="mt-12">
                            <button class="bg-yellow-300 hover:bg-yellow-400 rounded-full py-2 px-8 font-medium focus:outline-none">
                                {{ registration.button }}
                            </button>
                        </div>
                    </div>
                    <div class="grid-1 lg:hidden md:block sm:block">
                        <img src="../assets/test-registration.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'test-registration',
        data() {
            return {
                backBtn: `Назад`,
                registration: {
                    title: `РЕГИСТРАЦИЯ НА ТЕСТ`,
                    description: `Ваши результаты были отправлены вашему работадателю.`,
                    button: `Запустить тест`,
                }
            }
        }
    };
</script>
