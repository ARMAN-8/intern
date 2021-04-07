<template>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 min-h-screen">
        <div class="mb-24">
            <!--menu-->
            <resultTop/>
        </div>
        <!--content-->
        <div class="mx-8 my-8 lg:space-y-16 md:space-y-16 space-y-8">
            <div class="testQuestion">
                {{ question }}
            </div>
            <div class="flex justify-between">
                <button class="testAnswer">
                    {{ answer.no }}
                </button>
                <button class="testAnswer">
                    {{ answer.maybe }}
                </button>
                <button class="testAnswer">
                    {{ answer.yes }}
                </button>
            </div>
        </div>
    </div>
</template>
<script>
    import resultTop from "../components/resultTop";

    export default {
        name: 'test',
        components: {
            resultTop,
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
<style>
    .testQuestion {
        @apply bg-yellow-1000 lg:p-12 md:p-12 p-8 font-semibold lg:text-5xl md:text-4xl text-base rounded-lg;
    }
    .testAnswer {
        @apply bg-yellow-1000 lg:px-16 lg:py-6 md:px-8 md:py-4 px-4 py-2 font-semibold lg:text-5xl md:text-4xl text-base rounded-lg
    }
</style>
