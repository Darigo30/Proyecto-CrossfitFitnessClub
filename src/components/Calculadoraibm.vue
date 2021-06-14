<template>
  <div class="calculadora">
    <b-row class="d-flex align-items-center">
      <b-col cols-sm="4" cols-md="4" cols-lg="4">
        <h4 class="cual">¿Cuál es tu IBM?</h4>
        <h3 class="text-uppercase fst-italic">
          Calcula tu indice de masa corporal
        </h3>
      </b-col>
      <b-col cols-sm="8" cols-md="8" cols-lg="8">
        <div class="row row-cols-lg-auto g-3 align-items-center">
          <div class="col-12">
            <b-form-input
              id="inline-form-input-name"
              v-model="formcalc.peso"
              class="mb-2 mr-sm-2 mb-sm-0 calc"
              placeholder="Peso / Kg"
            >
            </b-form-input>
          </div>
          <div class="col-12">
            <b-form-input
              id="inline-form-input-name"
              v-model="formcalc.altura"
              class="mb-2 mr-sm-2 mb-sm-0 calc"
              placeholder="Altura / cm"
            >
            </b-form-input>
          </div>
          <div class="col-12">
            <button class="btn-calc" @click="calcularibm()">Calcular</button>
          </div>
        </div>
        <div class="resul-imc" v-if="formcalc.resultado">
          Su IMC es de {{ formcalc.resultado }} (Kg/m<sup>2</sup>)
        </div>
        <div v-else></div>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  name: "Calculadoraibm",
  data() {
    return {
      formcalc: {
        peso: "",
        altura: "",
        resultado: "",
      },
    };
  },
  methods: {
    calcularibm() {
      const pes = parseInt(this.formcalc.peso);
      const alt = parseInt(this.formcalc.altura) / 100;
      const cuadrado = Math.pow(alt, 2);
      const total = pes / cuadrado;
      this.formcalc.resultado = Math.round(total);
      this.formcalc.peso = "";
      this.formcalc.altura = "";
    },
  },
};
</script>
<style scoped>
.resul-imc {
  width: 70%;
  text-align: center;
  margin: 10px 0;
  color: #d75879;
  font-weight: bold;
  font-size: 20px;
}
</style>
