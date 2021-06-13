export default class Schedule{
    constructor(id,hour){
        this.id = id;
        this.hour = hour;
        this.reservations = []
    }


    addReservation(reservarion){
        this.reservations.push(reservarion);
    }

    /**
     * Se le pasará el día de la semana indicado según el objeto Date
     * por lo que
     * 0 : Domingo
     * 1 : Lunes
     * 2 : Martes
     * 3 : Miercoles
     * 4 : Jueves
     * 5 : Viernes
     * 6 : Sabado
     * @param {*} day 
     */
    getCantReservesByDay(day){
        let reservations = this.reservations.filter(reserv => reserv.date.getDay() === day && reserv.hour === this.id);
        return reservations.length;
    }


}