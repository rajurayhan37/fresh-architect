<template>
    <v-app>
        <navigation :color="color" :flat="flat" />
        <section id="home">
            <Home/>
        </section>
        <section id="about">
            <About/>
            <AboutWork/>
        </section>
        <section id="service">
            <Services/>
        </section>
            <Download/>
        <section id="architect">
            <ArchitectList/>
        </section>
        <section id="contact">
            <Contact/>
        </section>
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
    import Services from './LandingPage/ServiceSection.vue'

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
            ArchitectList,
            Services
        },

        data() {

        },
    }
</script>



