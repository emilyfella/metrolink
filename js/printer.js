var stationNames [
  'Altrincham',
  'Navigation Road',
  'Timperley',
  'Brooklands',
  'Sale',
  'Dane Road',
  'Stretford',
  'Old Trafford',
  'Trafford',
  'Cornbrook',
  'Deansgate-Castlefield',
  'St Peters Square',
  'Piccadilly Gardens',
  'Piccadilly Station',
  'New Islington',
  'Holt Town',
  'Etihad Campus',
  'VeloPark',
  'Clayton Hall',
  'Edge Lane',
  'Cemetery Road',
  'Droylsden',
  'Audenshaw',
  'Ashton Moss',
  'Ashton West',
  'Ashton-under-Lyne'
]

var altrinchamToAshtonUnderLyne = new Route()

var stations = $.each(stationNames, function (StationIndex, stationName) {
  altrinchamToAshtonUnderLyne.addStation(new Station (stationName))
})

var tram = new tram(altrinchamToAshtonUnderLyne, altrinchamToAshtonUnderLyne.getStations()[0])