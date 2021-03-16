<template>
    <div>
        <div class="lg:ml-80 md:ml-72 my-8 mx-8 px-8">
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
