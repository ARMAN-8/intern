<template>
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
                        {{ cardContentH }}
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
            <div class="card__2">
                <!--card-header-->
                <div class="cardHeader">
                    {{ cardHeader.title }}
                    {{ testName.item_2 }}
                </div>
                <div class="cardContent bg-yellow-white shadow-lg rounded-b-lg p-6">
                    <div class="cardContentH">
                        {{ cardContent.item_1 }}
                    </div>
                    <div class="cardContentP">
                        <p class="my-4">
                            {{ cardContent.p_1 }}
                        </p>
                        <p class="my-4">
                            {{ cardContent.p_2 }}
                        </p>
                    </div>
                </div>
            </div>
            <div class="card__3">
                <!--card-header-->
                <div class="cardHeader">
                    {{ cardHeader.title }}
                    {{ testName.item_3 }}
                </div>
                <div class="cardContent bg-yellow-white shadow-lg rounded-b-lg p-6">
                    <div class="cardContentH">
                        {{ cardContent.item_2 }}
                    </div>
                    <div class="cardContentP">
                        <p class="my-4">
                            {{ cardContent.p_3 }}
                        </p>
                    </div>
                </div>
            </div>
            <!--filling-info-->
            <div class="card__4">
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
</template>
<script>
    import resultTop from "../components/resultTop";

    export default {
        name: 'results_2',
        components: {
            resultTop,
        },
        data() {
            return {
                cardContentH: `Вы набрали 28 баллов. Вы не самозванец.`,
                items: [
                    {message: `До 40 баллов. Вы не подвержены синдрому самозванца. Вы адекватно оцениваете свои успехи.`},
                    {message: `41—60 баллов. У вас есть первые признаки синдрома, но это не критично и еще не факт,
                                что они разовьются в синдром. Следите за чувствами, которые испытываете, когда
                                выслушиваете критику и сравниваете себя с другими.`},
                    {message: '61—80 баллов. У вас часто возникают чувства, которые соответствуют синдрому.' +
                            ' Иногда вам кажется, что вы не достойны успеха и что обманываете других людей. ' +
                            'Вам нужно следить за своим состоянием, чтобы синдром не взял верх над вашей жизнью.'},
                    {message: 'Выше 80 баллов. У вас есть все признаки синдрома самозванца. Вам кажется, что все ваши' +
                            ' успехи — везение и чужие заслуги. А вы на самом деле недостаточно компетентны и просто' +
                            ' пускаете всем пыль в глаза. Вы боитесь неудач и постоянно сравниваете себя с другими. ' +
                            'Нужно предпринять меры, чтобы синдром не помешал вашей жизни и карьере.'},
                ],
                cardHeader: {
                    title: `Результаты теста`,
                },
                testName: {
                    item_1: `“Синдром самозванца”`,
                    item_2: `“Что вами движет?”`,
                    item_3: `“Стратегии поведения в конфликтной ситуации”`,
                },

                cardContent: {
                    item_1: 'Потребность во власти',
                    item_2: 'Стратегию «Акула»',
                    /*paragraph*/
                    p_1: `Сотрудник, у которого эта потребность ведущая, хочет контролировать работу команды,
                                влиять на других людей. Он всегда старается отстаивать свою точку зрения, не боится
                                 конкуренции. Главная цель такого работника — благо компании. Такой специалист умело
                                  руководит командой и достигает цели, контролируя ее действия.`,
                    p_2: `Чем мотивировать? Сотрудник с ведущей потребностью во власти хочет, чтобы его статус
                            признавали и отмечали, что он эффективный лидер, который помогает компании достигать целей
                             и решать стратегические задачи.`,
                    p_3: `Главное для вас — разрешить спор в свою пользу. Ради этого вы готовы пожертвовать отношениями
                            с человеком. Конфронтация для вас может закончиться только однозначно: вы победите, а
                             противник проиграет. Компромисс невозможен.`,
                },
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

    .cardContent {
        /*@apply bg-yellow-white shadow-lg*/
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
