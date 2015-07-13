/* Using:
   https://www.mapbox.com/maki/ 
   https://github.com/jseppi/Leaflet.MakiMarkers */
/* Not using, but a possible alternative:
   http://leafletjs.com/examples/custom-icons.htm */
var groceryMarker = L.MakiMarkers
				  .icon({icon: "grocery", color: "#0b0", size: "m"});

L.marker([40.750001, -111.883334], {icon: groceryMarker})
	.addTo(map)
	.bindPopup("<b>Hello world!</b><br />I might be a grocery store.");