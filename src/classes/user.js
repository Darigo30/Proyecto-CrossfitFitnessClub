export default class User{
    constructor(name,user,plan,reservation,password,role = 'user'){
        this.name = name;
        this.user = user;
        this.plan = plan;
        this.reservation = reservation == null ? [] : reservation;
        this.role = role
        this.password = password;
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
                console.log("Comparando: " +  formatDate +":" + dateReservationFormat)
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

    
}

