<template>
    <v-app>
        <v-app-bar app>    
            <v-container>
                <v-row >
                    <!-- <v-col cols="1">
                        <v-btn
                            variant="outlined"
                            color="orange"
                        >
                            Home
                        </v-btn>
                    </v-col> -->
                    <v-spacer></v-spacer>
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
                            <img v-if="user.image != null" :src="getPhoto(user.image)" alt="Profile Image" width="60"/>
                            <span v-else class="white--text text-h6">{{ user.initials }}</span>
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
                                <img v-if="user.image != null" :src="getPhoto(user.image)" alt="Profile Image" width="60"/>
                                <span v-else class="white--text text-h6">{{ user.initials }}</span>
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
                                @click="goToHome"
                            >
                                Go to home
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
            <v-container>
                <v-row
                    align="center"
                    class="spacer pa-5 pl-10"
                    no-gutters
                >
                    <strong> <h2>Profile</h2></strong>
                </v-row>

                <v-expansion-panels variant="popout" class="pa-4">
                    <v-expansion-panel
                        v-for="(message, i) in messages"
                        :key="i"
                        hide-actions
                    >
                    <v-expansion-panel-title>
                        <v-row
                            align="center"
                            class="spacer"
                            no-gutters
                        >
                            <v-col
                                cols="4"
                                sm="2"
                                md="1"
                            >
                                <v-avatar
                                size="36px"
                                >
                                    
                                <div v-if="message.avatar">   
                                    <img
                                        v-if="user.image != null"
                                        alt="Avatar"
                                        :src="getPhoto(user.image)"
                                        width="50"
                                    />

                                    <span v-else class="white--text text-h6">{{ user.initials }}</span>

                                </div> 
                                <v-icon
                                    v-else
                                    :color="message.color"
                                    :icon="message.icon"
                                ></v-icon>
                                </v-avatar>
                            </v-col>

                            <v-col
                                class="hidden-xs-only text-left ml-2"
                                sm="5"
                                md="3"
                            >
                                <strong v-html="message.name"></strong>

                            </v-col>

                            <v-col
                                class="text-no-wrap text-left"
                                cols="5"
                                sm="3"
                            >
                                <v-chip
                                v-if="message.new"
                                :color="`${message.color}-lighten-1`"
                                class="ml-0 mr-2 text-black"
                                label
                                small
                                >
                                {{ user.email}}
                                </v-chip>
                                <strong v-html="message.title"></strong>
                            </v-col>

                            <v-col
                                v-if="message.excerpt"
                                class="text-grey text-truncate hidden-sm-and-down"
                            >
                                &mdash;
                                {{ message.excerpt }}
                            </v-col>
                        </v-row>
                    </v-expansion-panel-title>

                    </v-expansion-panel>
                </v-expansion-panels>

                <v-container>
                    <v-card 
                        align="center"
                        class="spacer ma-4 pl-10"
                        no-gutters
                    >
                        <v-row class="d-flex justify-center my-1">
                            <v-chip
                                size="x-large"
                                color="info lighten1"
                            >
                                Edit profile image
                            </v-chip>
                        </v-row>

                        <v-row 
                            align="center"
                            class="spacer pa-5"
                            no-gutters
                        >
                            <v-col>
                                <v-avatar
                                    size="x-large"
                                >
                                    <img v-if="user.image != null" :src="getPhoto(user.image)" width="60"/>
                                    <v-avatar
                                        v-else 
                                        color="info"
                                    >

                                        <strong v-html="user.initials"></strong>
                                    </v-avatar>
                                </v-avatar>
                            </v-col>
                        </v-row>
                        
                        <v-form
                            @submit="updateProfile"
                        >
                            <v-row 
                                justify="center"
                                class="spacer pa-5 justify-center"
                                no-gutters
                            >

                                <v-col cols="1">
                                    <v-btn
                                        color="green lighten1"
                                        variant="outlined"
                                        type="submit"
                                    >
                                        Save
                                    </v-btn>
                                </v-col>
                                <v-col cols="2" >
                                    <v-file-input 
                                        id="file" 
                                        ref="file"
                                        name="file" 
                                        type="file" 
                                        label="Chose"
                                        width="80"
                                        variant="outlined"
                                        color="green lighten1"
                                        density="compact"
                                    >
                                    </v-file-input>
                                </v-col>
                            </v-row>
                        </v-form>
                </v-card>
                </v-container>
                
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
    import axios from 'axios'
    import jwt from "vue-jwt-decode";


    export default {
        name: 'UserDashboard',
        components: {

        },

        data() {
            return {
                user: {
                    initials: 'RK',
                    fullName: 'Rayhan Kobir',
                    email: 'rayhan@gmail.com',
                    image: null
                    
                },
                selectedItem: 1,

                items: [
                    { text: 'Profile', icon: 'mdi-clock' },
                    { text: 'Setting', icon: 'mdi-account' },
                    { text: 'Message', icon: 'mdi-flag' },
                    { text: 'Logout', icon: 'mdi-flag' },
                ],

                messages: [
                    {
                        avatar: 'https://avatars0.githubusercontent.com/u/9064066?v=4&s=460',
                        name: 'John Leider',
                        title: 'Welcome!',
                        excerpt: 'Thank you for joining our e-architect...',
                    },

                    {
                        color: 'green',
                        icon: 'mdi-email',
                        name: 'Email',
                        new: 1,
                        total: 3,
                        title: '',
                    },
                    

                ],
                
                file: '',
                id: '',
                
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
                    this.user.image = data.image
                    this.id = data.id
                    this.messages[0].name = data.name
                }catch(err){
                    this.$router.push('/')
                }
            },

            goToHome(){
                this.$router.push('/')
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
            },

            getPhoto(photo){
                return "uploads/architects/" + photo
            },

            updateProfile(e){
                let formData = new FormData();
                formData.append('file', this.file);

                axios.post( 'http://localhost:3000/api/architect/upload/2',
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data'
                        }
                })
                .then(function(){
                    console.log('SUCCESS!!');
                })
                .catch(function(){
                    console.log('FAILURE!!');
                });
                e.preventDefault();
            },

            handleFileUpload(){
                this.file = this.$refs.file.files[0];
            }
        },
        created() {
            this.getUserDetails();
        },
    }
</script>



