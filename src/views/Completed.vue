<template>
    <div>
        <div class="results m-2">
            <div class="flex justify-between items-center px-8 my-8">
                <div>
                    <img src="../assets/i_test_logo.png" class="" alt="" style="width: 169px; height: 62px;">
                </div>
                <div class="">
                    <!--<button class="font-bold">
                        {{ backBtn }}
                    </button>-->
                </div>
            </div>
            <div class="Completed text-2xl font-bold lg:mx-8 md:mx-8 sm:mx-0 lg:mt-36 md:mt-28 mt-12 space-y-12">
                <div class="grid grid-flow-col-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 grid-rows-1 gap-4">
                    <div class="grid-1">
                        <img src="../assets/girl.png" alt="">
                    </div>
                    <div class="grid-2 text-center lg:w-2/3 lg:mt-14 md:mt-12">
                        <div class="font-black lg:text-3xl md:text-2xl my-8">
                            {{ gratitude.title }}
                        </div>
                        <div class="font-bold lg:text-xl md:text-base my-8 space-y-8">
                            <div>
                                {{ gratitude.description }}
                            </div>
                            <div>
                                {{ gratitude.feedback }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Completed',
        data() {
            return {
                backBtn: `Назад`,
                gratitude: {
                    title: `Поздравляем Вы закончили тест`,
                    description: `Ваши результаты были отправлены вашему работадателю.`,
                    feedback: `В ближайшее время с вами свяжутся`,
                }
            }
        }
    };
</script>
