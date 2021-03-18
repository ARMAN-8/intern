<template>
    <div class="home h-screen">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <navBar/>
            <div class="home-content lg:mt-40">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-content-center my-8">
                    <div class="">
                        <div class="lg:text-4xl md:text-3xl sm:text-2xl font-black">
                            {{ main.title }}
                        </div>
                        <div class="mt-8 font-semibold text-medium">
                            {{ main.paragraph }}
                        </div>
                        <div class="mt-8 font-semibold text-medium">
                            {{ main.paragraph_2 }}
                        </div>
                        <div class="mt-8 font-semibold text-medium">
                        </div>
                        <div>
                            <ul>
                                <li class="lg:pb-6 font-semibold text-medium" v-for="item in items" :key="item.message">
                                    {{ item.message }}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <img src="../assets/girl.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from "../components/navBar";

    export default {
        name: 'Home',
        components: {
            navBar
        },
        data() {
            return {
                main: {
                    title: 'INTERN TEST',
                    paragraph: 'Сервис онлайн-оценки персонала для малого и среднего бизнеса. Повышает скорость и точность найма.',
                    paragraph_2: ' Тестируйте и измеряйте у кандидатов и текущих сотрудников: ',
                },
                items: [
                    { message: 'Продуктивность' },
                    { message: 'Личностные качества' },
                    { message: 'Интеллект' },
                    { message: 'Вовлеченность' },
                ],
            }
        }
    }
</script>
<style>
    ul li {
        list-style-type: disc;
        margin-left: 2em;
        color: #FFCC00;
    }
    ul li:first-line, ul li:first-line  {
        color: black;
    }
</style>
