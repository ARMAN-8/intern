<template>
    <div class="Block">
        <sideBar/>
        <mainNavBar/>
        <div class="accountSettings lg:ml-80 md:ml-0 my-8 lg:mx-8 md:mx-8 sm:mx-2 lg:px-8 md:px-4 sm:px-2 lg:space-y-12 md:space-y-8 sm:space-y-6">
            <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                <div class="grid-1 space-y-6">
                    <div class="font-bold text-xl">
                        {{ changeInfo.title }}
                    </div>
                    <div class="font-medium grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 grid-rows-1 gap-4">
                        <div class="grid-1 space-y-4">
                            <div>
                                <label class="space-y-2">
                                    <div>{{ changeInfo.email }}</div>
                                    <input type="email"
                                           class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                                </label>
                            </div>
                            <div>
                                <label class="space-y-2">
                                    <div>{{ changeInfo.fullName }}</div>
                                    <input type="text"
                                           class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                                </label>
                            </div>
                            <div>
                                <label class="space-y-2">
                                    <div>{{ changeInfo.companyName }}</div>
                                    <input type="text"
                                           class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                                </label>
                            </div>
                        </div>
                        <div class="grid-2 space-y-6">
                            <div class="">
                                <label class="space-y-2">
                                    <div>{{ changeInfo.linkActive }}</div>
                                    <select class="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg"
                                            name="" id="">
                                        <option selected>1 неделя</option>
                                        <option value="1">3 дня</option>
                                        <option value="1">1 месяц</option>
                                    </select>
                                </label>
                            </div>
                            <div>
                                <div class="space-y-2">
                                    <div>{{ changeInfo.companyLogo }}</div>
                                    <button class="bg-gray-400 px-4 py-2 rounded-lg text-white focus:outline-none shadow-lg hover:shadow-none">
                                        {{ changeInfo.chooseFile }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button class="text-white px-8 py-3 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded shadow-lg hover:shadow-none">
                            {{ saveButton }}
                        </button>
                    </div>
                </div>
                <div class="grid-2 space-y-6">
                    <div class="font-bold text-xl">
                        {{ referralLink.title }}
                    </div>
                    <div class="font-medium space-y-4">
                        <div>
                            <label class="space-y-2 flex flex-col lg:w-80 md:w-80">
                                <div class="text-gray-300">Скопируйте реферальную ссылку</div>
                                <input type="text" value="https://itest.kz/?r=CEO196"
                                       class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                            </label>
                        </div>
                        <div>
                            {{ referralLink.description }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="grid grid-flow-col-1 lg:grid-cols-1 md:grid-cols-1 grid-cols-1 grid-rows-1 gap-4">
                <div class="font-medium grid-1 space-y-6">
                    <div class="font-bold text-xl">
                        {{ changePassword.title }}
                    </div>
                    <div>
                        <label class="space-y-2">
                            <div>{{ changePassword.currentPassword }}</div>
                            <input type="password"
                                   class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                        </label>
                    </div>
                    <div>
                        <label class="space-y-2">
                            <div>{{ changePassword.newPassword }}</div>
                            <input type="password"
                                   class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                        </label>
                    </div>
                    <div>
                        <label class="space-y-2">
                            <div>{{ changePassword.repeatNewPassword }}</div>
                            <input type="password"
                                   class="border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent shadow-lg">
                        </label>
                    </div>
                    <div>
                        <button class="text-white px-8 py-3 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded shadow-lg hover:shadow-none">
                            {{ saveButton }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sideBar from "../components/sideBar";
    import mainNavBar from "../components/mainNavBar";

    export default {
        name: 'accountSettings',
        components: {
            sideBar,
            mainNavBar,
        },
        data() {
            return {
                saveButton: 'Сохранить',
                changeInfo: {
                    title: 'Изменение информаций',
                    email: 'Ваша почта:',
                    fullName: 'Ваше имя:',
                    companyName: 'Названия Компаний:',
                    linkActive: 'Активность ссылки',
                    companyLogo: 'Логотип компаний',
                    chooseFile: 'Выберите файл',
                },
                referralLink: {
                    title: 'Реферальная ссылка',
                    description: `За каждого нового пользователя, который приобрел пакет тестов
                                  по вашей реферальной ссылке и подтвердившего свой номер телефона,
                                  вы получите количество бонусных тестов равное 10 процентам от его тарифа`
                },
                changePassword: {
                    title: 'Изменение пароля',
                    currentPassword: 'Ваш пароль:',
                    newPassword: 'Новый пароль:',
                    repeatNewPassword: 'Новый пароль:',
                }
            }
        }
    }
</script>
