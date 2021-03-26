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
        <div class="bgAqua">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-content-center my-8 py-12">
                    <div class="lg:text-4xl md:text-3xl sm:text-2xl font-black lg:mt-12">
                        {{ main_row_1.col_1 }}
                    </div>
                    <div class="space-y-6">
                        <div class="flex justify-center">
                            <img src="../assets/check.png" alt=""/>
                        </div>
                        <div class="font-extrabold">
                            {{ main_row_1.col_2.title }}
                        </div>
                        <div class="font-medium">
                            {{ main_row_1.col_2.description }}
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="flex justify-center">
                            <img src="../assets/check.png" alt=""/>
                        </div>
                        <div class="font-extrabold">
                            {{ main_row_1.col_3.title }}
                        </div>
                        <div class="font-medium">
                            {{ main_row_1.col_3.description }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                    <div class="">
                        <img src="../assets/coming_soon.png" alt=""/>
                    </div>
                    <div class="lg:pt-36 md:pt-12 space-y-6">
                        <div class="lg:text-4xl md:text-3xl sm:text-2xl font-bold lg:mt-12">
                            {{ main_3.title }}
                        </div>
                        <div>
                            {{ main_3.paragraph_1 }}
                        </div>
                        <div>
                            {{ main_3.paragraph_2 }}
                        </div>
                        <div>
                            {{ main_3.paragraph_3 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="w-full bor">
                <iframe class="w-full h-screen" src="https://www.youtube.com/embed/Md-6tAACnss"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>
            </div>
        </div>
        <div>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bgAqua rounded-lg">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 justify-content-center my-8 py-12">
                    <div>
                        <div>
                            <img src="../assets/cool_guy.png" alt=""/>
                        </div>
                        <div>
                            <div class="lg:text-4xl md:text-3xl sm:text-2xl font-black lg:mt-12">
                                {{ main_5.under_img_title }}
                            </div>
                        </div>
                    </div>
                    <div class="text-center lg:mt-20">
                        <div class="lg:text-4xl md:text-3xl sm:text-2xl font-bold lg:mt-12">
                            {{ main_5.registration.title }}
                        </div>
                        <div class="font-bold mt-12">
                            {{ main_5.registration.subtitle }}
                        </div>
                    </div>
                    <div>

                    </div>
                    <div class="flex justify-center">
                        <button class="">
                            {{ main_5.registration.button }}
                        </button>
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
                main_row_1: {
                    col_1: `Для кого нужны эти тесты:`,
                    col_2: {
                        title: `Для собственников бизнеса`,
                        description: `Которые уже четко понимают, что дальше строить компанию в этом бардаке невозможно и нужно срочно что-то менять.`,
                    },
                    col_3: {
                        title: `Для сотрудников в найме`,
                        description: `Которые хотят повышения и готовы брать на себя ответственность за развитие системы в бизнесе.`,
                    }
                },
                main_3: {
                    title: `INTERN TEST`,
                    paragraph_1: `-База нужных тестов при найме сотрудников`,
                    paragraph_2: `- Узнаете сильные и слабые стороны ваших сотрудников`,
                    paragraph_3: `- Тест Gallup поможет узнать какой категории людей сотрудник относиться, и поможем совершенствовать эти природные навыки`,
                },
                main_5: {
                    under_img_title: `Создайте свой тестовый аккаунт и получите 5 тестов`,
                    registration: {
                        title: `Регистрация`,
                        subtitle: `Мы ради вас видить на нашей платформе`,
                        button: `Получить демо`
                    }
                },
                items: [
                    {message: 'Продуктивность'},
                    {message: 'Личностные качества'},
                    {message: 'Интеллект'},
                    {message: 'Вовлеченность'},
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

    ul li:first-line, ul li:first-line {
        color: black;
    }
    .bgAqua {
        background-color: #5FE2FF;
    }
</style>
