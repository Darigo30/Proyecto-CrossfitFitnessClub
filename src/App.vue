<template>
  <div id="app">
    <div v-if="mostrarMensaje">
      <div class="alert alert-danger" role="alert">¡Ha ocurrido un error en la consulta de los planes!</div>
    </div>
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
  data() {
    return {
      mostrarMensaje: false
    }
  },
  components: {
    Nav,
    Footer,
  },
  methods: {
    ...mapActions(["getDataApi"]),
  },
  created() {
    this.getDataApi().catch(() => {this.mostrarMensaje = true; setTimeout(()=> this.mostrarMensaje = false,3000)});
  },
};
</script>
