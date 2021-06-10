<template>
  <div class="socio">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Quiero ser <span>Socio</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <section class="bg-prices py-5">
      <b-container>
        <b-row>
          <b-col>
            <h2 class="titulos text-uppercase text-center fst-italic">
              Estos son <span>nuestros planes</span>
            </h2>
            <p class="text-center">
              Adquiere nuestros planes por un excelente precio. ¡La inscrición
              es gratis si compras vía web!
            </p>
          </b-col>
        </b-row>
        <Planes CantidadMostar="all" />
      </b-container>
    </section>
  </div>
</template>
<script>
import Planes from "@/components/Planes.vue";

export default {
  name: "Home",
  components: {
    Planes,
  },
};
</script>

<style scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/socio.png");
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
  padding: 0px 15px 72px;
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
</style>
