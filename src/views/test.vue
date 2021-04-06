<template>
    <div class="test m-2 bor">
        <div>
            <!--<img src="../assets/i_test_logo.png" class="" alt="" style="width: 169px; height: 62px;">\-->
        </div>
        <div class="test bor text-2xl font-bold lg:mx-52 md:mx-10 sm:mx-0 lg:mt-36 md:mt-28 mt-12">
            <div class="justify-center w-full bor">
                <div class="bg-yellow-300 flex items-center rounded-lg p-8 lg:m-8">
                    {{ question }}
                </div>
            </div>
            <div class="flex items-center justify-between">
                <button class="bg-yellow-300 lg:px-8 lg:py-4 lg:m-8 md:py-2 md:px-6 md:my-4 my-4 px-2 rounded-lg focus:outline-none">
                    {{ answer.no }}
                </button>
                <button class="bg-yellow-300 lg:px-8 lg:py-4 lg:m-8 md:py-2 md:px-6 md:my-4 my-4 px-2 rounded-lg">
                    {{ answer.maybe }}
                </button>
                <button class="bg-yellow-300 lg:px-8 lg:py-4 lg:m-8 md:py-2 md:px-6 md:my-4 my-4 px-2 rounded-lg">
                    {{ answer.yes }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        name: 'test',
        components: {
        },
        data() {
            return {
                question: `Делаете ли вы необдуманные замечания или обвинения, о которых потом сожалеете?`,
                answer: {
                    no: `НЕТ`,
                    maybe: `МОЖЕТ БЫТЬ`,
                    yes: `ДА`,
                }
            }
        }
    }
</script>
