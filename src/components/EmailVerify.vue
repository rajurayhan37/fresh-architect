<template>
    <v-app>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" lg="5" class="mx-auto">
                <v-card
                    class="pa-2"
                    elevation="5"
                >
                    <div class="text-center my-5">
                        <v-icon size="40" color="indigo">
                            mdi-check-circle
                        </v-icon>
                        <h3>Verify your email account!</h3>
                        <small>Please check your email and, Enter the four digit verification code here</small>
                    </div>

                    <v-divider ></v-divider>

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-form @submit="getOtp" method="post">
                                        
                                        <div class="container d-flex justify-center my-2">
                                            <input v-model="otp.otp1" name="otp1" class="field" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1">
                                            <input v-model="otp.otp2" name="otp2" class="field" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1">
                                            <input v-model="otp.otp3" name="otp3" class="field" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1">
                                            <input v-model="otp.otp4" name="otp4" class="field" type="number" oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);" maxlength="1">
                                        </div>

                                        <div class="d-flex justify-center my-4">
                                            <v-btn
                                                class="my-3"
                                                color="primary"
                                                size="large"
                                                type="submit"
                                            >
                                                Verify  
                                            </v-btn>
                                        </div>
                                    </v-form>
                                    
                                </v-col>

                            </v-row>
                        </v-container>
                    </v-form>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
</template>

<script>

  export default {
    name: 'EmailVerify',

    data () {
        return {
            otp: {
                otp1: null,
                otp2: null,
                otp3: null,
                otp4: null
            },

            isComplete: false 
        }
    },

    methods: {
        getOtp(e){
            let otpArry = Object.values(this.otp);
            let otp = otpArry.join('');
            console.log(otp)
            e.preventDefault();
        }
    }
  }
</script>

<style>
    h3{
        font-weight: 800;
        margin-top: 5px;
    }
    small{
        font-weight: 500;
    }
    .field{
        border: 2px solid gray;
        width: 10%;
        height: 50px;
        margin-right: 5px;
        border-radius: 5px;
        text-align: center;
        font-size: medium;
        font-weight: 600;
    }
    .field:focus{
        outline: none;
        border: 2px solid indigo;
    }
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

/* Background colour of an input field with value */
.otp-input.is-complete {
  background-color: #e4e4e4;
}


</style>

