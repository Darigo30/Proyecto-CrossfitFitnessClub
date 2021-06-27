<template>
  <b-row>
    <b-col sm="4" md="4" lg="4" v-for="(objeto, i) in llamadocard" :key="i">
      <div class="card-int-price">
        <div class="inner-box">
          <div class="image">
            <img v-bind:src="objeto.imagen" />
          </div>
          <div class="lower-content">
            <h3>{{ objeto.nombrePlan }}</h3>
            <p>
              <i class="fas fa-check-circle"></i>Valor Mensual:
              {{ objeto.valorMensual }} CLP
            </p>
            <p>
              <i class="fas fa-check-circle"></i>Clases por semana:
              {{ objeto.ClasesSemanales }}
            </p>
            <div class="mt-5">
              <a class="btn-agregar" @click="agregarPlan(objeto)">
                Agregar al Carro
                <i class="fas fa-shopping-cart"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
import { mapMutations ,mapState} from "vuex";
export default {
  name: "Planes",
  computed: {
    ...mapState(['planes']),
    llamadocard() {
      return this.cantidadCards();
    },
  },
  methods: {
    cantidadCards() {
      if (this.$props.CantidadMostar == "all") {
        return this.planes;
      } else {
        return this.planes.slice(0, parseInt(this.$props.CantidadMostar));
      }
    },
    ...mapMutations(["agregarPlan"]),
  },
  props: {
    CantidadMostar: {
      type: String,
    },
  },
};
</script>
<style>
.feature-item {
  display: flex;
}
.feature-text {
  margin-left: 15px;
}
.feature-text h3 {
  font-size: 30px;
  font-style: italic;
  text-transform: uppercase;
  color: #001e3c;
  transition: all 0.3s;
}
.feature-text:hover h3 {
  color: #f30a46;
}
.feature-text p {
  font-size: 14px;
}
.bg-prices {
  background: #fbfbfb;
}
.card-int-price .inner-box::before {
  position: absolute;
  content: "";
  left: 0px;
  top: 60px;
  right: 0px;
  bottom: 0px;
  width: 370px;
  height: 391px;
  background: url(../assets/borde-ext.png) no-repeat;
}
.card-int-price .inner-box .image .icon-box {
  position: absolute;
  right: 40px;
  bottom: -35px;
  width: 70px;
  height: 70px;
  color: #ff0000;
  font-size: 36px;
  line-height: 70px;
  border-radius: 50px;
  text-align: center;
  background-color: #ffffff;
  -webkit-transition: all 300ms ease;
  -ms-transition: all 300ms ease;
  -o-transition: all 300ms ease;
  -moz-transition: all 300ms ease;
  transition: all 300ms ease;
}
.card-int-price .inner-box .image .icon-box {
  color: #ff0000;
  font-size: 36px;
  line-height: 70px;
  text-align: center;
}
.card-int-price .inner-box .lower-content {
  position: relative;
  padding-top: 22px;
}
.card-int-price .inner-box {
  position: relative;
  padding: 0px 15px 32px;
}
.card-int-price .inner-box .lower-content .title {
  position: relative;
  color: #ffffff;
  font-size: 14px;
  text-transform: uppercase;
  font-family: "Roboto", sans-serif;
}
.card-int-price .inner-box .lower-content h4 {
  position: relative;
  line-height: 1.3em;
  font-weight: 700;
  margin-top: 5px;
  text-transform: uppercase;
}
.image img {
  position: relative;
  max-width: 270px;
  height: 200px;
}
.btn-agregar {
  background: #001e3c;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
.btn-agregar:hover {
  color: #fbfbfb;
}
.svg-inline--fa.fa-check-circle.fa-w-16 {
  margin-right: 15px;
}
.btn-vert {
  background: #f30b47;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  width: 50%;
  margin: 0 auto;
  display: block;
  font-weight: bold;
  text-transform: uppercase;
}
@media (max-width: 1200px) {
  .card-int-price .inner-box {
    padding: 0;
    margin-bottom: 25px;
  }
  .card-int-price .inner-box::before {
    width: 100%;
    height: auto;
    background: none;
  }
  .image img {
    width: 100%;
  }
  .btn-agregar {
    font-size: 11px;
  }
}
@media (max-width: 767px) {
  .btn-vert {
    width: 100%;
  }
  .feature-item {
    display: initial;
  }
  .feature-text {
    margin-left: 0;
  }
  h3.txt-slider {
    position: initial;
    font-size: 25px;
  }
}
</style>
