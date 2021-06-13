<template>
  <div class="carrito">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Carrito de <span>Compras</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5">
      <b-row>
        <b-col cols="12" v-if="!login">
          <div class="alert alert-danger" role="alert">
            Para pagar debes
            <div @click="$router.push('/login')" class="alert-link d-inline-block i-s">Iniciar Sesión</div>
          </div>
        </b-col>
        <b-col cols="12" v-if="valorLogeadoPagado">
          <div class="alert alert-success" role="alert">
            ¡Felicidades, su compra ha sido exitosa!
          </div>
        </b-col>
      </b-row>
      <b-row class="py-5">
        <b-col class="py-5" cols="6">
          <h2 class="text-uppercase fst-italic">
            Detalle de <span>tu compra</span>
          </h2>
          <div v-if="carrito && carrito.length === 0">
            <h4> Sin productos en el carro </h4>
          </div>
          <div v-else>
            <div v-for="(comprar, i) in carrito" :key="i">
              <h4 class="py-3 ms-4">{{ comprar.nombre }}</h4>
              <p><i class="fas fa-check-circle"></i>Cantidad: {{ comprar.cantidad }}</p>
              <p><i class="fas fa-check-circle"></i> Valor Mensual: {{ comprar.precio }}</p>
              <p><i class="fas fa-check-circle"></i> Clases por semana: {{ comprar.clasessemanales }}</p>
            </div>
            
          </div>
        </b-col>
        <b-col class="cont-pagar" cols="6">
          <h4 class="text-uppercase display-6 fst-italic text-white">
            Total: ${{ totalCarrito }}
          </h4>
          <img class="py-4" src="../assets/paypall.jpg" />
          <b-button class="btn-pagar" :class="{'disabled' : carrito.length < 1}" @click="comprarEx">Pagar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations } from "vuex";
export default {
  name: "Carrito",
  data() {
    return {
      login: true,
    }
  },
  computed: {
    ...mapState(["carrito"]),
    ...mapGetters(["totalCarrito", "isLogeado", "valorLogeadoPagado"]),
  },
  methods: {
    ...mapMutations(["btnComprar"]),
    comprarEx(){
      this.btnComprar();
      console.log(this.isLogeado)
      this.login = this.isLogeado;
    }
  },
};
</script>

<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/carrito.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.site-heading {
  text-align: center;
  padding: 75px 0 0;
}
span {
  color: #f30b47;
}
.btn-pagar{
  border: none;
}
.btn-pagar:hover{
  border: 1px solid #fff;
   background-color: #082846;
}
.cont-pagar {
  padding: 40px;
  background-color: #082846;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 25px;
  height: 320px;
}
.i-s{
  cursor: pointer;
}
.bg-disable {
  background: #ccc;
  color: beige;
}
@media (max-width: 767px) {
  .col-6 {
    width: 100%;
  }
}
</style>
