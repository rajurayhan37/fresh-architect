<template>
  <div>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      dark
      src="@/assets/img/bgDrawer.jpg"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img src="@/assets/img/logo.png" alt="Logo" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title class="title">E-Architecture</v-list-item-title>
            <v-list-item-subtitle>architect</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider />

      <v-list dense>
        <v-list-item
          v-for="([icon, text, link], i) in items"
          :key="i"
          link
          @click="$vuetify.goTo(link)"
        >
          <v-list-item-icon class="justify-center">
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="subtitile-1">{{
              text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      :color="color"
      :flat="flat"
      dark
      class="px-15"
      :class="{ expand: flat }"
    >
      <v-toolbar-title>
        <v-img src="@/assets/img/logo.png" max-width="50px" />
      </v-toolbar-title>
      <v-spacer />
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="mr-4"
        v-if="isXs"
      />
      <div v-else>
        <v-btn text @click="$vuetify.goTo('#hero')">
          <span class="mr-2">Home</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#aboutus')">
          <span class="mr-2">About Us</span>
        </v-btn>
        <v-btn text @click="$vuetify.goTo('#service')">
          <span class="mr-2">Service</span>
        </v-btn>
        <!-- <v-btn text @click="$vuetify.goTo('#download')">
          <span class="mr-2">Download</span>
        </v-btn> -->
        

        <v-btn text @click="$vuetify.goTo('#contact')">
          <span class="mr-2">Contact Us</span>
        </v-btn>
        
        <v-btn rounded outlined text @click="$vuetify.goTo('#')">
          <span class="mr-2">Login</span>
        </v-btn>
        
      </div>
    </v-app-bar>
  </div>
</template>

<style scoped>
.v-toolbar {
  transition: 0.8s;
}

.expand {
  height: 80px !important;
  padding-top: 8px;
}
</style>

<script>
export default {
  data: () => ({
    drawer: null,
    isXs: false,
    items: [
      ["mdi-home-outline", "Home", "#hero"],
      ["mdi-information-outline", "Service", "#service"],
      ["mdi-download-box-outline", "About Us", "#aboutus"],
      ["mdi-currency-usd", "Contact Us", "#contact"],
      ["mdi-email-outline", "Login", "#Login"],
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
};
</script>
