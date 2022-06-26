<template>
  <section class="pb-8">
    <v-container fluid>
      <v-row justify="center">
        <v-col cols="10">
          <v-row justify="space-around">
            <v-col cols="12" class="text-left mt-8">
              <h1 class="mt-15 mb-4 display-2">Contact Us</h1>        
            </v-col>
          </v-row>
          <v-row justify="center">
            <v-col cols="12" sm="5">
              <small class="font-weight-light mt-3">
                We are E-Architecture , We always respect your dreams. <br/>
                We will do our best to build your dream home with your hard earned money. <br/>
                We care about quality not quantity 
              </small>
              <h3 class="font-weight-light mt-10">
                <b>Here is Our Contact Information : </b>
              </h3>
              <h3 class="font-weight-light mt-3">
                <b>Telephone :</b> +xx (xx) xxxxx-xxxx
              </h3>
              <h3 class="font-weight-light">
                <b>Email : </b> email@email.com
              </h3>
            </v-col>
            <v-col cols="12" sm="7">
              <v-form ref="form" v-model="valid" :lazy-validation="lazy">
                <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    variant="outlined"
                    required
                ></v-text-field>

                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    variant="outlined"
                    required
                ></v-text-field>

                <v-textarea
                    v-model="textArea"
                    :rules="textAreaRules"
                    label="Message Us"
                    variant="outlined"
                    required
                />

                <v-btn
                    :disabled="!valid"
                    color="primary"
                    :dark="valid"
                    rounded
                    block
                    class="mt-3"
                    @click="submit"
                >
                  Send
                </v-btn>
              </v-form>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>  

      <v-snackbar
        v-model="snackbar.enabled"
        :timeout="5000"
        absolute
        right
        top
        :color="snackbar.color"
        elevation="24"
      >
        {{ snackbar.text }}

        <template v-slot:actions>
          <v-btn
            color="white"
            variant="text"
            @click="snackbar.enabled = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
    </section>
</template>
    


<style scoped>
#contact {
  background-color: #f4f7f5;
}

.svg-border-waves .v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}

</style>

<script>
import axios from 'axios'
export default {
  data: () => ({
    icons: ["fa-facebook", "fa-twitter", "fa-linkedin", "fa-instagram"],
    valid: true,

    name: "",

    nameRules: [
      (v) => !!v || "The Name field is required ",
      (v) => (v && v.length >= 6) || "The name must be longer than 6 characters",
    ],

    email: "",

    emailRules: [
      (v) => !!v || "The email field is required",
      (v) => /.+@.+\..+/.test(v) || "Email must be valid",
    ],

    textArea: "",
    textAreaRules: [
      (v) => !!v || "Text field is required",
      (v) => (v && v.length >= 10) || "Minimum 10 chracter required ",
    ],

    lazy: false,
    snackbar: {
      enabled: false,
      text: '',
      color: ''
    }
  }),

  
  methods: {
    async submit() {
      let info = {
        name: this.name,
        email: this.email,
        message: this.textArea
      }
      let error
      try {
        await axios.post('http://localhost:3000/api/contact/store', info).catch(err => {
          throw err;
        });
      } catch (err) {
        error = err
      }

      if(error){
        this.snackbar.text = "Something wrong!. Please try again"
        this.snackbar.color = "red"
        this.snackbar.enabled = true
        this.snackbar.type = "error"
      }else{
        this.snackbar.text = "Successfully sent your message"
        this.snackbar.color = "success"
        this.snackbar.enabled = true
        this.snackbar.type = "success"
      }
        
    },

  }
};
</script>
