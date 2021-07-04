<template>
  <div v-if="editar" class="my-4 text-start">
    <h2 class="text-center text-uppercase fst-italic"><span>Editar Datos</span></h2>
    <b-row>
        <b-col cols="6">
          <label>Nombre Plan</label>
          <b-form-input class="bor-in" v-model="EditarPlan.nombrePlan"></b-form-input>
        </b-col>
        <b-col cols="6">
          <label>Clases</label>
          <b-form-input class="bor-in" v-model="EditarPlan.ClasesSemanales"></b-form-input>
        </b-col>
        <b-col cols="6">
          <label>Valor</label>
          <b-form-input class="bor-in" v-model="EditarPlan.valorMensual"></b-form-input>
        </b-col>
        <b-col cols="6">
           <label>Imagen</label>
           <b-form-input class="bor-in" v-model="EditarPlan.imagen"></b-form-input>
        </b-col>
    </b-row>
    <b-button
      size="sm"
      class="my-3 agr-ju"
      variant="success"
      @click="actualizar(EditarPlan)"
      >Actualizar</b-button
    >
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Editar",
  props:['resultado'],
  data() {
    return {
      nombrePlan: "",
      ClasesSemanales: "",
      valorMensual: "",
      imagen: "",
    };
  },
  computed: {
    ...mapState(["editar", "EditarPlan"]),
  },
  methods: {
    ...mapActions(["updateProducto"]),
    actualizar(plan) {
      const result = this.updateProducto(plan);
      this.resultado(result);
    },
  },
};
</script>
<style>
span {
  color: #f30b47;
}
.agr-ju{
  width: auto;
  background: #082846;
  padding: 10px 10px;
  font-size: 15px;
  font-weight: bold;
  border: none;
  border-radius: 0px;
}
.bor-in{
  border: 1px solid #082846;
  border-radius: 0; 
}
</style>