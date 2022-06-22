<template>
    <v-app>
        <v-snackbar 
            top
            v-model="snackbar"
            toped
            :timeout="4000"
            :color="color"
        >
            <span>{{message}}.</span>
            <v-btn
                class="float-right"
                size="small"
                icon="mdi-delete"
                color="white"
                @click="snackbar = false"
            ></v-btn>
        </v-snackbar>


        <v-main class="d-flex justify-center align-center">
            <v-col cols="12" md="5" lg="4" class="mx-auto">
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
                        <h2>Create your Architect Account</h2>
                    </div>

                    <v-form>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="12" md="12">
                                    <v-form @submit="userRegister" method="post">
                                        <v-text-field
                                            v-model="user.name"
                                            :rules="[rules.required]"
                                            label="Full Name"
                                            placeholder="Enter your full name!"
                                            variant="outlined"
                                            density="comfortable"
                                            clearable
                                        ></v-text-field>

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
                                            v-model="user.dob"
                                            :rules="[rules.required]"
                                            label="Date of Birth"
                                            placeholder="Enter your date of birth!"
                                            variant="outlined"
                                            density="comfortable"
                                            hint="Year-Month-Day"
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

                                        <v-text-field
                                            v-model="user.confirm_password"
                                            
                                            :rules="[rules.required, rules.min]"
                                            :type="showConfirmPassword ? 'text' : 'password'"
                                            name="confirm_password"
                                            label="Confirm Password"
                                            placeholder="Enter your password!"
                                            hint="At least 8 characters"
                                            counter
                                            variant="outlined"
                                            density="comfortable"
                                            clearable
                                            @click:append="showConfirmPassword = !showConfirmPassword"
                                        ></v-text-field>
                                        

                                        <v-btn
                                            block
                                            color="primary"
                                            size="large"
                                            type="submit"
                                        >
                                            Register  
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

    name: 'RegisterForm',

    data () {
      return {

        user: {
            name: '',
            email: '',
            dob: '',
            password: '',
            confirm_password: ''

        },

        snackbar: false,
        message: null,
        color: 'success',
        
        showPassword: false,
        showConfirmPassword: false,
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
      }
    },
    methods: {

        userRegister(e){

            axios.post('http://localhost:3000/api/architect/add', this.user)
            .then((res)=>{
                this.message = res.data.message
                this.snackbar = true
                this.color = "success"
            })
            .catch((error)=>{
                if (error.response) {
                    this.snackbar = true;
                    this.color = "error"
                    this.message = error.response.data.message;
                    console.log(error.response.data);
                    console.log(error.response.status);
                } else {
                    console.log('Error', error.message);
                }
            });
            
            e.preventDefault();
        },

    },
  }
</script>
