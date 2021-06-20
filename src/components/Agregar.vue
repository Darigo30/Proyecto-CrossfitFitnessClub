<template>
    <div class="my-3 pb-1 text-start">
    <h2 class="text-center text-uppercase fst-italic"><span>Agregar Planes Nuevos</span></h2>
    <b-row>
        <b-col cols="6"> 
            <label>ID</label>
            <b-form-input class="bor-in" v-model="plan.id"></b-form-input>
        </b-col>
        <b-col cols="6"> 
            <label>Nombre Plan</label>
            <b-form-input class="bor-in" v-model="plan.nombrePlan"></b-form-input>
        </b-col>
        <b-col cols="6"> 
            <label>Valor Mensual</label>
            <b-form-input class="bor-in" v-model="plan.valorMensual"></b-form-input>
        </b-col>
        <b-col cols="6">
            <label>Clases Semanales</label>
            <b-form-input class="bor-in" v-model="plan.ClasesSemanales" ></b-form-input>
        </b-col>
        <b-col cols="12">
             <label>Imagen</label>
            <b-form-input class="bor-in" v-model="plan.imagen"></b-form-input>
        </b-col>
    </b-row>
    <b-button size="sm" @click="agregarPlan()" class="my-3 agr-ju" variant="success">Agregar Plan</b-button>
  </div>
</template>
<script>
    import { mapActions } from "vuex";
    export default {
    props:['guardarData'],
    name: "Agregar",
        data() {
            return {
                plan: {
                    id: "",
                    nombrePlan: "",
                    valorMensual: "",
                    ClasesSemanales: "",
                    imagen: "",
                }
            };
        },
        methods: {
            ...mapActions(["crearNuevoPlan"]),
                agregarPlan() {
                this.crearNuevoPlan(this.plan);
                this.$props.guardarData();
            },
        },
    };
</script>
<style>
span {
  color: #f30b47;
}
.bor-in{
  border: 1px solid #082846;
  border-radius: 0; 
}
</style>