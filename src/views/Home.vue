<template>
    <div class="home h-screen">
        <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <NavBar/>
            <div class="home-content mt-16">
                <div class="grid grid-flow-cols-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 justify-content-center my-8">
                    <div class="text-white">
                        <div class="text-4xl font-extrabold">
                            home
                            {{ main.title }}
                        </div>
                        <div class="mt-8">
                            {{ main.paragraph }}
                        </div>
                        <div class="mt-8">
                            {{ main.paragraph_2 }}
                        </div>
                        <div class="mt-8">
                            <!--<ul id="list-rendering">
                                <li v-for="todo in todos">
                                    {{ todo.text }}
                                </li>
                            </ul>-->
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
    import NavBar from "../components/layouts/NavBar";

    export default {
        name: 'Home',
        components: {
            NavBar
        },
        data() {
            return {
                main: {
                    title: 'INTERN TEST',
                    paragraph: 'Сервис онлайн-оценки персонала для малого и среднего бизнеса. Повышает скорость и точность найма.',
                    paragraph_2: ' Тестируйте и измеряйте у кандидатов и текущих сотрудников: ',
                },

            }
        }
    }
    /*const ListRendering = {
        data() {
            return {
                todos: [{ message: 'Foo' }, { message: 'Bar' }]
            }
        }
    };
    Vue.createApp(ListRendering).mount('#list-rendering')*/
</script>
<style>
    .home {
        background-image: url('../assets/main-bg.jpg');
    }
</style>
