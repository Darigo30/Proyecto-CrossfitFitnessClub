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
              <i class="fas fa-check-circle"></i>Valor mensual:
              {{ objeto.valorMensual }} CLP
            </p>
            <p>
              <i class="fas fa-check-circle"></i>Clases por semana:
              {{ objeto.ClasesSemanales }}
            </p>
            <div class="mt-5">
              <a class="btn-agregar"
                >Agregar al Carro <i class="fas fa-shopping-cart"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "Planes",
  data() {
    return {
      CardsPlanes: [
        {
          imagen:
            "https://www.hola.com/imagenes/estar-bien/20210224184941/crossfit-bootcamp-diferencias-entrenamiento/0-922-979/crossfit-2t-t.jpg",
          nombrePlan: "3 x Semana $46.000",
          valorMensual: 46000,
          ClasesSemanales: 3,
        },
        {
          imagen:
            "https://www.crossfit.com/wp-content/uploads/2020/10/19092755/2018072814475780_ND_ND5_6593-1-copy-1024x576.jpg",
          nombrePlan: "4x Semana $66.000",
          valorMensual: 66000,
          ClasesSemanales: 4,
        },
        {
          imagen:
            "https://baloncentral.files.wordpress.com/2020/01/funiber-crossfit.jpg?w=640",
          nombrePlan: "5 x Semana $86.000",
          valorMensual: 66000,
          ClasesSemanales: 5,
        },
        {
          imagen:
            "https://baloncentral.files.wordpress.com/2020/01/funiber-crossfit.jpg?w=640",
          nombrePlan: "6 x Semana $86.000",
          valorMensual: 66000,
          ClasesSemanales: 6,
        },
        {
          imagen:
            "https://baloncentral.files.wordpress.com/2020/01/funiber-crossfit.jpg?w=640",
          nombrePlan: "7 x Semana $86.000",
          valorMensual: 66000,
          ClasesSemanales: 7,
        },
        {
          imagen:
            "https://baloncentral.files.wordpress.com/2020/01/funiber-crossfit.jpg?w=640",
          nombrePlan: "8 x Semana $86.000",
          valorMensual: 66000,
          ClasesSemanales: 8,
        },
      ],
    };
  },
  
 methods: {
     cantidadCards() {
        if(this.$props.CantidadMostar == "all") {
            return this.CardsPlanes
        } else {
            return this.CardsPlanes.splice(1, parseInt(this.$props.CantidadMostar));
        }
     }
 },
 computed: {
    llamadocard() {
        return this.cantidadCards()
    }
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
  width: 100%;
  height: 220px;
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
