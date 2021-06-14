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
        let reservations = this.getReservasByDay(day);
        return reservations.length;
    }

    getUsersReservByDay(day){
        let reservations = this.getReservasByDay(day);
        return reservations.map(reservation => reservation.user);
    }

    getReservasByDay(day){
        return this.reservations.filter(reserv => reserv.date.getDay() === day && reserv.hour === this.id);
    }

    
    getAtLeastOneReservationMatch(day,userReservations){
        let reservations = this.reservations.filter(reserv => reserv.date.getDay() === day && reserv.hour === this.id);
        let founded = false;
        let i = 0;
        while(i < reservations.length && !founded){
            let scheduleReservation = reservations[i];
            founded = this.hasScheduleReservation(scheduleReservation,userReservations) ? true : false;
            i++;
        }
        return founded;
    }

    hasScheduleReservation(scheduleReservation,userReservations){
        return userReservations.find(reserv => scheduleReservation.sameReservation(reserv));
    }
    


}