export default class User {
  constructor(name, user, plan, reservation) {
    this.name = name;
    this.user = user;
    this.plan = plan;
    this.reservation = reservation == null ? [] : reservation;
  }

  addReservation(reservation) {
    this.reservation.push(reservation);
  }

  deleteReservation(reservation) {
    let index = this.reservation.findIndex((reserv) =>
      reserv.sameReservation(reservation)
    );
    console.log("reservation index: " + index);
    this.reservation.splice(index, 1);
  }
}
