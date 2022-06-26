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

                    <v-container>
                        <v-row>
                            <v-col cols="12" sm="12" md="12">
                                <v-form
                                    method="post"
                                    @submit="userRegister"
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <v-text-field
                                        v-model="name"
                                        :counter="30"
                                        :rules="nameRules"
                                        label="Full Name"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        clearable
                                    ></v-text-field>

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
                                        v-model="dob"
                                        :rules="dobRules"
                                        label="Date of Birth"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        clearable
                                        type="date"
                                    ></v-text-field>

                                    <v-text-field
                                        type="password"
                                        v-model="password"
                                        :rules="passwordRules"
                                        label="Password"
                                        :counter="15"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        placeholder="Password"
                                        clearable
                                    ></v-text-field>
                                    <v-text-field
                                        type="password"
                                        v-model="confirm_password"
                                        :rules="cnfpRules"
                                        :counter="15"
                                        label="Password"
                                        required
                                        variant="outlined"
                                        density="comfortable"
                                        placeholder="Confirm Password"
                                        clearable
                                    ></v-text-field>
                                    <v-btn
                                        :disabled="!valid"
                                        color="success"
                                        class="mr-4"
                                        @click="validate"
                                        block
                                        type="submit"
                                    >
                                        Register
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

    name: 'RegisterForm',

    data () {
      return {
        snackbar: false,
        message: null,
        color: 'success',
        
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 30) || 'Name must be less than 30 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        dob: '',
        dobRules: [
            v => !!v || 'Email is required',
        ],
        password: '',
        passwordRules: [
            v => !!v || 'Name is required',
            v => (v && v.length >= 8  && v.length <= 15) || 'Password must be less than 8 and more tha 15 characters',
        ],
        confirm_password: '',
        cnfpRules: [
            v => !!v || 'Name is required',
            v => (v == this.password) || 'Password not matched!',
            v => (v && v.length >= 8  && v.length <= 15) || 'Password must be less than 8 and more tha 15 characters',
        ]
      }
    },
    methods: {

        userRegister(e){
            const user = {
                name: this.name,
                email: this.email,
                dob: this.dob,
                password: this.password
            }
            axios.post('http://localhost:3000/api/architect/add', user)
            .then((res)=>{
                this.message = res.data.message
                this.snackbar = true
                this.color = "success"
                this.$router.push('/customer/login')

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
