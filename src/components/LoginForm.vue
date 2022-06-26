<template>
    <v-app>
        
        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" md="5" lg="4" class="mx-auto">
                <v-snackbar
                    v-model="alert"
                    :type="type"
                    timeout="4000"
                    :color="color"
                >
                    {{message}}
                    <template v-slot:actions>
                        <v-btn
                            color="white"
                            variant="text"
                            @click="alert = false"
                            class="text-capitalize"
                        >
                            Close
                        </v-btn>
                    </template>
                </v-snackbar>
                <v-card
                    class="pa-2"
                    elevation="5"
                >
                    <div class="text-center mt-2">
                        <v-avatar class="mb-5" size="80" color="indigo">
                            <v-icon size="50" dark>
                                mdi-account-circle
                            </v-icon>
                        </v-avatar>
                        <h3>Login your Customer Account</h3>
                    </div>
                    <v-container class="mt-5">
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-form 
                                    method="post"
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                    @submit="loginHandaler"
                                >
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="Email"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        clearable
                                    ></v-text-field>

                                    <v-text-field
                                        type="password"
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="Password"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        placeholder="Password"
                                        clearable
                                    ></v-text-field>

                                    <v-label>
                                        Forget password?
                                    </v-label>

                                    <v-btn
                                        class="my-3"
                                        block
                                        color="primary"
                                        size="large"
                                        type="submit"
                                        :disabled="!valid"
                                    >
                                        Login  
                                    </v-btn>
                                </v-form>
                                
                            </v-col>

                        </v-row>
                    </v-container>
                </v-card>
            </v-col>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'
  export default {

    name: 'LoginForm',

    data () {
      return {
        message: 'Not login',
        type: 'info',
        alert: false,
        valid: true,
        color: '',
        
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Please enter valid email!',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Password is required',
        ],
        
      }
    },

    methods: {
        loginHandaler(e){
            const info = {
                email: this.email,
                password: this.password
            }
            axios.post("http://localhost:3000/api/customer/login", info)
            .then((res)=>{
                if(res.data.token != null){
                    this.alert = true;
                    this.color = 'success'
                    this.message = "Login successfull"
                    this.type = "success"
                    localStorage.setItem("token", res.data.token);
                    this.$router.push('/dashboard')
                }else{
                    this.alert = true
                    this.color = 'error'
                    console.log(res.data)
                    this.message = res.data.message
                    this.type = "error"
                }
            })
            e.preventDefault();
        },
    },

  }
</script>
