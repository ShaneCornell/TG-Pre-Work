class HospitalEmployee {
  constructor(name){
    this._name = name;
    this._remainingVacationDays = 20;
  }

  get name() {
    return this._name;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    return this._remainingVacationDays = this._remainingVacationDays - daysOff;
  }
}

/* I learned a little about inheritance. */
