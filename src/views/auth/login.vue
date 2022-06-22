<template>
    <div class="authContent">
        <v-card class="cardContent">
            <v-card-title class="d-flex justify-center pt-10">
                <img
                    src="@/assets/wwtlogo.svg"
                    alt=""
                    width="250px"
                    heigth="64px"
                />
            </v-card-title>
            <div class="titleText primary--text text--lighten-1 px-8">Welcome, please sign in</div>
            <v-card-text class="px-8">
                <v-form lazy-validation ref="loginForm">
                    <v-row no-gutters>
                        <v-col cols="12">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                :rules="[rules.required, rules.email]"
                                height="42px"
                                color=""
                                type="email"
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="password"
                                label="Password"
                                height="42px"
                                :rules="[rules.required]"
                                :type="!showPassword ? 'password' : 'text'"
                                :append-icon="
                                    showPassword ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append="showPassword = !showPassword"
                                outlined
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="text-center">
                            <v-btn
                                dark
                                class="primary buttonClass text-capitalize"
                                height="48px"
                                @click="submit"
                            >
                                <span>Sign in</span>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" class="text-center py-4 forgetpassword orange--text"
                            >
                            <span class="pointer">Forgot your password?</span></v-col
                        >
                    </v-row>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>
<script>
import RULES from "@/common/fieldRules";
import { mapActions } from "vuex";

export default {
    name: "login",
    data() {
        return {
            rules: RULES,
            showPassword: false,
            password: "",
            email: "",
        };
    },
    computed: {},
    methods: {
        ...mapActions({
            showSnackbar: "snackBar/showSnackbar",
        }),
        submit() {
            this.showSnackbar({
                    text: "API calling",
                    color: "red",
                });
            // if (this.$refs.loginForm.validate()) {
            //     console.log("Email", this.email);
            //     console.log("Password", this.password);
            //     // this.showSnackbar({
            //     //     message: "API calling",
            //     //     color: "w",
            //     // });
            // }
        },
    },
};
</script>
<style scoped>
.authContent {
    min-height: 100vh;
    display: flex;
    justify-content: center;
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
.titleText {
    font-weight: 400;
    font-size: 18px;
}
.buttonClass {
    width: 165px;
    border-radius: 5px;
}
.forgetpassword {
    font-weight: 400;
    font-size: 13px;
    line-height: 48px;
}
</style>
