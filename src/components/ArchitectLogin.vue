<template>
    <v-app>
        
        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" md="5" lg="4" class="mx-auto">
                <v-alert
                     :type="type"
                >
                    {{message}}
                </v-alert>
                <v-card
                    class="pa-2"
                    elevation="5"
                >
                    <div class="text-center">
                        <v-avatar size="80" color="indigo">
                            <v-icon size="50" dark>
                                mdi-account-circle
                            </v-icon>
                        </v-avatar>
                        <h2>Login your Architect Account</h2>
                    </div>

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-form @submit="loginHandaler" method="post" >
                                        <v-text-field
                                            v-model="user.email"
                                            :rules="[rules.required]"
                                            label="Email"
                                            placeholder="Enter an valid email!"
                                            variant="outlined"
                                            density="comfortable"
                                            clearable
                                        ></v-text-field>

                                        <v-text-field
                                            v-model="user.password"
                                            
                                            :rules="[rules.required, rules.min]"
                                            :type="showPassword ? 'text' : 'password'"
                                            name="password"
                                            label="Password"
                                            placeholder="Enter your password!"
                                            hint="At least 8 characters"
                                            counter
                                            variant="outlined"
                                            density="comfortable"
                                            clearable
                                            @click:append="showPassword = !showPassword"
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
                                        >
                                            Login  
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
import axios from 'axios'
  export default {

    name: 'LoginForm',

    data () {
      return {
        message: 'Not login',
        type: 'info',
        user: {
            email: '',
            password: ''
        },
        
        showPassword: false,
        rules: {
          required: value => !!value || 'Required.',
        },
      }
    },

    methods: {
        loginHandaler(e){

            axios.post("http://localhost:3000/api/architect/login", this.user)
            .then((res)=>{
                if(res.data.token != null){
                    this.message = "Login successfull"
                    this.type = "success"
                    localStorage.setItem("token", res.data.token);
                    this.$router.push('/dashboard')
                }else{
                    console.log(res.data)
                    this.message = res.data.message
                    this.type = "error"
                }
            })
            //this.$router.push('/dashboard')
            e.preventDefault();
        },
    },

  }
</script>
