<template>
  <div class="agendar">
    <header class="about-bg">
      <b-container>
        <b-row>
          <b-col cols="12">
            <div class="site-heading">
              <h1 class="text-white text-uppercase fst-italic">
                Agenda tus <span>Clases</span>
              </h1>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </header>
    <b-container class="py-5" v-if="actualUser">
      <b-row>
        <b-col>
          <div class="card mb-4">
            <div class="row g-0 d-flex justify-content-center align-items-center">
              <div class="col-md-4">
                <img class="musculo" src="../assets/ejercicio.png" alt="Icono">
              </div>
              <div class="col-md-4">
                <div class="card-body">
                  <h3 class="card-title"><span>Hola, {{ infoUsers.name }}</span></h3>
                  <h4 class="card-text color-car">Tu plan es: {{ infoUsers.plan.name }}</h4>
                  <h4 class="card-text color-car">Clases por semana: {{ infoUsers.plan.cant }}</h4>
                </div>
              </div>
              <div class="col-md-4">
                <p class="bin">Recuerda que solo son 12 cupos por clases! En pandemia es obligatorio el uso de mascarilla en los entrenamientos.</p>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col sm="12">
          <div class="training-schedule-cover">
            <h3 class="training-schedule-top">{{ rangeDateToShow }}</h3>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <div class="training-schedule-cover">
            <div class="training-schedule-table table-responsive">
              <b-table
                ref="table"
                bordered
                small
                :items="tableItems"
                :fields="tableFields"
              >
                <template #cell(hours)="data">
                  <h4 class="disabled">{{ data.item.hour }}</h4>
                </template>
                <template #cell(monday)="data">
                  <div v-if="data.item.getCantReservesByDay(1) < cantMaxReserv">
                    <h4>
                      {{ data.item.getCantReservesByDay(1) }}/{{
                        cantMaxReserv
                      }}
                    </h4>
                    <button
                      v-if="
                        !data.item.getAtLeastOneReservationMatch(
                          1,
                          getActualUserReservation
                        )
                      "
                      class="btn-reser"
                      @click="reserve(data.item.id, data.field.key)"
                    >
                      Reservar
                    </button>
                    <button
                      v-else
                      @click="cancel(data.item.id, data.field.key)"
                      class="btn-disa"
                    >
                      Cancelar
                    </button>
                  </div>
                  <div v-else>
                    <h4 class="disabled">Sin cupos</h4>
                  </div>
                </template>
                <template #cell(tuesday)="data">
                  <div v-if="data.item.getCantReservesByDay(2) < cantMaxReserv">
                    <h4>
                      {{ data.item.getCantReservesByDay(2) }}/{{
                        cantMaxReserv
                      }}
                    </h4>
                    <button
                      v-if="
                        !data.item.getAtLeastOneReservationMatch(
                          2,
                          getActualUserReservation
                        )
                      "
                      class="btn-reser"
                      @click="reserve(data.item.id, data.field.key)"
                    >
                      Reservar
                    </button>
                    <button
                      v-else
                      @click="cancel(data.item.id, data.field.key)"
                      class="btn-disa"
                    >
                      Cancelar
                    </button>
                  </div>
                  <div v-else>
                    <h4 class="disabled">Sin cupos</h4>
                  </div>
                </template>
                <template #cell(wednesday)="data">
                  <div v-if="data.item.getCantReservesByDay(3) < cantMaxReserv">
                    <h4>
                      {{ data.item.getCantReservesByDay(3) }}/{{
                        cantMaxReserv
                      }}
                    </h4>
                    <button
                      v-if="
                        !data.item.getAtLeastOneReservationMatch(
                          3,
                          getActualUserReservation
                        )
                      "
                      class="btn-reser"
                      @click="reserve(data.item.id, data.field.key)"
                    >
                      Reservar
                    </button>
                    <button
                      v-else
                      @click="cancel(data.item.id, data.field.key)"
                      class="btn-disa"
                    >
                      Cancelar
                    </button>
                  </div>
                  <div v-else>
                    <h4 class="disabled">Sin cupos</h4>
                  </div>
                </template>
                <template #cell(thursday)="data">
                  <div v-if="data.item.getCantReservesByDay(4) < cantMaxReserv">
                    <h4>
                      {{ data.item.getCantReservesByDay(4) }}/{{
                        cantMaxReserv
                      }}
                    </h4>
                    <button
                      v-if="
                        !data.item.getAtLeastOneReservationMatch(
                          4,
                          getActualUserReservation
                        )
                      "
                      class="btn-reser"
                      @click="reserve(data.item.id, data.field.key)"
                    >
                      Reservar
                    </button>
                    <button
                      v-else
                      @click="cancel(data.item.id, data.field.key)"
                      class="btn-disa"
                    >
                      Cancelar
                    </button>
                  </div>
                  <div v-else>
                    <h4 class="disabled">Sin cupos</h4>
                  </div>
                </template>
                <template #cell(friday)="data">
                  <div v-if="data.item.getCantReservesByDay(5) < cantMaxReserv">
                    <h4>
                      {{ data.item.getCantReservesByDay(5) }}/{{
                        cantMaxReserv
                      }}
                    </h4>
                    <button
                      v-if="
                        !data.item.getAtLeastOneReservationMatch(
                          5,
                          getActualUserReservation
                        )
                      "
                      class="btn-reser"
                      @click="reserve(data.item.id, data.field.key)"
                    >
                      Reservar
                    </button>
                    <button
                      v-else
                      @click="cancel(data.item.id, data.field.key)"
                      class="btn-disa"
                    >
                      Cancelar
                    </button>
                  </div>
                  <div v-else>
                    <h4 class="disabled">Sin cupos</h4>
                  </div>
                </template>
              </b-table>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-else class="py-ag">
      <b-row>
        <b-col>
          <h2 class="text-center text-uppercase fst-italic"><span>Para agendar debes estar logeado</span></h2>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Schedule from "../classes/schedule";
