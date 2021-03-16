<template>
    <div>
        <div class="lg:ml-80 md:ml-0 my-8 lg:mx-8 md:mx-8 sm:mx-2 lg:px-8 md:px-4 sm:px-2">
            <mainContent/>
        </div>
    </div>
</template>
<script>
    import mainContent from "./mainContent";

    export default {
        name: 'continent',
        components: {
            mainContent
        }
    }
</script>
