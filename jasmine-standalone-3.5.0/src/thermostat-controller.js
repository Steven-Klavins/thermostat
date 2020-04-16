$( document ).ready(function() {
  let thermostat = new Thermostat();
  updateDisplay();

  $( "#up" ).click(function( event ) {
    thermostat.increase(1);
    updateDisplay();
  });

  $( "#down" ).click(function( event ) {
    thermostat.decrease(1);
    updateDisplay();
  });

  $( "#power-saving" ).click(function( event ) {
    if(thermostat.savingOn) {
      thermostat.powerSavingOff();
    } else {
      thermostat.powerSavingOn();
    }
  });

  $( "#reset" ).click(function( event ) {
    thermostat.reset();
    updateDisplay();
  });

  function updateDisplay() {
    $( "#current-temp" ).text(thermostat.temp);
    $( "#usage" ).text(thermostat.usage());
  }
});