<template>
    <div class="AuthLayoutContainer authContent">
        <v-card class="cardContent">
            <v-card-title class="d-flex justify-center">
                <lottie :options="defaultOption" />
            </v-card-title>
            <v-card-text>
                <router-view></router-view>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import Lottie from "vue-lottie";
import * as logo from "@/assets/login-logo-1.json";

export default {
    components: { lottie: Lottie },
    name: "authlayout",
    data() {
        return {
            defaultOption: { animationData: logo.default, loop: 1 },
        };
    },
    computed: {},
    methods: {},
};
</script>
<style scoped>
.authContent {
    min-height: 100vh;
    display: flex;
    justify-content: center;
}
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
.cardContent {
    width: 459px;
    margin: 0;
    padding: 5px 25px;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.25);
    border-radius: 20px !important;
}
</style>
