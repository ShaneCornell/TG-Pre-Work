let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil'
}

let remotelyDisable = obj => {
  obj.disabled = true
}

greenEnergy(spaceship);
remotelyDisable(spaceship);
console.log(spaceship);
/* I learned how to use pass by referance. */
