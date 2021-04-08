<template>
    <div class="flex">
        <sideNav/>
        <div class="w-full">
            <mainNavBar/>
            <!--Тарифы-->
            <div class="mx-4 lg:mx-10 my-12">
                <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                    <div class="grid-1">
                        <div class="priceCard">
                            <div class="text-4xl font-bold font-body mb-8">
                                {{ tariff_1.title }}
                            </div>
                            <div class="font-medium">
                                {{ tariff_1.tests_100 }}
                            </div>
                            <div class="flex items-center mb-8">
                                <div class="text-2xl font-bold">
                                    {{ tariff_1.price }}
                                </div>
                                <div class="font-medium ml-2">
                                    {{ tariff_1.test_piece }}
                                </div>
                            </div>
                            <div class="mb-8 font-bold">
                                {{ tariff_1.description }}
                            </div>
                            <div>
                                <button class="text-black px-8 py-1 bg-gray-100 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                    {{ tariff_1.buyButton }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="priceCard">
                            <div class="text-4xl font-bold font-body mb-8">
                                {{ tariff_1.title }}
                            </div>
                            <div class="font-medium">
                                {{ tariff_1.tests_100 }}
                            </div>
                            <div class="flex items-center mb-8">
                                <div class="text-2xl font-bold">
                                    {{ tariff_1.price }}
                                </div>
                                <div class="font-medium ml-2">
                                    {{ tariff_1.test_piece }}
                                </div>
                            </div>
                            <div class="mb-8 font-bold">
                                {{ tariff_1.description }}
                            </div>
                            <div>
                                <button class="text-black px-8 py-1 bg-gray-100 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                    {{ tariff_1.buyButton }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="priceCard">
                            <div class="text-4xl font-bold font-body mb-8">
                                {{ tariff_1.title }}
                            </div>
                            <div class="font-medium">
                                {{ tariff_1.tests_100 }}
                            </div>
                            <div class="flex items-center mb-8">
                                <div class="text-2xl font-bold">
                                    {{ tariff_1.price }}
                                </div>
                                <div class="font-medium ml-2">
                                    {{ tariff_1.test_piece }}
                                </div>
                            </div>
                            <div class="mb-8 font-bold">
                                {{ tariff_1.description }}
                            </div>
                            <div>
                                <button class="text-black px-8 py-1 bg-gray-100 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                    {{ tariff_1.buyButton }}
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="grid-1">
                        <div class="priceCard">
                            <div class="text-4xl font-bold font-body mb-8">
                                {{ tariff_1.title }}
                            </div>
                            <div class="font-medium">
                                {{ tariff_1.tests_100 }}
                            </div>
                            <div class="flex items-center mb-8">
                                <div class="text-2xl font-bold">
                                    {{ tariff_1.price }}
                                </div>
                                <div class="font-medium ml-2">
                                    {{ tariff_1.test_piece }}
                                </div>
                            </div>
                            <div class="mb-8 font-bold">
                                {{ tariff_1.description }}
                            </div>
                            <div>
                                <button class="text-black px-8 py-1 bg-gray-100 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 rounded-full shadow-lg">
                                    {{ tariff_1.buyButton }}
                                </button>
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
        name: 'tariffs',
        components: {
            sideNav,
            mainNavBar,
        },
        data() {
            return {
                tariff_1: {
                    title: `Пакет Мини`,
                    tests_100: `100 тестирований`,
                    price: `19 800 Тг`,
                    test_piece: `19 800 тг/тест`,
                    description: `Количество тестов в тарифе рассчитано для найма 1-3 сотрудников.`,
                    buyButton: `Купить`
                }
            }
        }
    }
</script>
<style>
    .priceCard {
        background: #2578C5;
        @apply text-white p-8 rounded-13 shadow-lg ;
    }
    .priceCard:hover {
        @apply m-2
    }
</style>
