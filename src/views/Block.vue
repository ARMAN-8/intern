<template>
    <div class="flex">
        <sideNav class="h-screen"/>
        <mainContent class="w-full"/>
    </div>
</template>
<script>

    import mainContent from "../components/mainContent";
    import sideNav from "../components/sideNav";

    export default {
        name: 'Block',
        components: {
            mainContent,
            sideNav,
        }
    }
</script>
