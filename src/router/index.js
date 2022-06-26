import { createRouter, createWebHistory } from "vue-router";
//all routes

function checkAuth(){
    const token = localStorage.getItem('token')
    if(token == null){
        return false
    }else{
        return true
    }
}


const routes = [
    {
        path: '/',
        name: 'home',
        component: ()=> 
            import('../components/HomePage.vue'),
    },
    {
        path: '/login/option',
        name: 'loginoption',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/LoginOption.vue'),
    },
    {
        path: '/register/option',
        name: 'register-option',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/RegisterOption.vue'),
    },
    {
        path: '/customer/login',
        name: 'customer-login',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/LoginForm.vue'),
    },
    {
        path: '/architect/login',
        name: 'architect-login',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/ArchitectLogin.vue'),
    },
    {
        path: '/architect/register',
        name: 'register-architect',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/RegisterForm.vue'),
    },
    {
        path: '/customer/register',
        name: 'register-customer',
        beforeEnter: (to, from, next) => {
            if(!checkAuth()){
                return next()
            }else{
                return next({
                    name: 'dashboard'
                })
            }
        },
        component: ()=> 
            import('../components/CustomerRegisterForm.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        beforeEnter: (to, from, next) => {
            if(checkAuth()){
                return next()
            }
        },
        component: ()=> 
            import('../components/UserDashboard.vue'),
    },
    {
        path: '/demo',
        name: 'demo',
        component: ()=> 
            import('../components/ArchitectList.vue'),
    },

    { 
        path: '/dashboard', 
        redirect: '/' 
    }
];



export default createRouter({
    history: createWebHistory('/'),
    routes
})