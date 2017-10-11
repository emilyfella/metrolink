function Tram(route, startingStation) {
  this._route = route
  this._currentStation = startingStation
}

Tram.prototype = {
  getCurrentStation: function() {
    return this._currentStation
  },

  getStartingStation: function()  {
    return this._route.getStations()[0].getName()
  },

  getTerminatingStation: function() {
    return this._route.getStations()[this._route.getStations().length-1].getName()
  },

  drive: function() {
    var routeStations = this._route.getStations()
    var currentStationIndex = routeStations.indexOf(this._currentStation)
    var nextStationIndex = currentStationIndex + 1
    var arrivingAt = " Now arriving at: " + this._currentStation.getName()
    var routeAnnouncement = "This is the service from " + this.getStartingStation() + " to " + this.getTerminatingStation() + "."

    if(nextStationIndex >= routeStations.length) {
      return "End of the line."
    }

    this._currentStation = routeStations[nextStationIndex]
    return (routeAnnouncement + arrivingAt)
  },

  reset: function() {
    this._currentStation = this._route.getStations()[0]
  }
  
}