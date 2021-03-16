<template>
    <div class="Block">
        <sideBar/>
        <mainNavBar/>
        <continent/>
    </div>
</template>
<script>
    import sideBar from "../components/sideBar";
    import mainNavBar from "../components/mainNavBar";
    import continent from "../components/continent";

    export default {
        name: 'Block',
        components: {
            sideBar,
            mainNavBar,
            continent,
        }
    }
</script>
