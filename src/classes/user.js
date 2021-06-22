import Plan from './plan';
import Reservation from './reservation';

export default class User{
    constructor(id,name,user,plan,reservation,role = 'user'){
        this.id = id;
        this.name = name;
        this.user = user;
        this.plan = plan;
        this.reservation = reservation == null ? [] : reservation;
        this.role = role
    }

    addReservation(reservation){
            this.reservation.push(reservation);
    }

    validateAvailableReserveIntoWeekByHiredPlan(dates){
        if(this.plan){
            let cantPlan = this.plan.cant;
            let cantMakedReserv = this.cantReservationByRangeDate(dates);
            if(cantMakedReserv == cantPlan)
                throw 'Cantidad de días disponibles para reservar agotados'
        }else throw 'Usuario sin plan'
    }

    deleteReservation(reservation){
        let index = this.reservation.findIndex(reserv => reserv.sameReservation(reservation));
        this.reservation.splice(index,1);
    }

    cantReservationByRangeDate(dates){
        console.log(dates)
        let counter = 0;
        for(let j = 0;j<dates.length;j++){
            let date = dates[j];
            let formatDate = this.dateFormat(date);
            console.log(formatDate)
            for(let i=0;i<this.reservation.length;i++){
                let dateReservation = this.reservation[i].date;
                let dateReservationFormat = this.dateFormat(dateReservation);
                if(formatDate===dateReservationFormat)
                    counter++;
            }

        }
        return counter;
    }

    dateFormat(date){
        let dia = date.getDate();
        let mes = date.getMonth()+1;
        let anio = date.getFullYear();
        return `${dia}${mes}${anio}`;
    }

    static mapUser(extUser){
        let userPlan = extUser.plan ? Plan.mapPlan(extUser.plan) : null;
        let reservations = extUser.reservations ? extUser.reservations.map(reserv => Reservation.mapReservation(reserv)) : [];
        return new User(extUser.id,extUser.nombre,extUser.email,userPlan,reservations,extUser.rol);
    }

    static reverseUser(user){
        let plan = Plan.mapPlan(user.plan);
        let reservations = user.reservation ? user.reservation.map(reserv => Reservation.mapReservation(reserv)) : [];
        console.log("Cantidad de reservaciones mapeadas");
        console.log(reservations)
        return {
            id : user.id,
            nombre : user.name,
            email : user.user,
            plan : plan,
            reservations : reservations,
            rol : user.role
         };
    }

    
}

