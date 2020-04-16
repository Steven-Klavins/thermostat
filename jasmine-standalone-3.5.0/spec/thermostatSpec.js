
describe('Thermostat', function() {
    var thermostat;
  
    beforeEach(function() {
      thermostat = new Thermostat()
    });

    it ( "Has has a starting temp of 20", function () {
        expect (thermostat.temp).toEqual(20)
    }) 

    it('temp can be increased', function() {
      thermostat.increase(2)
      expect(thermostat.temp).toEqual(22)
    })

    it('temp can be decreased', function() {
      thermostat.decrease(2)
      expect(thermostat.temp).toEqual(18)
    })

    it('temp wont fall below 10', function() {
      thermostat.decrease(11)
      expect(thermostat.temp).toEqual(10)
    })

    it('limits the temp to 25', function() {
      thermostat.powerSavingOn()
      thermostat.increase(6)
      expect(thermostat.temp).toEqual(25)
    })

    it('switches power saving off', function() {
      thermostat.powerSavingOff()
      thermostat.increase(10)
      expect(thermostat.temp).toEqual(30)
    })


    it('removes the limit of 25, limit is now 32', function() {
      thermostat.powerSavingOff()
      thermostat.increase(20)
      expect(thermostat.temp).toEqual(32)
    })

}); 

