export default class Plan {
  constructor(name, cant) {
    this.name = name;
    this.cant = cant;
  }

  static mapPlan(extPlan){
      if(!extPlan)
        throw 'Plan to map can not be null'
    return new Plan(extPlan.name,extPlan.cant);
  }


}
