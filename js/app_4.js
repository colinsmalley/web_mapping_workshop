///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer
var mapId = 'colinsmalley.k7c3eb9n'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY29saW5zbWFsbGV5IiwiYSI6Ims5eGM5V0kifQ.CS8jxClogqQG_mbUZtoUWw'; //<- this is my token, use yours.
//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);
//Set the view of the map to the whole US
map.setView([39, -96], 4);
///////////////////////////////////////////////////////////////////////////
// This is the area we're going to use to add data to our map
var dataFileToAdd = 'data/McConnell.geojson'; //<- Point this to the file that you want to include on the map
var dataToAdd;
var featureLayer = L.mapbox.featureLayer()
.loadURL(dataFileToAdd)
.addTo(map);
featureLayer.on('ready', function() {
this.setStyle({
"color": "#B28C00",
"fillColor": "#B28C00",
"weight": .5,
"opacity": 0.65
});
map.fitBounds(featureLayer.getBounds());
});
///////////////////////////////////////////////////////////////////////////
// Add some basic click handling
//featureLayer.on('ready', function(){
//this.eachLayer(function(layer){
//layer.bindPopup('Hi, my AFB value is ' + layer.feature.properties.AFB);
//});
//});

///////////////////////////////////////////////////////////////////////////
// Lets add some more interesting click handling

// Clear out the info panel when you click somewhere in the map
map.on('click',function(e){
	$('#info').fadeOut(200);
    $('#info').empty();
});

// Use this function to handle the click event on the data
var clickHandler = function(e){
  $('#info').empty();

  //e is the click event that is moving up in the browser, it's target is our element that was clicked
  var feature = e.target.feature;

  $('#info').fadeIn(400,function(){
    var info = '';

    info = '<div>This base is named: ' + feature.properties.AFB + '</div>';

    $('#info').append(info);
  });
};

// Register the click event on each of the features in the map
featureLayer.on('ready', function(){
  this.eachLayer(function(layer){
    layer.on('click', clickHandler);
  });
});
