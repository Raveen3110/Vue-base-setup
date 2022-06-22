	<template>
    <div @click="goback">setpassword</div>
</template>
<script>
export default {
    name: "setpassword",
    data() {
        return {
            goback() {
                console.log("ASD");
                this.$emit("toggle", false);
            },
        };
    },
    computed: {},
    methods: {},
};
</script>
<style scoped>
</style>
 


