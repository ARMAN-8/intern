<template>
    <div class="flex">
        <sideNav/>
        <div class="w-full">
            <mainNavBar/>
            <div class="mx-4 lg:mx-10 my-12">
                <!--Отправить тест-->
                <div class="shadow-lg rounded-lg mt-12">
                    <div class="bg-yellow-1000 p-4 font-medium rounded-t-lg">
                        {{ warningCard.title }}
                    </div>
                    <div class="px-8 py-4">
                        <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                            <div class="flex items-center gap-4 mt-5">
                                <div class="">
                                    <img src="../assets/e-mail.png" alt="">
                                </div>
                                <div class="">
                                    <label>
                                        <input placeholder="Введите почту тестируемого"
                                               class="bg-gray-200 border rounded-lg py-2 px-2 lg:w-60 md:w-60 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                    </label>
                                </div>
                            </div>
                            <div class="flex items-center gap-4 mt-5">
                                <div class="font-medium">
                                    {{ warningCard.uploadTable }}
                                </div>
                                <div>
                                    <a href="#">
                                        <img src="../assets/upload.png" alt="">
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
                            <div class="grid-1 col-span-2">
                                <div class="flex items-center gap-4 mt-5">
                                    <div>
                                <span>
                                    {{ warningCard.chooseYourTest }}
                                </span>
                                        <div class="grid grid-flow-col-2 lg:grid-cols-4 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                                            <div>
                                                <button id="tooltipBtn" aria-describedby="tooltip" class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                                <div id="tooltip" role="tooltip">
                                                    Тест на оценку характера и личностных качеств (80 вопросов / 40 мин)
                                                </div>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                            <div>
                                                <button class="gray_button m-2">
                                                    Тест "Oxford"
                                                </button>
                                            </div>
                                        </div>
                                        <div class="">
                                            <button class="primary_button m-2">
                                                {{ warningCard.sendButton }}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="grid-2">
                                <div class="flex items-center gap-4 mt-5">
                                    <div class="font-medium">
                                        Тестов на счету:
                                    </div>
                                    <div class="text-2xl">
                                        <span>200</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex justify-end">
                    <label>
                        <input placeholder="Поиск"
                               class="bg-gray-200 border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                    </label>
                </div>
                <!--Table-->
                <div class="overflow-auto mt-12 rounded-lg shadow-lg">
                    <table class="bg-gray-50">
                        <tr class="bg-yellow-1000">
                            <th class="w-1/4 text-left px-8 py-4">{{ warningTable.eMail.title }}</th>
                            <th class="w-1/6 text-left px-8 py-4">{{ warningTable.fullName.title }}</th>
                            <th class="w-1/6 text-left px-8 py-4">{{ warningTable.phoneNumber.title }}</th>
                            <th class="w-1/6 text-left px-8 py-4">{{ warningTable.sentBy.title }}</th>
                            <th class="w-1/6 text-left px-8 py-4">{{ warningTable.status.title }}</th>
                            <th class="w-1/6 text-left px-8 py-4">{{ warningTable.results.title }}</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td class="px-8 py-4">{{ warningTable.eMail.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.fullName.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.phoneNumber.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.sentBy.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.status.content }}</td>
                            <td class="px-8 py-4"><router-link to="/results"><img src="../assets/pdf.png" alt=""></router-link></td>
                        </tr>
                        <tr>
                            <td class="px-8 py-4">{{ warningTable.eMail.content }}</td>
                            <td class="px-8 py-4"/>
                            <td class="px-8 py-4"/>
                            <td class="px-8 py-4"/>
                            <td class="px-8 py-4">{{ warningTable.status.content }}</td>
                            <td class="px-8 py-4"><router-link to="/results_2"><img src="../assets/pdf.png" alt=""></router-link></td>
                        </tr>
                        <tr>
                            <td class="px-8 py-4">{{ warningTable.eMail.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.fullName.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.phoneNumber.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.sentBy.content }}</td>
                            <td class="px-8 py-4">{{ warningTable.status.content }}</td>
                            <td class="px-8 py-4"><router-link to="/results_3"><img src="../assets/hPdf.png" alt=""></router-link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <!--chat-->
                <!--<div class="mt-14 flex justify-end fixed lg:bottom-6 md:bottom-4 sm:bottom-4 lg:right-6 md:right-4 sm:right-4">
                    <transition name="bounce">
                        <div v-if="show" class="mt-14 flex justify-center absolute bottom-14 right-1 sm:right-1 md:right-0 lg:right-0 lg:w-96 md:w-96 sm:w-96">
                            <div class="bg-white shadow-lg rounded-lg">
                                <div class="chatDiv">
                                    <div class="chatHeader rounded-t-lg w-full bg-yellow-400 py-4 text-white font-medium flex justify-between items-center">
                                        <div></div>
                                        <div class="text-xl">
                                            {{ chat.btnTitle }}
                                        </div>
                                        <div class="flex items-center mr-2">
                                            &lt;!&ndash;<a href="#"><img src="../assets/minus.png" alt=""></a>&ndash;&gt;
                                            <a href="#" v-on:click="show = !show"><img src="../assets/times.png" alt=""></a>
                                        </div>
                                    </div>
                                    <div class="chatBody">
                                        <div class="chatUnderHeader shadow-lg py-2 px-4 flex items-center">
                                            <img src="../assets/questions.png" alt="" class="mr-4">
                                            У вас есть вопросы? <br>
                                            Задавайте свой вопросы
                                        </div>
                                        <div class="mt-8 py-8">

                                            &lt;!&ndash;chat's here&ndash;&gt;
                                            <div class="chat-message">
                                                <div class="flex items-end justify-end my-4 mx-2">
                                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                                                        <div>
                                                <span class="px-4 py-2 rounded-lg inline-block rounded-br-none bg-yellow-400 text-black ">
                                                    Здравствуйте !
                                                    у меня закончился баланс тестов
                                                    можно ли купить определнное количество тестов а не пакет?
                                                </span>
                                                        </div>
                                                    </div>
                                                    <img src="../assets/user_cat.png" alt="First User" class="w-10 h-10 rounded-full order-2">
                                                </div>
                                            </div>
                                            <div class="chat-message">
                                                <div class="flex items-end my-4 mx-2">
                                                    <div class="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                                                        <div>
                                                <span class="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                                    Здравствуйте !
                                                    Нет тесты можно приобрести только ввиде пакетов
                                                </span>
                                                        </div>
                                                    </div>
                                                    <img src="../assets/user_puppy.png" class="w-10 h-10 rounded-full order-1" alt="Second User"/>
                                                </div>
                                            </div>
                                            &lt;!&ndash;/chat's here&ndash;&gt;
                                            <div class="flex items-center mt-12">
                                                <label class="mx-2 w-5/6 flex">
                                                    <input placeholder="Введите сообщение..."
                                                           class="bg-gray-200 w-full border border-gray-400 rounded-lg border-transparent py-2 px-2 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                                                </label>
                                                <a href="#" class="mx-2 w-1/6">
                                                    <img src="../assets/paper_plane.png" alt="">
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>
                    <button v-on:click="show = !show"
                            class="flex items-center bg-yellow-400 py-2 px-4 rounded-full font-medium focus:outline-none collapsible">
                        <img src="../assets/chat.png" alt="">
                        <span class="ml-4">{{ chat.btnTitle }}</span>
                    </button>
                </div>-->
            </div>
        </div>
    </div>
