<template>
    <div class="home h-screen font-roboto">
        <particles-bg num="1"  type="color" :config="config" :bg="true"/>
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
            <navBar/>
            <div class="home-content lg:mt-40 mt-20">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-content-center my-8">
                    <div class="">
                        <div class="lg:text-6xl md:text-4xl text-4xl font-black font-body">
                            {{ main.title }}
                        </div>
                        <div class="mt-8 font-bold lg:text-2xl md:text-xl text-xl">
                            {{ main.paragraph }}
                        </div>
                        <div class="mt-8 font-bold lg:text-2xl md:text-xl text-xl">
                            {{ main.paragraph_2 }}
                        </div>
                        <div class="mt-8 font-bold lg:text-2xl md:text-xl text-xl">
                        </div>
                        <div>
                            <ul>
                                <li class="mt-8 font-bold lg:text-2xl md:text-xl text-xl" v-for="item in items" :key="item.message">
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
        <div class="bgAqua mb-24">
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-12 justify-content-center my-8 py-12">
                    <div class="lg:text-4xl md:text-3xl sm:text-2xl font-black lg:mt-12 flex items-center">
                        {{ main_row_1.col_1 }}
                    </div>
                    <div class="space-y-6">
                        <div class="flex justify-center">
                            <img src="../assets/check.png" alt=""/>
                        </div>
                        <div class="font-bold lg:text-3xl md:text-xl text-xl">
                            {{ main_row_1.col_2.title }}
                        </div>
                        <div class="font-bold lg:text-2xl md:text-xl text-xl">
                            {{ main_row_1.col_2.description }}
                        </div>
                    </div>
                    <div class="space-y-6">
                        <div class="flex justify-center">
                            <img src="../assets/check.png" alt=""/>
                        </div>
                        <div class="font-bold lg:text-3xl md:text-xl text-xl">
                            {{ main_row_1.col_3.title }}
                        </div>
                        <div class="font-bold lg:text-2xl md:text-xl text-xl">
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
                        <div class="lg:text-6xl md:text-4xl text-4xl font-normal font-body">
                            {{ main_3.title }}
                        </div>
                        <div class="font-normal text-2xl">
                            {{ main_3.paragraph_1 }}
                        </div>
                        <div class="font-normal text-2xl">
                            {{ main_3.paragraph_2 }}
                        </div>
                        <div class="font-normal text-2xl">
                            {{ main_3.paragraph_3 }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="w-full">
                <div class="oleg">
                    <div class="relative">
                        <img src="../assets/exam.jpg" alt=""/>
                        <div class="absolute left-0 bottom-96">
                            <div class="flex items-center">
                                <div class="text-6xl font-black inset-0 text-white">
                                    Посмотрите видео
                                </div>
                                <div>
                                    <button class="focus:outline-none" data-modal>
                                        <svg class="w-16 h-16 ml-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div class="">
                                <div id="modal" class="modal bg-blue-300 m-8 hidden">
                                    <div class="flex justify-end">
                                        <button id="modalCloseBtn" class="focus:outline-none">
                                            <span class="m-4 text-4xl">&times;</span>
                                        </button>
                                    </div>
                                    <div class="content p-4">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, expedita.
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nihil!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nihil!
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure, nihil!
                                    </div>
                                </div>
                                <div>
                                    <button id="modalBtn" class="modalBtn">
                                        Button
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--<iframe class="w-full h-screen" src="https://www.youtube.com/embed/Md-6tAACnss"
                        title="YouTube video player" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>-->
            </div>
        </div>
        <div>
            <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 bgAqua rounded-13 pb-12">
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
                        <div class="font-normal text-2xl mt-12">
                            {{ main_5.registration.subtitle }}
                        </div>
                        <div class="grid grid-flow-col-2 grid-cols grid-rows-3 gap-8 text-black mt-12">
                            <div class="w-full">
                                <div>
                                    <label>
                                        <input placeholder="  Имя" type="text"
                                               class="formInput">
                                    </label>
                                </div>
                            </div>
                            <div class="">
                                <div>
                                    <label>
                                        <input placeholder="  Фамилия" type="text"
                                               class="formInput">
                                    </label>
                                </div>
                            </div>
                            <div class="grid-3 col-span-2">
                                <label>
                                    <input placeholder="  Почта" type="email"
                                           class="formInput">
                                </label>
                            </div>
                            <div class="grid-3 col-span-2">
                                <label>
                                    <input placeholder="  Пароль" type="password"
                                           class="formInput">
                                </label>
                            </div>
                        </div>
                        <div class="text-center mt-12">
                            <button class="formButton">
                                {{ main_5.registration.button }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="text-center py-12 mt-12 text-lg font-normal">
                ©{{ new Date().getFullYear() }} {{ copyright }}
            </div>
        </div>
    </div>
</template>

<script>
    import navBar from "../components/navBar";
    import { ParticlesBg } from 'particles-bg-vue';

    export default {
        name: 'Home',
        components: {
            navBar,
            ParticlesBg
        },
        data() {
            return {
                config: {

                },
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
                        subtitle: `Мы рады вас видить на нашей платформе`,
                        button: `Получить демо`
                    }
                },
                items: [
                    {message: 'Продуктивность'},
                    {message: 'Личностные качества'},
                    {message: 'Интеллект'},
                    {message: 'Вовлеченность'},
                ],
                copyright: `Все права защищены.`,
            }
        },
        mounted() {
            // const modalBtn = document.querySelector('[data-modal]'),
            //       modal = document.querySelector('.modal'),
            //       modalCloseBtn = document.querySelector('[data-close]');
            //
            // modalBtn.addEventListener('click', () => {
            //     modal.classList.add('show');
            //     modal.classList.add('hide');
            //     alert('hferui');
            //     document.body.style.overflow = 'hidden';
            // });
            // modalCloseBtn.addEventListener('click', () => {
            //     modal.classList.add('hide');
            //     modal.classList.add('show');
            //     document.body.style.overflow = '';
            // });
            const modalBtn = document.querySelector('#modalBtn'),
                  modal = document.querySelector('#modal'),
                  modalCloseBtn = document.querySelector('#modalCloseBtn');

            modalBtn.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
            });
            modalCloseBtn.addEventListener('click', () => {
                modal.classList.add('show');
                modal.classList.remove('hide');
            });
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
    .formInput {
        @apply border border-black rounded-62 py-2 px-2 w-full focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent bg-transparent;
    }
    .formInput::placeholder {
        color: #000;
    }
    .formButton {
        @apply bg-yellow-1000 hover:bg-yellow-400 rounded-62 py-2 px-8 font-extrabold text-lg focus:outline-none
    }
</style>
