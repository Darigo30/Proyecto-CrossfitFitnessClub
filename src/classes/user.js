export default class User{
    constructor(name,user,plan,reservation){
        this.name = name;
        this.user = user;
        this.plan = plan;
        this.reservation = reservation == null ? [] : reservation;
    }

    addReservation(reservation){
        this.reservation.push(reservation);
    }
}

