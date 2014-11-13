///////////////////////////////////////////////////////////////////////////
// Enter your mapbox map id here to reference it for the base layer

var mapId = 'colinsmalley.k7c3eb9n'; //<- this references the ugly green map that I made
var token = 'pk.eyJ1IjoiY29saW5zbWFsbGV5IiwiYSI6Ims5eGM5V0kifQ.CS8jxClogqQG_mbUZtoUWw'; //<- this is my token, use yours.

//Create the map object with your mapId and token
L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapId);

//Set the view of the map to the whole US
map.setView([39, -96], 4);