import Reservation from "../classes/reservation";
import { mapMutations, mapGetters, mapState } from "vuex";

export default {
  name: "Agenda",
  data() {
    return {
      cantMaxReserv: 12,
      availablesDates: [],
      tableItems: [
        new Schedule("0630", "6:30am"),
        new Schedule("0745", "7:45am"),
        new Schedule("0900", "9:00am"),
        new Schedule("1830", "6:30pm"),
        new Schedule("1915", "7:15pm"),
      ],
      tableFields: [
        {
          key: "hours",
          label: " ",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          tdClass: ["text-center", "bold"],
        },
        {
          key: "monday",
          label: "Lunes",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          thClass: ["white-text"],
        },
        {
          key: "tuesday",
          label: "Martes",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          thClass: ["white-text"],
        },
        {
          key: "wednesday",
          label: "Miércoles",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          thClass: ["white-text"],
        },
        {
          key: "thursday",
          label: "Jueves",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          thClass: ["white-text"],
        },
        {
          key: "friday",
          label: "Viernes",
          thStyle: {
            width: "12.5%",
            padding: "10px 5px",
            fontWeight: "700",
            textTransform: "uppercase",
            textAlign: "center",
            border: "1px solid #f30a46",
            backgroundColor: "#f30a46",
            color: "white",
          },
          thClass: ["white-text"],
        },
      ],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      try {
        vm.loadReservas();
      } catch (error) {
        console.error(error);
      }
    });
  },
  methods: {
    ...mapMutations(["addReservationToUser", "deleteUserReservation"]),
    reserve(hour, day) {
      let dateIndex = this.getIndexByDayId(day);
      let reservation = new Reservation(
        hour,
        day,
        this.availablesDates[dateIndex]
      );
      this.addReservationToUser(reservation);
      this.loadReservas();
    },
    cancel(hour, day) {
      let dateIndex = this.getIndexByDayId(day);
      let reservation = new Reservation(
        hour,
        day,
        this.availablesDates[dateIndex]
      );
      this.deleteUserReservation(reservation);
      this.loadReservas();
    },
    getIndexByDayId(day) {
      let dateIndex = 0;
      switch (day) {
        case "monday":
          dateIndex = 0;
          break;
        case "tuesday":
          dateIndex = 1;
          break;
        case "wednesday":
          dateIndex = 2;
          break;
        case "thursday":
          dateIndex = 3;
          break;
        case "friday":
          dateIndex = 4;
          break;
      }
      return dateIndex;
    },
    loadReservas() {
      if (this.$refs.table) {
        this.tableItems.forEach(this.setupScheduleReservation);
        this.$refs.table.refresh();
      }
    },
    setupScheduleReservation(schedule) {
      schedule.reservations = this.getReservations.filter(
        (reserv) => reserv.hour === schedule.id
      );
    },
    getAvailablesDates() {
      let fechas = [];
      for (let i = 1; i < 6; i++) {
        let dateToAdd = new Date();
        dateToAdd.setDate(dateToAdd.getDate() - dateToAdd.getDay());
        dateToAdd.setDate(dateToAdd.getDate() + i);
        fechas.push(dateToAdd);
      }
      return fechas;
    },
  },
  computed: {
    ...mapState(["actualUser"]),
    ...mapGetters(["getReservations", "getActualUserReservation", "infoUsers"]),
    rangeDateToShow() {
      let initDate = this.availablesDates[0];
      let endDate = this.availablesDates[this.availablesDates.length - 1];
      let month = initDate.getMonth() + 1;
      let monthName = "";
      switch (month) {
        case 1:
          monthName = "Enero";
          break;
        case 2:
          monthName = "Febrero";
          break;
        case 3:
          monthName = "Marzo";
          break;
        case 4:
          monthName = "Abril";
          break;
        case 5:
          monthName = "Mayo";
          break;
        case 6:
          monthName = "Junio";
          break;
        case 7:
          monthName = "Julio";
          break;
        case 8:
          monthName = "Agosto";
          break;
        case 9:
          monthName = "Septiembre";
          break;
        case 10:
          monthName = "Octubre";
          break;
        case 11:
          monthName = "Noviembre";
          break;
        case 12:
          monthName = "Diciembre";
          break;
      }
      let anio = endDate.getFullYear();
      return `${initDate.getDate()}-${endDate.getDate()} ${monthName}, ${anio}`;
    },
  },
  created() {
    this.availablesDates = this.getAvailablesDates();
  },
};
</script>

