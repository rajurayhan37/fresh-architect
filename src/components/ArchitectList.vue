<template>
    <v-container>
        <v-row justify="center my-5">
            <v-card elevation="0">
                <v-card-title class="text-center"><h2>Our Architects</h2></v-card-title>
            </v-card>
        </v-row>
        <v-row class="my-10">
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
                                color="blue"
                                size="large"
                                class="mx-auto"
                            >
                                <img v-if="user.image != null" :src="getPhoto(user.image)" alt="Profile" width="60">
                                <span v-else class="white--text text-h6 font-weight-bold">{{ getInitials(user.name) }}</span>
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
                            <v-chip 
                                rounded
                                color="info"
                            >
                                Total Review: <b>{{user.review.length}}</b> 
                            </v-chip>
                        </v-card-content>
                        <input :value="getAvgRating(user.review)" type="hidden"/>
                        <div class="text-center">
                            <v-rating 
                                v-model="rating"
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
                rating: 5,
                users: [

                ]
            }
        },

        created() {
            this.loadData();
        },

        methods: {

            getPhoto(photo){
                return "uploads/architects/" + photo
            },

            getInitials(name){
                const arr = name.split(' ')
                const initials = arr[0][0] + arr[arr.length-1][0]
                return initials
            },

            getAvgRating(review){
                //const jsonData = JSON.stringify(review)
                try{
                    if(review.length > 0){
                        let total = 0;
                        for(var i=0; i<review.length; i++){
                            console.log()
                            total += review[i].rating
                        }

                        this.rating = total / review.length
                    }else{
                        this.rating =  0
                    }
                    
                }catch(err){
                    console.log(err)
                }
                
            },
            loadData(){

                axios.get('http://localhost:3000/api/architect/reviews')
                .then((res)=>{
                    //console.log(res.data)
                    this.users = res.data       
                })
                .catch((error)=>{
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                    } else {
                        console.log('Error', error.message);
                    }
                });
            }
        }
    }
</script>