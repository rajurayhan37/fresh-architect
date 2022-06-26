<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <v-card elevation="0">
          <v-row justify="space-around">
            <v-col cols="12" class="text-center">
              <h1 class="mt-15 mb-4 display-2">Services</h1>
              <small class="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime.<br/> your dream home with your hard earned money. 
              </small>
              </v-col>
            </v-row>
          <v-row class="text-center mt-5 pa-5">
            <v-col cols="12" sm="6" md="4" lg="4">
              <div class="flex-center">
                <v-hover
                  v-slot="{ isHovering, props }"
                >
                    <v-card :elevation="isHovering ? 12 : 2" v-bind="props">
                      <v-card-text>
                        <div class="flex-center">
                          <div class="circle1">
                            <v-img src="~@/assets/img/1.jpg"></v-img>
                          </div>
                        </div>
                        <div class="text--disabled  text-h5 my-2">Exterior Design</div>
                        <v-divider class="my-2"/>
                        <div class="text-uppercase text-blue">Custom Design</div>
                        <v-divider class="my-2"/>
                        <div class="text-uppercase text-blue">Customizition your Building Architecture</div>
                        <v-divider class="my-2"/>
                        <div class="text-uppercase text-blue">Others Features ... </div>
                        <v-divider class="my-2"/>
                        <div class="text-uppercase text-h4 mt-6 text-blue">$5000 </div>
                        <v-btn
                            v-bind="size"
                            rounded
                            outlined
                            color="blue"
                            class="mt-6"
                        >
                          Start now!
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </div>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
              <div class="flex-center">
                <v-hover
                  v-slot="{ isHovering, props }"
                >
                  <v-card :elevation="isHovering ? 12 : 2" v-bind="props">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <v-img src="~@/assets/img/3.jpg"></v-img>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Interior Design</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Custom Design</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Customizition your Building Architecture</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Others Features ... </div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-h4 mt-6 text-blue">$5000 </div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        Start now!
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-hover>  
              </div>
            </v-col>
            <v-col cols="12" sm="6" md="4" lg="4">
              <div class="flex-center">
                <v-hover
                  v-slot="{ isHovering, props }"
                >
                  <v-card :elevation="isHovering ? 12 : 2" v-bind="props">
                    <v-card-text>
                      <div class="flex-center">
                        <div class="circle1">
                          <v-img src="~@/assets/img/2.jpg"></v-img>
                        </div>
                      </div>
                      <div class="text--disabled text-uppercase text-h5 my-2">Space Planning</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Custom Design</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Customizition your Building Architecture</div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-blue">Others Features ... </div>
                      <v-divider class="my-2"/>
                      <div class="text-uppercase text-h4 mt-6 text-blue">$2000 </div>
                      <v-btn
                          v-bind="size"
                          rounded
                          outlined
                          color="blue"
                          class="mt-6"
                      >
                        Start now!
                      </v-btn>
                    </v-card-text>
                  </v-card>
                </v-hover>  
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.header {
  background-color: #283e79;
  color: white;
}

.circle1 {
  border-radius: 50%;
  width: 150px;
  height: 150px;
  background-color: #f0f8ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle2 {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #e0effc;
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.svg-border-rounded svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  color: #f4f7f5;
  z-index: -1;
}

#pricing {
  z-index: 0;
}

.content {
  z-index: 1;
}

svg {
  overflow: hidden;
}

section {
  position: relative;
}
</style>


<script>
export default {
  data: () => ({
    
  }),
}
</script>