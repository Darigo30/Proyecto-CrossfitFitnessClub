<template>
  <div>
    <!-- Slider -->
    <div class="slider">
      <b-carousel
        id="carousel-fade"
        style="text-shadow: 0px 0px 2px #000"
        fade
        indicators
        controls
        img-width="1024"
        img-height="480"
      >
        <b-carousel-slide :img-src="require('../assets/slider-1.jpg')">
          <h3 class="txt-slider">Un lugar cool para entrenar</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-2.jpg')">
          <h3 class="txt-slider">Adquiere nuestros planes</h3>
        </b-carousel-slide>
        <b-carousel-slide :img-src="require('../assets/slider-3.jpg')">
          <h3 class="txt-slider">
            Ponte en forma con nosotros
          </h3></b-carousel-slide
        >
      </b-carousel>
    </div>
    <!-- Intro -->
    <b-container class="my-5">
      <b-row>
        <b-col class="mb-5" cols="12">
          <h2 class="titulos text-uppercase text-center fst-italic">
            ¿Por qué hacer <span>crossfit?</span>
          </h2>
          <p class="text-center">
            Uno de los principales beneficios de hacer crossfit es que ayuda a
            eliminar grasa. Como consecuencia de la intensidad de los ejercicios
            que propone, el crossfit es un método de entrenamiento con el que
            podremos bajar de peso de forma rápida y eficaz. Es un tipo de
            entrenamiento en el que casi no existe descanso.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/peso.png" />
            </div>
            <div class="feature-text">
              <h3>Crossfit</h3>
              <p>
                CrossFit es un programa de fuerza y acondicionamiento físico
                total, que se basa en el incremento de las diez capacidades
                físicas más reconocidas por los especialistas en el
                entrenamiento deportivo con pesas.
              </p>
            </div>
          </div>
        </b-col>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/levantar.png" />
            </div>
            <div class="feature-text">
              <h3>Levante</h3>
              <p>
                La halterofilia o levantamiento de pesas es un deporte que
                consiste en el levantamiento del máximo peso posible en una
                barra en cuyos extremos se fijan varios discos, que son los que
                determinan el peso final que se levanta.
              </p>
            </div>
          </div>
        </b-col>
        <b-col sm="4" md="4">
          <div class="feature-item">
            <div class="feature-i">
              <img class="icon-por" src="../assets/pesa.png" />
            </div>
            <div class="feature-text">
              <h3>Madness</h3>
              <p>
                Madness son nuestras clases de entrenamiento funcional llevadas
                al siguiente nivel. 60 minutos de constante trabajo enfocado en
                mejorar tu resistencia cardiovascular.
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <!-- Planes-->
    <section class="bg-prices py-5">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="titulos text-uppercase text-center fst-italic">
              ¡Invierte en <span>tu Salud!</span>
            </h2>
            <p class="text-center">
              Adquiere nuestros planes por un excelente precio. ¡La inscrición
              es gratis si compras vía web!
            </p>
          </b-col>
        </b-row>
        <Planes CantidadMostar="3" />
        <b-row class="pt-5">
          <b-col>
            <router-link class="btn-vert text-center" to="/socio"
              >Ver todos los planes</router-link
            >
          </b-col>
        </b-row>
      </b-container>
    </section>
    <!--Calcular indice de masa corporal -->
    <section class="py-5">
      <b-container>
        <Calculadoraibm />
      </b-container>
    </section>
  </div>
</template>

<script>
import Planes from "@/components/Planes.vue";
import Calculadoraibm from "@/components/Calculadoraibm.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Planes,
    Calculadoraibm,
  },
  computed: {
    ...mapState(["userRole"]),
  }
};
</script>
<style scoped>
.slider {
  width: 100%;
}
.carousel-caption {
  right: initial;
  left: 240px;
  top: 320px;
  text-align: left;
}
h3.txt-slider {
  position: absolute;
  left: 0;
  top: -220px;
  font-size: 60px;
  text-align: left;
  text-transform: uppercase;
  font-style: italic;
  width: 60%;
}
.titulos-salud {
  color: #001e3c;
  font-style: italic;
}

.titulos {
  color: #f30b47;
}
span {
  color: #001e3c;
}
.icon-por {
  width: 45px;
}
.tit-le {
  margin-left: 15px;
}
.cual {
  color: #f30b47;
}
.lower-content h3 {
  color: #f30b47;
  font-style: italic;
}
.btn-vert:hover{
  color: #fff;
}
.carousel-item{
  height: 500px;
}
@media (max-width: 991px) {
  .carousel-item {
    height: auto;
  }
  h3.txt-slider{
    top: -60px;
    width: 100%;
    font-size: 20px;
  }
}

</style>
