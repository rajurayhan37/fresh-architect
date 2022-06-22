<template>
    <v-container>
        <v-row>
            <v-card>
                <v-card-title>All Architects:</v-card-title>
            </v-card>
        </v-row>
        <v-row>
            <v-col lg="3" x-sm="12" sm="12" md="12" v-for="user in users" v-bind:key="user.id">
                <v-hover
                    v-slot="{ isHovering, props }"
                >
                    <v-card
                        :elevation="isHovering ? 8 : 1"
                        v-bind="props"
                    >
                        <v-card-header></v-card-header> 
                        <div class="d-flex">
                            <v-avatar 
                                class="mx-auto"
                                color="info"
                                size="large"
                            >
                                <span class="white--text text-h5">{{user.initials}}</span>
                            </v-avatar>
                        </div>

                        <h3 class="text-center">{{user.name}}</h3>

                        <v-chip
                            color="green"
                            text-color="white"
                            size="small"
                        >
                            Architect
                        </v-chip>
                        <v-divider class="my-3"></v-divider>

                        <v-card-content class="d-flex justify-center align-center">
                            <v-btn 
                                rounded
                                color="info"
                            >
                                Message
                            </v-btn>
                        </v-card-content>

                        <div class="text-center">
                            <v-rating 
                                v-model="user.rating"
                                color="orange"
                                size="small"
                                readonly
                            >
                            </v-rating>
                        </div>
                    </v-card>
                </v-hover>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
    
</style>

<script>
    import axios from 'axios'
    export default {
        name: 'ArchitectItem',

        data(){
            return {
                users: [
                    { id: 1, name: "Raju", initials: "RN", rating: 4.5},
                    { id: 2, name: "Rayhan Kobir", initials: "RK", rating: 4.5},
                    { id: 3, name: "Raju Rayhan", initials: "RR", rating: 4.5},
                ]
            }
        },

        created() {
            this.loadData();
        },

        methods: {
            loadData(){
                axios.get("http://localhost:3000/api/architect/all")
                .then((res)=>{
                    console.log(res.data)
                    this.users = res.data
                })
            }
        }
    }
</script>