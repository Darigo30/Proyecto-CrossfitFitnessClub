export default class Reservation {
  constructor(hour, day, date) {
    this.hour = hour;
    this.day = day;
    this.date = date;
  }

  sameReservation(reservation) {
    return this.reservationId(reservation) === this.reservationId(this);
  }

  reservationId(reservation) {
    let dia = reservation.date.getDate();
    let mes = reservation.date.getMonth() + 1;
    let anio = reservation.date.getFullYear();
    let hour = reservation.hour;
    return `${dia}${mes}${anio}${hour}`;
  }
}
