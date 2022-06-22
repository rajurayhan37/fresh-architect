<template>
    <v-container fluid id="aboutus" class="mt-2">
      <v-row  justify="center">
        <v-col cols="10">
          <v-row justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="font-weight-light display-2">About Us</h1>
              <h1 class="font-weight-light">
                We always respect your dreams. We will do our best to build<br/> your dream home with your hard earned money. 
              </h1>
              
              
            </v-col>
            <v-col
              cols="12"
              sm="4"
              class="text-center"
              v-for="(aboutus, i) in aboutuses"
              :key="i"
            >
              <v-hover v-slot:default="{ hover }">
                <v-card
                  class="card"
                  shaped
                  :elevation="hover ? 10 : 4"
                  :class="{ up: hover }"
                >
                  <v-img
                    :src="aboutus.img"
                    max-width="100px"
                    class="d-block ml-auto mr-auto"
                    :class="{ 'zoom-efect': hover }"
                  ></v-img>
                  <h1 class="font-weight-regular">{{ aboutus.title }}</h1>
                  <h4 class="font-weight-regular subtitle-1">
                    {{ aboutus.text }}
                  </h4>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                aboutuses: [
                    {
                        img: require("@/assets/img/2.jpg"),
                        title: "Interior Design",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        img: require("@/assets/img/1.jpg"),
                        title: "Exterior Design",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                    {
                        img: require("@/assets/img/3.jpg"),
                        title: "Space Design",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    },
                ],
            }
        }
    }
</script>