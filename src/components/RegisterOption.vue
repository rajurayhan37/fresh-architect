<template>
    <v-app>
        <v-parallax max-height="100%" src="@/assets/img/bgHero.jpg">
            <v-main class="d-flex justify-center">
                <v-container>
                    <v-row class="mt-5 align-center" >
                        <v-container>
                            <div class="d-flex justify-center">
                                <h1>Register option Area</h1>
                            </div>
                            <div class="d-flex justify-center mt-2 pl-15 pr-15">
                                <small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                Enim qui suscipit eum a laborum alias soluta dignissimos distinctio dolor itaque.</small>
                            </div>
                        </v-container>                          
                    </v-row>

                    <v-row class="mt-15 d-flex justify-center">
                        <v-col cols="12" sm="12" xm="12" md="6" lg="6">
                            <v-hover
                                v-slot="{ isHovering, props }"
                            >
                                <v-card
                                    :elevation="isHovering ? 12 : 2"
                                    height="250"
                                    max-width="250"
                                    class="mx-auto"
                                    v-bind="props"
                                >
                                    <div class="d-flex justify-center pt-5">
                                        <v-avatar
                                            
                                            size="x-large"
                                            color="blue"
                                        >
                                            <v-img src="../assets/img/icon2.png" />
                                        </v-avatar>
                                    </div>

                                    <v-card-text class=" text-center text-h6">
                                        <h3>Architect Account</h3>
                                       <small>Lorem ipsum dolor sit amet.</small>
                                    </v-card-text>
                                    <v-divider class="my-4"></v-divider>
                                    
                                    <div class="d-flex justify-center mt-6">
                                        <v-btn
                                            color="blue"
                                            variant="outlined"
                                            @click="architectBtn"
                                        >
                                            Register
                                        </v-btn>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-col>
                        <v-col cols="12" sm="12" xm="12" md="6" lg="6">
                            <v-hover
                                v-slot="{ isHovering, props }"
                            >
                                <v-card
                                    :elevation="isHovering ? 12 : 2"
                                    height="250"
                                    max-width="250"
                                    class="mx-auto"
                                    v-bind="props"
                                >
                                    <div class="d-flex justify-center pt-5">
                                        <v-avatar
                                            
                                            size="x-large"
                                            color="blue"
                                        >
                                            <v-img src="../assets/img/icon1.png" />
                                        </v-avatar>
                                    </div>

                                    <v-card-text class=" text-center text-h6">
                                        <h3>Customer Account</h3>
                                       <small>Lorem ipsum dolor sit amet.</small>
                                    </v-card-text>
                                    <v-divider class="my-4"></v-divider>
                                    
                                    <div class="d-flex justify-center mt-6">
                                        <v-btn
                                            color="blue"
                                            variant="outlined"
                                            @click="custBtn"
                                        >
                                            Register
                                        </v-btn>
                                    </div>
                                </v-card>
                            </v-hover>
                        </v-col>
                    </v-row>
                </v-container>
            </v-main>
            
            <v-footer class="footer">
                <v-row >
                    <v-col cols="12" class="d-flex justify-center">
                        <h3>You already have an Account?</h3>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <h3>Login!</h3>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, perferendis.</small>
                    </v-col>
                </v-row>
            </v-footer>
        </v-parallax>
    </v-app>
</template>

<style>
    .v-row{
        color: white;
    }
    .footer{
        position: flex;
        margin-top: 20px;
        width: 100%;
        background-color: transparent;
    }
</style>


<script>
    export default {
        data() {
            return {
                images: [
                    require("@/assets/img/icon2.png"), 
                    require("@/assets/img/icon3.png")
                ],
            }
        },

        methods: {
            architectBtn(){
                this.$router.push('/architect/register');
            },
            custBtn(){
                this.$router.push('/customer/register');
            },
        }
    }
</script>