<template>
  <div class="about">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Acerca De <span>Nosotros</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5">
      <b-row>
        <div class="col-lg-8">
          <div class="about-left media">
            <div class="about-left-text">
              <h2 class="text-white fst-italic">
                ¡Bienvenido a Crossfit Fitness Club!
              </h2>
            </div>
            <div class="about-left-img">
              <img src="../assets/man.jpg" alt="man" />
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="about-right-text">
            <h3>Ofrecemos una primera clase gratuita de prueba</h3>
            <p>
              Somos una comunidad de profesionales, aficionados, amantes,
              seguidores y novatos del ejercicio y del deporte, en especial de
              CrossFit. ... CrossFit Fitness Club es para todos, es una manera
              distinta de ver las cosas, es un estilo de vida.
            </p>
            <p>
              ¡Somos una familia! Si es tu primera vez haciendo Crossfit, te
              acompañamos en todo momento!!
            </p>
          </div>
        </div>
      </b-row>
    </b-container>
  </div>
</template>
<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/acercade.jpg");
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
.about-left {
  position: relative;
}
.media {
  display: flex;
  align-items: flex-start;
}
.about-left-text {
  background-color: #f30a46;
  width: 45%;
  padding: 80px 58px;
  text-transform: uppercase;
  -webkit-transform: translateY(12%);
  -ms-transform: translateY(12%);
  transform: translateY(12%);
}
.about-left-img {
  width: 55%;
}
.about-left-img img {
  width: 100%;
}
.about-right-text {
  padding: 100px 0 0;
}
.about-right-text h3 {
  font-size: 30px;
  line-height: 40px;
  color: #f30a46;
  font-weight: 500;
  padding-bottom: 10px;
}
.about-right-text p {
  text-align: justify;
}
@media (max-width: 767px) {
  .media {
    display: block;
  }
  .about-left-text {
    width: 100%;
    padding: 40px 10px;
  }
  .about-left-img {
    width: 100%;
  }
  .about-right-text {
    padding: 30px 0 0;
  }
   .about-bg{padding: 0 0 20px;}
}
</style>
