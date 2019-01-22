import {aircrafts, flightReqs, meetsStaffReqs, meetsSpeedRangeReqs} from './airplane';

function displayFuelCapacity() {
  aircrafts.forEach(function(element)
{
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

function displayStaffStatus() {
  aircrafts.forEach(function(element){
    console.log(element.name + 'meets staff requirements: ' + meetsStaffReqs(element.availableStaff, flightReqs.requiredStaff));
  });
}

displayStaffStatus()

displayFuelCapacity()

function displaySpeedRangeStatus() {
  aircrafts.forEach(function(element) {
   console.log(element.name + ' meets speed range requirements: ' + meetsSpeedRangeReqs(element.maxSpeed, element.minSpeed, flightReqs.requiredSpeedRange));
  });
}

displaySpeedRangeStatus()

/* I learned how to use the import as function. */
