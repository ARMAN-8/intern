<template>
    <div class="flex">
        <sideNav/>
        <div class="w-full">
            <mainNavBar/>
            <div class="mx-4 lg:mx-10 my-12">
                <!--Обучение-->
                <div class="font-medium my-6">
                    {{ topics.title_1 }}
                </div>
                <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
                    <div class="grid-1 space-y-4">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                </div>

                <div class="font-medium my-6">
                    {{ topics.title_1 }}
                </div>
                <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
                    <div class="grid-1 space-y-4">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                </div>

                <div class="font-medium my-6">
                    {{ topics.title_1 }}
                </div>
                <div class="grid grid-flow-col-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-8">
                    <div class="grid-1 space-y-4">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="bg-yellow-400 rounded-lg py-4">
                            <div class="text-center py-2 font-bold text-xl">
                                Типы сотрудников
                            </div>
                            <div class="m-4">
                                <img src="../assets/internYoutube.png" alt=""/>
                            </div>
                            <div class="text-center font-medium">
                                Разбор всех видов сотрудников <br>
                                слабые и сильные стороны
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import sideNav from "../components/sideNav";
    import mainNavBar from "../components/mainNavBar";

    export default {
        name: 'videoLessons',
        components: {
            sideNav,
            mainNavBar,
        },
        data() {
            return {
                topics: {
                    title_1: `Видеоуроки на тему Эффективного сотрудника`,
                }
            }
        }
    }
</script>
