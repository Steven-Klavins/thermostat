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
      updateDisplay();
    }
  });

  $( "#reset" ).click(function( event ) {
    thermostat.reset();
    updateDisplay();
  });

  function updateDisplay() {
    $( "#current-temp" ).text(thermostat.temp);
    $( "#usage" ).text(thermostat.usage());
    $( "#usage" ).text(thermostat.usage());
    increaseBar(thermostat.temp);

  }

  function increaseBar(temp){
    const level = document.getElementsByClassName('bar')[0]
    level.style.setProperty('--height', height = temp)
    
  }


$.ajax({
 
  // The URL for the request
  url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=05b91837eefbb10db098afbbc580255e&units=metric",

  // Whether this is a POST or GET request
  type: "GET",

  // The type of data we expect back
  dataType : "json",
})
// Code to run if the request succeeds (is done);
// The response is passed to the function
.done(function( json ) {
console.log (json.main.temp)
$( "#weather" ).text(json.main.temp);
})


// Code to run if the request fails; the raw request and
// status codes are passed to the function
.fail(function( xhr, status, errorThrown ) {
  alert( "Sorry, there was a problem!" );
  console.log( "Error: " + errorThrown );
  console.log( "Status: " + status );
  console.dir( xhr );
})

});