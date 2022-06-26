<template>
    <v-parallax dark src="@/assets/img/bgHero.jpg" >
      <v-row justify="center">
        <v-col cols="10">
          <v-row justify="center">
            <v-col cols="12" class="mt-16 mb-4">
              <h1 class="mb-4 mt-16">E-Architect</h1>
              <h1 class="font-weight-light">We are E-Architect<br />We know your Dream<br/></h1>
              <h2> Our Plan is always fulfill your Dream </h2>
              <v-btn
                rounded
                variant="outlined"
                large
                color="white"
                class="mt-5"
              >
                <a href="#contact"> Contact Us</a>
                <v-icon class="ml-2">mdi-arrow-down</v-icon>
              </v-btn>
            </v-col>
            <v-col cols="12" md="6" xl="4" class="hidden-sm-and-down"> </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-parallax>
</template>

<script>


export default {

  data() {
    return {
      
    };
  },

};
</script>

<style>

.svg-border-waves v-image {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 3rem;
  width: 100%;
  overflow: hidden;
}
.mt-16{
  color: whitesmoke;
}

a{
  text-decoration: none;
  color: white;
}

#hero {
  z-index: 0;
}
.svg-border-waves img {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  margin-bottom: -2px;
  z-index: -1;
}

.card {
  min-height: 300px;
  padding: 10px;
  transition: 0.5s ease-out;
}

.card .v-image {
  margin-bottom: 15px;
  transition: 0.75s;
}

.card h1 {
  margin-bottom: 10px;
}

.zoom-efect {
  transform: scale(1.1);
}

.up {
  transform: translateY(-20px);
  transition: 0.5s ease-out;
}
</style>

<style>
section {
  position: relative;
}
</style>
