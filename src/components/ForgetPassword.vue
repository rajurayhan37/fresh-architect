<template>
    <v-app>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" lg="5" class="mx-auto">
                <v-card
                    class="pa-2"
                    elevation="5"
                >
                    <div class="text-center">
                        <v-icon size="40" dark>
                            mdi-key
                        </v-icon>
                        <h3>Forget Password</h3>
                        <small>We will send a four digit verivication code to this email or phonr number</small>
                    </div>

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-form>
                                        <v-text-field
                                            variant="outlined"
                                            label="Email"
                                            placeholder="Enter your email"
                                        >

                                        </v-text-field>

                                        <v-btn
                                            class="my-3"
                                            block
                                            color="primary"
                                            size="large"
                                            type="submit"
                                        >
                                            Continue  
                                        </v-btn>
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
    name: 'ForgetPassword',
    data () {
        //
    },
  }
</script>