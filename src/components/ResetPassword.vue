<template>
    <v-app>
        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" lg="5" class="mx-auto">
                <v-card
                    class="pa-2"
                    elevation="5"
                >
                    <div class="text-center my-5">
                        <v-icon size="40" dark>
                            mdi-key
                        </v-icon>
                        <h3>Reset Your Password</h3>
                        <small>Setup your new password and click reset Button</small>
                    </div>

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-form>
                                        <v-text-field
                                            variant="outlined"
                                            label="New Password"
                                            placeholder="Enter new password"
                                        >

                                        </v-text-field>

                                        <v-text-field
                                            variant="outlined"
                                            label="Confirm Password"
                                            placeholder="Re-type your password"
                                        >

                                        </v-text-field>

                                        <v-btn
                                            class="my-3"
                                            block
                                            color="primary"
                                            size="large"
                                            type="submit"
                                        >
                                            Reset  
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