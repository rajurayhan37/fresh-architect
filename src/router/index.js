import { createRouter, createWebHistory } from "vue-router";

//all routes

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
        component: ()=> 
            import('../components/LoginOption.vue'),
    },
    {
        path: '/register/option',
        name: 'register-option',
        component: ()=> 
            import('../components/RegisterOption.vue'),
    },
    {
        path: '/customer/login',
        name: 'customer-login',
        component: ()=> 
            import('../components/LoginForm.vue'),
    },
    {
        path: '/architect/login',
        name: 'architect-login',
        component: ()=> 
            import('../components/ArchitectLogin.vue'),
    },
    {
        path: '/architect/register',
        name: 'register-architect',
        component: ()=> 
            import('../components/RegisterForm.vue'),
    },
    {
        path: '/customer/register',
        name: 'register-customer',
        component: ()=> 
            import('../components/CustomerRegisterForm.vue'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: ()=> 
            import('../components/UserDashboard.vue'),
    },
    {
        path: '/demo',
        name: 'demo',
        component: ()=> 
            import('../components/ArchitectList.vue'),
    },
];

export default createRouter({
    history: createWebHistory('/'),
    routes
})