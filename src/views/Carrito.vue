<template>
  <div class="carrito">
    <template>
    <b-modal v-model="modalShow" hide-footer title="¡Advertencia!">
        <div class="d-block text-center">
          <h4>¿Quieres comprar ahora?</h4>
        </div>
        <div class="d-flex justify-content-between">
          <b-button
            class="mt-3"
            variant="outline-danger"
            block
            @click="modalShow = false"
            >Cancelar</b-button
          >
          <b-button class="mt-3" variant="outline-success" block @click="comprarEx"
            >Aceptar</b-button
          >
        </div>
    </b-modal>
    </template>
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
    
    <b-container v-if="actualUser && actualUser.role === 'admin'" class="py-5 adminse">
      <b-row>
        <b-col>
          <h2 class="text-center text-uppercase fst-italic"><span>Hola admin, recuerda que tu no compras planes</span></h2>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else class="py-5">
      <b-row>
        <b-col cols="12" v-if="!login">
          <div class="alert alert-danger" role="alert">
            Para pagar debes
            <div
              @click="$router.push('/login')"
              class="alert-link d-inline-block i-s"
            >
              Iniciar Sesión
            </div>
          </div>
        </b-col>
        <b-col cols="12" v-if="valorLogeadoPagado">
          <div class="alert alert-success" role="alert">
            ¡Felicidades, su compra ha sido exitosa!
          </div>
        </b-col>
        <b-col cols="12" v-if="mostrarMensajeErrorCompra">
          <div class="alert alert-danger" role="alert">¡ {{messageComprar}} !</div>
        </b-col>
      </b-row>

      <b-row class="py-5">
        <b-col class="py-5" cols="6">
          <h2 class="text-uppercase fst-italic">
            Detalle de <span>tu compra</span>
          </h2>
          <div v-if="carrito && carrito.length === 0">
            <h4>Sin productos en el carro</h4>
          </div>
          <div v-else>
            <div v-for="(comprar, i) in carrito" :key="i">
              <h4 class="py-3 ms-4">{{ comprar.nombre }}</h4>
              <p>
                <i class="fas fa-check-circle"></i>Cantidad:
                {{ comprar.cantidad }}
              </p>
              <p>
                <i class="fas fa-check-circle"></i> Valor Mensual:
                {{ comprar.precio }}
              </p>
              <p>
                <i class="fas fa-check-circle"></i> Clases por semana:
                {{ comprar.clasessemanales }}
              </p>
              <button class="btn btn-danger" @click="eliminarCarrito">
                Eliminar plan
              </button>
            </div>
          </div>
        </b-col>
        <b-col class="cont-pagar" cols="6">
          <h4 class="text-uppercase display-6 fst-italic text-white">
            Total: ${{ totalCarrito }}
          </h4>
          <img class="py-4" src="../assets/paypall.jpg" />
          <b-button class="btn-pagar" :class="{ disabled: carrito.length != 1 }" @click="modalShow = true">Pagar</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import { mapState, mapGetters, mapMutations,mapActions } from "vuex";
export default {
  name: "Carrito",
  data() {
    return {
      mostrarMensajeErrorCompra : false,
      messageComprar : "Error al comprar",
      login: true,
      modalShow : false,
      messageBuyPlan : ""
    };
  },
  computed: {
    ...mapState(["carrito", "actualUser"]),
    ...mapGetters(["totalCarrito", "isLogeado", "valorLogeadoPagado"]),
    ...mapState(['actualUser'])
  },
  methods: {
    handleErrorComprar(error){
      this.messageComprar = error;
        this.mostrarMensajeErrorCompra = true;
        setTimeout(() => this.mostrarMensajeErrorCompra = false,3000);
    },
    ...mapMutations(["btnComprar", "eliminarCarrito"]),
    ...mapActions(['updateUser']),
    async comprarEx() {
      try{
        if(!this.actualUser) throw "Debe estar logueado para realizar una compra"
        this.btnComprar();
        await this.updateUser(this.actualUser);
        this.modalShow = false;
        this.login = this.isLogeado
      }catch(e){
        this.modalShow = false;
        this.handleErrorComprar(e);
      }
    },

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
.btn-pagar {
  border: none;
}
.btn-pagar:hover {
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
.i-s {
  cursor: pointer;
}
.bg-disable {
  background: #ccc;
  color: beige;
}
.adminse{
  height: 30vh;
}

@media (max-width: 767px) {
  .col-6 {
    width: 100%;
  }
  .about-bg{
    padding: 0 0 20px;
}
}
</style>
