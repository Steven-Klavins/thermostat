function Thermostat() {
  this.DEFAULT_TEMP = 20;
  this.temp = 20;
  this.MAX_TEMP_ON = 25;
  this.MAX_TEMP_OFF = 32;
  this.MIN_TEMP = 10;
  this.savingOn = false;
}

Thermostat.prototype.increase = function(degrees) {
  this.temp += degrees
  if (this.temp > this.MAX_TEMP_ON && this.savingOn == true) {
    this.temp = this.MAX_TEMP_ON;
  }
  if (this.temp > this.MAX_TEMP_OFF && this.savingOn == false){
    this.temp = this.MAX_TEMP_OFF
  }
}

Thermostat.prototype.decrease = function(degrees) {
  this.temp -= degrees
  if (this.temp < this.MIN_TEMP) {
    this.temp = this.MIN_TEMP;
  }
}

Thermostat.prototype.powerSavingOn = function() {
  this.savingOn = true;
  this.temp = this.MAX_TEMP_ON
}

Thermostat.prototype.powerSavingOff = function() {
  this.savingOn = false
}

Thermostat.prototype.reset = function() {
  this.temp = this.DEFAULT_TEMP
}

Thermostat.prototype.usage = function () {
  if (this.temp > 25) {
    return "high-usage"
  }
  if (this.temp <= 25 && this.temp>= 18){ 
    return "medium-usage"
  } 
  return "low-usage"
}

