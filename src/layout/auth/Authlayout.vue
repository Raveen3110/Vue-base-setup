<template>
    <div class="AuthLayoutContainer">
        <login />
    </div>
</template>
<script>
import login from "@/views/auth/login.vue";
export default {
    components: { login },
    name: "authlayout",
    data() {
        return {};
    },
    computed: {},
    methods: {},
};
</script>
<style scoped>
.AuthLayoutContainer {
    min-height: 100vh;
    background: linear-gradient(
        180deg,
        rgba(230, 99, 26, 0.37) 65.11%,
        rgba(255, 215, 192, 0.151897) 96.7%,
        rgba(255, 255, 255, 0) 141.74%
    );
    mix-blend-mode: normal;
    /* opacity: 0.5; */
    border-radius: 5px;
    background-size: cover;
}
</style>
