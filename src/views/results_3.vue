<template>
    <div>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
            <div class="mb-24">
                <!--menu-->
                <resultTop/>
            </div>
            <!--content-->
            <div class="mx-8 my-8 lg:space-y-16 md:space-y-16 space-y-8">
                <div class="card__1">
                    <!--card-header-->
                    <div class="cardHeader">
                        {{ cardHeader.title }}
                        {{ testName.item_1 }}
                    </div>
                    <div class="cardContent bg-yellow-white shadow-lg rounded-b-lg p-6">
                        <div class="cardContentH">
                            {{ score }}
                        </div>
                        <div class="cardContentP">
                            <ul>
                                <li class="cardLi mt-8 font-bold lg:text-2xl md:text-xl text-xl" v-for="item in items" :key="item.message">
                                    {{ item.message }}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--filling-info-->
                <div class="card__2">
                    <!--card-header-->
                    <div class="cardHeader">
                        {{ fillingInfo }}
                    </div>
                    <div class="cardContent bg-yellow-white shadow-lg rounded-b-lg p-6">
                        <div class="cardContentP">
                            {{ fillingTIme }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import resultTop from "../components/resultTop";

    export default {
        name: `results_3`,
        components: {
            resultTop,
        },
        data() {
            return {
                cardHeader: {
                    title: `Результаты теста`
                },
                testName: {
                    item_1: `“IQ Test”`,
                },
                score: `Вы набрали 165 баллов.`,
                items: [
                    {message: `70-75 баллов. Очень низкий уровень интеллекта. Не подходит для руководящих должностей
                                и должностей, требующих применения умственных способностей.`},
                    {message: `80-100 баллов. Низкий уровень интеллекта. Человек с таким интеллектом с трудом оценивает
                                ситуацию и принимает разумные решения. Не подходит для руководящих должностей и решения
                                 задач, требующих применения аналитических способностей.`},
                    {message: `100-120 баллов. Средний уровень интеллекта. Человек с таким интеллектом в целом может
                                оценивать ситуации. Этого уровня интеллекта хватит для принятия не очень сложных
                                решений, но такой сотрудник не рекомендован для руководящих должностей.`},
                    {message: `120-140 баллов. Высокий уровень интеллекта. Человек с таким интеллектом способен хорошо
                                оценивать ситуации, принимать решения, которые требуют логического и аналитического
                                мышления. Подходит для руководящих и линейных должностей.`},
                    {message: `от 140 баллов. Очень высокий уровень интеллекта. Человек с таким интеллектом способен
                                оценивать ситуацию, принимать решения, которые требуют логического и аналитического
                                 мышления. Рекомендован на руководящие и любые другие должности.`},
                ],
                fillingInfo: `Информация о заполнении`,
                fillingTIme: `Время выполнения: 00:18:52`,
            }
        }
    }
</script>
<style>
    .cardHeader {
        @apply bg-yellow-1000 font-semibold text-2xl p-4 rounded-t-lg
    }
    .cardContentH {
        @apply lg:text-5xl md:text-4xl text-2xl font-extrabold my-12
    }
    .cardContentP {
        @apply lg:text-2xl md:text-2xl text-xl font-normal
    }
    .cardLi {
        list-style-type: disc;
        margin-left: 2em;
        color: #000;
    }
</style>
