<template>
<div class="table-responsive">
  <b-table
    ref = "tablePlanes"
    v-if="filas && encabezados"
    striped
    hover
    sort-desc.sync="false"
    sort-direction="asc"
    :fields="encabezados"
    :items="filas"
    :sort-by.sync="ordenarPor"
  >
  <template #cell(imagen)="row">
    <img class="img-chi" :src="row.item.imagen"/>
  </template>
    <template #cell(actions)="row">
      <b-button
        size="sm"
        @click="editar(row.item)"
        class="my-1 me-4 bt-editar"
        variant="primary"
        >Editar</b-button
      >
      <b-button
        size="sm"
        id="show-btn"
        variant="danger"
        class="my-1 me-4 bt-eli"
        @click="showModal(row.item)"
        >Eliminar</b-button
      >
      <b-modal v-model="modalShow" hide-footer title="¡Advertencia!">
        <div class="d-block text-center">
          <h4>¿Estás seguro que deseas eliminar este producto?</h4>
        </div>
        <div class="d-flex justify-content-between">
          <b-button
            class="mt-3"
            variant="outline-danger"
            block
            @click="hideModal"
            >Cancelar</b-button
          >
          <b-button class="mt-3" variant="outline-success" block @click="borrar"
            >Aceptar</b-button
          >
        </div>
      </b-modal>
    </template>
  </b-table>
  <div v-if="getmsjTabla" class="alert alert-warning" role="alert">{{ getmsjTabla }}</div>
</div>
</template>

<script>
import { mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Tabla",
  data() {
    return {
      ordenarPor: "",
      campoeliminar: "",
      modalShow: false,
    };
  },
  props: {
    filas: {
      type: Array,
    },
    encabezados: {
      type: Array,
    },
    editarData: {
      type: Function,
    },
  },
  computed: {
    ...mapGetters(["getmsjTabla"]),
  },
  methods: {
    ...mapActions(["deleteProducto"]),
    ...mapMutations(["booleanEditar", "editarPlanesTabla"]),
    editar(editado) {
      this.booleanEditar();
      this.editarPlanesTabla(editado);
      this.$props.editarData();
    },
    borrar() {
      this.deleteProducto(this.campoeliminar);
      this.modalShow = false;
    },
    showModal(valor) {
      this.campoeliminar = valor;
      this.modalShow = true;
    },
    hideModal() {
      this.modalShow = false;
    },
  },
};
</script>
<style>
.img-chi{
  width: 45px;
  height: 45px;
}
.bt-editar{
  color: #fff;
  background-color: #595965;
  border-color: #595965;
  width: 30%;
  font-weight: bold;
}
.bt-eli{
  color: #fff;
  background-color: #f30b47;
  border-color: #f30b47;
  width: 30%;
  font-weight: bold;
}
label {
    display: inline-block;
    padding: 10px 0;
}
@media (max-width: 600px) {
  .bt-editar{
  width: 100%;

}
.bt-eli{
  width: 100%;
}
}
</style>