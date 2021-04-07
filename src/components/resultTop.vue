<template>
    <div class="mx-8 my-8">
        <div class="flex justify-between">
            <div>
                <img src="../assets/i_test_logo.png" class="h-12 w-auto" alt=""/>
            </div>
            <div class="font-extrabold lg:text-2xl md:text-2xl text-xl">
                <router-link to="/tests">{{ backToPage }}</router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'resultTop',
        data() {
            return {
                backToPage: `Назад`,
            }
        }
    }
</script>
