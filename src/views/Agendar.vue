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
    <b-container class="py-5">
      <b-row>
        <b-col>
          <div class="table-responsive">
            <div class="training-schedule-cover">
              <h3 class="training-schedule-top">{{rangeDateToShow}}</h3>
              <div class="training-schedule-table">
                <table>
                  <thead>
                    <tr>
                      <th></th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miércoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>6.30am</td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4 class="disabled">Sin cupos</h4>
                      </td>
                      <td>
                        <h4>1/12</h4>
                        <a class="btn-disa">Cancelar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                    </tr>
                    <tr>
                      <td>7.45am</td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                    </tr>
                    <tr>
                      <td>9.00am</td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                    </tr>
                    <tr>
                      <td>18.30pm</td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                    </tr>
                    <tr>
                      <td>19.15pm</td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                      <td>
                        <h4>0/12</h4>
                        <a class="btn-reser">Reservar</a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>

export default {
    name: 'Agenda',
    data() {
      return {
        availablesDates: []
      }
    },
    methods: {
      getAvailablesDates() {
        let fechas = [];
        let fechaActual = new Date();
        fechaActual.setDate(fechaActual.getDate() - fechaActual.getDay());
        for(let i = 1; i < 6;i++){
            let dateToAdd = new Date();
            dateToAdd.setDate(fechaActual.getDate() + i);
            fechas.push(dateToAdd);
        }
        return fechas;
      }
    },
    computed: {
      
      rangeDateToShow(){
        let initDate = this.availablesDates[0];
        let endDate = this.availablesDates[this.availablesDates.length - 1]
        let month = initDate.getMonth() + 1;
        let monthName = '';
        switch(month){
          case 1: monthName = 'Enero';break;
          case 2: monthName = 'Febrero';break;
          case 3: monthName ='Marzo';break;
          case 4: monthName ='Abril';break;
          case 5: monthName ='Mayo';break;
          case 6: monthName ='Junio';break;
          case 7: monthName ='Julio';break;
          case 8: monthName ='Agosto';break;
          case 9: monthName ='Septiembre';break;
          case 10: monthName ='Octubre';break;
          case 11: monthName ='Noviembre';break;
          case 12: monthName ='Diciembre';break;
        }
        let anio = endDate.getFullYear();
        return `${initDate.getDate()}-${endDate.getDate()} ${monthName}, ${anio}` 
      }
    },
    created () {
      this.availablesDates = this.getAvailablesDates();
    },
  
}
</script>

<style scoped>
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
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
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
</style>
