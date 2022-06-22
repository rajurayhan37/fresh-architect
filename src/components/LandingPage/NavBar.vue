<template>
    <v-navigation-drawer 
        app
        v-model="drawer"
        temporary
        color="dark" 
        :flat="flat"
        class="navigation"
    >
        <v-list class="navigation-list">
          <v-list-item
            prepend-avatar="https://cdn.vuetifyjs.com/images/john.png"
            title="John Leider"
            subtitle="john@vuetifyjs.com"
          >
            <template v-slot:append>
              <v-list-item-avatar end>
                <v-btn size="small" variant="text" icon="mdi-menu-down"></v-btn>
              </v-list-item-avatar>
            </template>
          </v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list
            class="navigation-list"
            nav
            dense
        >
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :value="item"
            active-color="blue"
          >
            <v-list-item-avatar>
              <v-icon :icon="item.icon"></v-icon>
            </v-list-item-avatar>

            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item>
         
        </v-list>
    </v-navigation-drawer>

    <v-app-bar 
        app
        :flat="flat"
        color="transparent"
        elevation="0"
        
    >
        <v-row class="d-flex justify-center">
            <v-col v-if="isXs" sm="12">
                <v-row>
                    <v-col cols="6">
                        <v-app-bar-nav-icon 
                            v-model="bar"
                            @click="drawer = !drawer"
                        />
                    </v-col>
                    <v-col cols="6" class="d-flex justify-center align-center">
                        LOGO
                    </v-col>
                </v-row>
            </v-col>

            <v-col v-else lg="12">
                <v-btn
                    color="white"
                    @click="$vuetify.goTo('#about')"
                >
                    <h1>LOGO</h1>
                </v-btn>

                <v-btn 
                    class="float-right"
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    variant="text"
                    color="white"
                    size="large"
                    @click="$vuetify.goTo(item.go)"
                >
                    {{item.text}}
                </v-btn>

                <v-btn 
                    class="float-right"
                    variant="text"
                    color="white"
                    size="large"
                    @click="loginHandeller"
                >
                    Login
                </v-btn>
                <v-btn 
                    class="float-right"
                    variant="text"
                    color="white"
                    size="large"
                    @click="registerBtnHandeller"
                >
                    Register
                </v-btn>
            </v-col>
        </v-row> 
    </v-app-bar>
</template>

<style>
    .navigation{
        background: url( '@/assets/img/bgDrawer.jpg') no-repeat center center;
        background-size: cover;
        background-color: red;
    }
    .navigation-list{
        background-color: transparent;
    }
</style>

<script>
    export default {
        data: () => ({
            drawer: null,
            isXs: false,
            bar: false,

            selectedItem: 0,
            items: [
                { text: 'Home', icon: 'mdi-home-outline', go:"#home" },
                { text: 'Services', icon: 'mdi-information-outline', go:"#service" },
                { text: 'About Us', icon: 'mdi-download-box-outline', go:"#aboutus" },
                { text: 'Contact us', icon: 'mdi-currency-usd', go:"#contactus"  },
                
            ],
        }),

        props: {
            color: String,
            flat: Boolean,
        },
        methods: {
            onResize() {
                this.isXs = window.innerWidth < 850;
            },
            loginHandeller(){
                this.$router.push('/login/option')
            },
            registerBtnHandeller(){
                this.$router.push('/register/option')
            }
        },
        watch: {
            isXs(value) {
            if (!value) {
                if (this.drawer) {
                    this.drawer = false;
                }
            }
            },
        },
        mounted() {
            this.onResize();
            window.addEventListener("resize", this.onResize, { passive: true });
        },
    }
</script>