<style lang="scss" scoped>
.about-bg {
  padding: 170px 0 170px;
  position: relative;
  background-image: url("../assets/agendar.jpg");
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
.training-schedule-cover {
  margin: 0 auto;
  text-align: center;
}
.bin{
  color: #5e5e5e;
}
.color-car{
  color: #7ab0e3;
}
.training-schedule-top {
  border-top: 1px solid #f30b47;
  background-color: #082846;
  line-height: 60px;
  color: #fff;
}
.training-schedule-table table {
  width: 100%;
  background-color: #f8f8f8;
  font-size: 14px;
  border: 1px solid #f30a46;
}
.training-schedule-table thead {
  background-color: #f30a46;
  text-transform: uppercase;
}

.training-schedule-table tr:last-child {
  border-bottom: none;
}
.training-schedule-table th,
.training-schedule-table td {
  width: 12.5%;
  text-align: center;
  border-right: 1px solid #f30a46;
}
.training-schedule-table th {
  border-color: transparent;
  padding: 10px 5px 10px 5px;
  color: #fff;
  font-weight: 700;
}
.training-schedule-table tr {
  border-bottom: 1px solid #f30a46;
}
.training-schedule-table td:first-child {
  color: #999;
  font-weight: 700;
}
.training-schedule-table td {
  padding: 12px;
}
h4 {
  font-size: 15px;
}
.disabled {
  color: rgb(128, 128, 128);
}
.musculo{
  width: 130px;
  margin: 0 auto;
  display: block;
}
.py-ag {
  padding: 200px;
}
</style>