</template>
<script>
    import sideNav from "../components/sideNav";
    import mainNavBar from "../components/mainNavBar";
    export default {
        name: 'tests',
        components: {
            sideNav,
            mainNavBar
        },
        data () {
            return {
                warningCard: {
                    title: 'Отправить тест',
                    uploadTable: 'Загрузить таблицу:',
                    sendButton: 'Отправить тест',
                    chooseYourTest: 'Выберите вид теста',
                },
                warningTable: {
                    eMail: {
                        title: 'Почта', content: 'bektursyn.dastan@gmail.com',
                    },
                    fullName: {
                        title: 'ФИО', content: 'Бектурсын Дастан',
                    },
                    phoneNumber: {
                        title: 'ТЕЛЕФОН', content: '+7(707)516-50-42',
                    },
                    sentBy: {
                        title: 'Отправлено', content: '03.02.21 13:15',
                    },
                    status: {
                        title: 'Статус', content: 'Готово',
                    },
                    results: {
                        title: 'Результаты', content: '',
                    },
                }
            }
        }
    }
</script>
<style>
    .gray_button {
        @apply text-white px-4 py-1 bg-gray-500 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-opacity-50 rounded shadow-lg
    }
    .primary_button {
        @apply text-white px-4 py-1 bg-blue-500 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-800 focus:ring-opacity-50 rounded shadow-lg
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
</style>
