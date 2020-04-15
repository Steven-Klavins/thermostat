function Thermostat() {
  this.temp = 20
}

Thermostat.prototype.increase = function(degrees) {
  this.temp += degrees
}

Thermostat.prototype.decrease = function(degrees) {
  this.temp -= degrees
  if (this.temp < 10) {
    this.temp = 10
  }
}
