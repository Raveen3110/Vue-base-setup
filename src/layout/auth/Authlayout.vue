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
        rgba(44, 167, 164, 0.37) 10%,
        rgba(180, 224, 223, 0.131891) 60%,
        rgba(255, 255, 255, 0) 100%
    );
    mix-blend-mode: normal;
    /* opacity: 0.5; */
    border-radius: 5px;
    background-size: cover;
}
</style>
