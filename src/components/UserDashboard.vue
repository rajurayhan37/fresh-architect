<template>
    <v-app>
        <v-navigation-drawer app>
            <v-card class="d-flex justify-center">
                
            </v-card>
            <v-divider inset></v-divider>
            <v-card
                class="mx-auto"
                max-width="90%"
            >

                <v-avatar
                    class="my-5 avatar"
                    color="info"
                    size="80px"
                >
                    <span class="white--text text-h6">{{ user.initials }}</span>
                </v-avatar>  

                <v-btn
                    class="edit-btn"
                    color="info"
                    size="small"
                    variant="text"
                >
                    Edit profile
                </v-btn>


                <v-list>
                    <!-- <v-list-subheader>ACTIONS</v-list-subheader> -->
                    <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :value="item"
                    active-color="primary"
                    variant="elevated"
                    >
                    <v-list-item-avatar start>
                        <v-icon :icon="item.icon"></v-icon>
                    </v-list-item-avatar>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-card>
        </v-navigation-drawer>

        <v-app-bar app>
            
            <v-container>
                <v-row justify="end">
                    <v-col cols="7">
                        <v-text-field
                            class="search-box"
                            color="info"
                            density="comfortable"
                            variant="outlined"
                        >

                        </v-text-field>
                    </v-col>
                    <v-col cols="1">
                        <v-btn
                            icon="mdi-star"
                            color="info"
                        ></v-btn>
                    </v-col>
                    <v-col cols="1">
                        <v-btn
                            icon="mdi-star"
                            color="info"
                        ></v-btn>
                    </v-col>
                    <v-col cols="1">
                        <v-menu
                        bottom
                        min-width="200px"
                        rounded
                        offset-y
                        location="start"
                    >

                        <template v-slot:activator="{ props }">
                        <v-btn
                            icon
                            v-bind="props"
                        >
                            <v-avatar
                            color="info"
                            size="large"
                            >
                            <span class="white--text text-h6">{{ user.initials }}</span>
                            </v-avatar>
                        </v-btn>
                        </template>

                        <v-card>
                        <v-card-text>
                            <div class="mx-auto text-center">
                            <v-avatar
                                color="info"
                                size="large"
                            >
                                <span class="white--text text-h6">{{ user.initials }}</span>
                            </v-avatar>
                            <h3>{{ user.fullName }}</h3>
                            <p class="text-caption mt-1">
                                {{ user.email }}
                            </p>
                            <v-divider class="my-3"></v-divider>
                            <v-btn
                                color="info"
                                rounded
                                variant="text"
                            >
                                Edit Account
                            </v-btn>
                            <v-divider class="my-3"></v-divider>
                            <v-btn
                                @click="logOut"
                                color="red"
                                rounded
                                variant="text"
                            >
                                Logout
                            </v-btn>
                            </div>
                        </v-card-text>
                        </v-card>
                    </v-menu>
                    </v-col>
                </v-row>
            </v-container>
        </v-app-bar>


        <v-main>
            <v-container fluid>
                <ArchitectItem/>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
        </v-app>
</template>

<style>
    .search-box{
        height: 20px;
        width: 100%;
    }

    .avatar{
        display: flex;
        margin: auto;
        top: 10px;
    }
    .edit-btn{
        display: flex;
        margin: auto;
    }

</style>

<script>
    import ArchitectItem from './ArchitectItem.vue';
    import jwt from "vue-jwt-decode";

    export default {
        name: 'UserDashboard',
        components: {
            ArchitectItem
        },

        data() {
            return {
                user: {
                    initials: 'RK',
                    fullName: 'Rayhan Kobir',
                    email: 'rayhan@gmail.com',
                },
                selectedItem: 1,

                items: [
                    { text: 'Profile', icon: 'mdi-clock' },
                    { text: 'Setting', icon: 'mdi-account' },
                    { text: 'Message', icon: 'mdi-flag' },
                    { text: 'Logout', icon: 'mdi-flag' },
                ],
            }
        },

        methods: {
            getUserDetails(){
                try{
                    const token = localStorage.getItem("token");
                    const data = jwt.decode(token, "usersignin token")
                    this.user.initials = this.nameInitializer(data.name)
                    this.user.fullName = data.name
                    this.user.email = data.email
                }catch(err){
                    this.$router.push('/login')
                }
            },

            nameInitializer(name){
                console.log(name)
                const newarr = name.split(" ");
                const first = newarr[0];
                const last = newarr[newarr.length - 1];
                return first[0] + last[0]
            },

            logOut(){
                this.$router.push('/')
                localStorage.removeItem("token");
            }
        },
        created() {
            this.getUserDetails();
        },
    }
</script>



