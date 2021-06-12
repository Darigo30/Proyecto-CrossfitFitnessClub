export default class User{
    constructor(name,user,plan,reserva){
        this.name = name;
        this.user = user;
        this.plan = plan;
        this.reserva = reserva == null ? [] : reserva;
    }

    addReservation(reservation){
        this.reserva.push(reservation);
    }
}

