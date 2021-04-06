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
                <!--search input-->
                <div class="mt-6 flex justify-end">
                    <label>
                        <input placeholder="Поиск"
                               class="bg-gray-200 border rounded-lg py-2 px-2 w-24 md:w-auto focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent">
                    </label>
                </div>
                <!--Table-->
                <div class="mt-12 rounded-lg shadow-lg overflow-x">
                    <table class="bg-gray-50">
                        <tr class="bg-yellow-1000">
                            <th class="w-1/4 text-left table-th">{{ warningTable.eMail.title }}</th>
                            <th class="w-1/6 text-left table-th">{{ warningTable.fullName.title }}</th>
                            <th class="w-1/6 text-left table-th">{{ warningTable.phoneNumber.title }}</th>
                            <th class="w-1/6 text-left table-th">{{ warningTable.sentBy.title }}</th>
                            <th class="w-1/6 text-left table-th">{{ warningTable.status.title }}</th>
                            <th class="w-1/6 text-left table-th">{{ warningTable.results.title }}</th>
                        </tr>
                        <tbody>
                        <tr>
                            <td class="table-th">{{ warningTable.eMail.content }}</td>
                            <td class="table-th">{{ warningTable.fullName.content }}</td>
                            <td class="table-th">{{ warningTable.phoneNumber.content }}</td>
                            <td class="table-th">{{ warningTable.sentBy.content }}</td>
                            <td class="table-th">{{ warningTable.status.content }}</td>
                            <td class="table-th">{{ warningTable.results.content }}</td>
                        </tr>
                        <tr>
                            <td class="table-th">{{ warningTable.eMail.content }}</td>
                            <td class="table-th"/>
                            <td class="table-th"/>
                            <td class="table-th"/>
                            <td class="table-th">{{ warningTable.status.content }}</td>
                            <td class="table-th">{{ warningTable.results.content }}</td>
                        </tr>
                        <tr>
                            <td class="table-th">{{ warningTable.eMail.content }}</td>
                            <td class="table-th">{{ warningTable.fullName.content }}</td>
                            <td class="table-th">{{ warningTable.phoneNumber.content }}</td>
                            <td class="table-th">{{ warningTable.sentBy.content }}</td>
                            <td class="table-th">{{ warningTable.status.content }}</td>
                            <td class="table-th"><router-link to="/results"><img src="../assets/pdf.png" alt=""></router-link></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sideNav from "../components/sideNav";
    import mainNavBar from "../components/mainNavBar";
    export default {
        name: 'testing',
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
    .table-th {
        @apply lg:px-4 lg:py-4 md:px-4 md:py-4
    }
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
