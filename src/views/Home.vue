<template>
  <div>
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
          <h3 class="txt-slider">Ponte en forma con nosotros</h3></b-carousel-slide>
        </b-carousel
      >
    </div>
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
        <b-row class="my-3">
          <b-col class="card-int-price" sm>
            <div class="inner-box">
              <div class="image">
                <img src="../assets/feature-3.jpg" alt="Imagen Plan" />
              </div>
              <div class="lower-content">
                <h3>2 x Semana $46.000</h3>
                <p><i class="fas fa-check-circle"></i>Valor Mensual</p>
                <p><i class="fas fa-check-circle"></i>2 Clases por semana</p>
                <div class="mt-5">
                  <a class="btn-agregar"
                    >Agregar al Carro <i class="fas fa-shopping-cart"></i
                  ></a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="card-int-price" sm>
            <div class="inner-box">
              <div class="image">
                <img src="../assets/feature-3.jpg" alt="Imagen Plan" />
              </div>
              <div class="lower-content">
                <h3>2 x Semana $46.000</h3>
                <p><i class="fas fa-check-circle"></i>Valor Mensual</p>
                <p><i class="fas fa-check-circle"></i>2 Clases por semana</p>
                <div class="mt-5">
                  <a class="btn-agregar"
                    >Agregar al Carro <i class="fas fa-shopping-cart"></i
                  ></a>
                </div>
              </div>
            </div>
          </b-col>
          <b-col class="card-int-price" sm>
            <div class="inner-box">
              <div class="image">
                <img src="../assets/feature-3.jpg" alt="Imagen Plan" />
              </div>
              <div class="lower-content">
                <h3>2 x Semana $46.000</h3>
                <p><i class="fas fa-check-circle"></i>Valor Mensual</p>
                <p><i class="fas fa-check-circle"></i>2 Clases por semana</p>
                <div class="mt-5">
                  <a class="btn-agregar">Agregar al Carro <i class="fas fa-shopping-cart"></i
                  ></a>
                </div>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-row class="pt-4">
          <b-col>
            <router-link class="btn-vert text-center" to="/socio">Ver todos los planes</router-link>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="py-5">
      <b-container>
        <b-row class="d-flex align-items-center">
          <b-col  cols-sm="4" cols-md="4" cols-lg="4">
            <h4 class="cual">¿Cuál es tu IBM?</h4>
            <h3 class="text-uppercase fst-italic">
              Calcula tu indice de masa corporal
            </h3>
          </b-col>
          <b-col cols-sm="8" cols-md="8" cols-lg="8">
            <div class="row row-cols-lg-auto g-3 align-items-center">
              <div class="col-12">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control calc"
                    id="inlineFormInputGroupUsername"
                    placeholder="Altura / cm"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="input-group">
                  <input
                    type="text"
                    class="form-control calc"
                    id="inlineFormInputGroupUsername"
                    placeholder="Peso / kg"
                  />
                </div>
              </div>
              <div class="col-12">
                <button class="btn-calc">Calcular</button>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </div>
</template>
<script>
export default {
  name: "Home",
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
  top: -300px;
  font-size: 60px;
  text-align: left;
  text-transform: uppercase;
  font-style: italic;
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
}
.btn-agregar {
  background: #001e3c;
  padding: 15px;
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
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
.cual {
  color: #f30b47;
}
.lower-content h3 {
  color: #f30b47;
  font-style: italic;
}
@media (max-width: 1200px) {.card-int-price .inner-box{padding: 0;margin-bottom: 25px;}
  .card-int-price .inner-box::before{width: 100%;height: auto;background: none;}
  .image img{width: 100%;}
  .btn-agregar{font-size: 11px;}
}
@media (max-width: 767px) {
  .btn-vert{
    width: 100%;
  }
  .feature-item{
    display: initial;
  }
  .feature-text{
    margin-left: 0;
  }
   h3.txt-slider[data-v-fae5bece] {position: initial;font-size: 25px;}
}

</style>
