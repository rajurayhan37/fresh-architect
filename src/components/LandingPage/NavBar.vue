<template>
    <v-navigation-drawer 
        app
        v-model="drawer"
        temporary
        color="dark" 
        :flat="flat"
        class="navigation"
    >

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

            <a :href="item.go"><v-list-item-title v-text="item.text"></v-list-item-title></a>
          </v-list-item>
         
        </v-list>

        <v-btn 
            v-if="auth == false"
            class=" text-capitalize"
            variant="text"
            color="white"
            size="large"
            @click="loginHandeller"
        >
            Login
        </v-btn>
        <v-btn 
            v-if="auth == false"
            class="text-capitalize"
            variant="text"
            color="white"
            size="large"
            @click="registerBtnHandeller"
        >
            Register
        </v-btn>
        <v-btn 
            v-if="auth == true"
            class="float-right"
            variant="text"
            color="white"
            size="large"
            @click="dashboardBtnHandeller"
        >
            Dashboard
        </v-btn>
    </v-navigation-drawer>

    <v-app-bar 
        app
        :flat="flat"
        color="blue lighten2"
        elevation="5"
        
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
                    ref="button"
                    
                >   
                    <a href="#home"><h1>LOGO</h1></a>
                </v-btn>

                <v-btn 
                    class="float-right"
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    variant="text"
                    color="white"
                    size="large"
                >
                    <a :href="item.go">{{item.text}}</a>
                </v-btn>

                <v-btn 
                    v-if="auth == false"
                    class="float-right"
                    variant="text"
                    color="white"
                    size="large"
                    @click="loginHandeller"
                >
                    Login
                </v-btn>
                <v-btn 
                    v-if="auth == false"
                    class="float-right"
                    variant="text"
                    color="white"
                    size="large"
                    @click="registerBtnHandeller"
                >
                    Register
                </v-btn>
                <v-btn 
                    v-if="auth == true"
                    class="float-right"
                    variant="text"
                    color="white"
                    size="large"
                    @click="dashboardBtnHandeller"
                >
                    Dashboard
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
        color: white;
    }
    a{
        text-decoration: none;
        color: white;
    }

</style>

<script>

    export default {
        data: () => ({
            drawer: null,
            isXs: false,
            bar: false,
            auth: false,

            selectedItem: 0,
            items: [
                { text: 'Home', icon: 'mdi-home-outline', go: '#home'},
                { text: 'Services', icon: 'mdi-information-outline', go:'#service'},
                { text: 'About Us', icon: 'mdi-download-box-outline', go: '#about'},
                { text: 'Contact us', icon: 'mdi-currency-usd', go: '#contact'},
                
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
            },
            dashboardBtnHandeller(){
                this.$router.push('/dashboard')
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
            const token = localStorage.getItem('token')
            if(token != null){
                this.auth = true
            }
        },
    }
</script>