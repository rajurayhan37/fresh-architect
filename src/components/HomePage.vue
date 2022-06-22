<template>
    <v-app>
        <navigation :color="color" :flat="flat" />
        <Home/>
        <About/>
        <AboutWork/>
        <ArchitectList/>
        <Download/>
        <Contact/>
        <FooterSection/>
    </v-app>
</template>

<script>
    import navigation from './LandingPage/NavBar'
    import Home from './LandingPage/HomeSection'
    import About from './LandingPage/AboutSection'
    import AboutWork from './LandingPage/AboutWork'
    import FooterSection from './LandingPage/FooterSection'
    import Download from "./LandingPage/DownloadSection";
    import Contact from "./LandingPage/ContactSection";
    import ArchitectList from './ArchitectList.vue'

    export default {
        name: 'UserDashboard',
        components: {
            navigation,
            Home,

            About,
            AboutWork,
            FooterSection,
            Download,
            Contact,
            ArchitectList
        },

        data() {

        },
    }
</script>



