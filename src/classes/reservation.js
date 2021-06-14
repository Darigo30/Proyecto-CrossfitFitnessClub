    export default class Reservation{
    constructor(hour,day,date,user){
        this.hour = hour;
        this.day = day;
        this.date = date;
        this.user = user;
    }

    sameReservation(reservation){
        return this.reservationId(reservation) === this.reservationId(this);
    }
    
    sameReservationDay(reservation){
        return this.reservationDayId(reservation) === this.reservationDayId(this);
    }

    reservationId(reservation){
        let hour = reservation.hour;
        return `${this.reservationDayId(reservation)}${hour}`;
    }

    reservationDayId(reservation){
        let dia = reservation.date.getDate();
        let mes = reservation.date.getMonth()+1;
        let anio =reservation.date.getFullYear();
        return `${dia}${mes}${anio}`;
    }


}