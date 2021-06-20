<template>
  <div id="app">
    <Nav />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Nav,
    Footer,
  },
  methods: {
    ...mapActions(["getDataApi", "setDataPlanes"]),
  },
  created() {
    this.getDataApi();
    this.setDataPlanes();
  },
};
</script>
