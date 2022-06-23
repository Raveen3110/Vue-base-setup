<template>
    <div>
        <v-form lazy-validation ref="loginForm">
            <v-row no-gutters>
                <v-col cols="12">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="[rules.required, rules.email]"
                        height="42px"
                        :disabled="resendBtn"
                        color=""
                        type="email"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col
                    cols="12"
                    class="text-center pb-2"
                    style="margin-top: -18px"
                    ><span :style="!resendBtn ? 'opacity:0' : ''">
                        Resend in {{ timer }}s</span
                    >
                </v-col>
                <v-col cols="12" class="text-center">
                    <v-btn
                        class="primary buttonClass text-capitalize"
                        height="48px"
                        :disabled="resendBtn"
                        @click="sendedLink"
                    >
                        <!-- @click="newbtn?sendedLink:resendmail" -->

                        <span v-if="!newbtn">Send</span>
                        <span v-else>Resend</span>
                    </v-btn>
                </v-col>
                <v-col
                    cols="12"
                    class="text-center py-4 forgetpassword orange--text"
                >
                    <span class="pointer" @click="goback"
                        >Goto Sign In</span
                    ></v-col
                >
            </v-row>
        </v-form>
    </div>
</template>
<script>
import RULES from "@/common/fieldRules";

export default {
    name: "forget",
    data() {
        return {
            rules: RULES,
            resendBtn: false,
            email: "",
            timer: 10,
            newbtn: false,
        };
    },
    computed: {},
    methods: {
        goback() {
            this.$emit("changevalue", false);
        },
        resendmail() {
            console.log("resend calling");
        },
        sendedLink() {
            // this.$root.$refs.login.submitForm(this.loginDetail.phone);
            this.timer = 10;
            this.resendBtn = true;
            this.newbtn = true;
            this.setIntervalTime();
        },
        setIntervalTime() {
            setInterval(() => {
                if (this.timer > 0) {
                    this.timer = this.timer - 1;
                    if (this.timer === 0) {
                        this.resendBtn = false;
                    }
                }
            }, 1100);
        },
    },
};
</script>
<style scoped>
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
 


