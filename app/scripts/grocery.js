/* Using:
   https://www.mapbox.com/maki/ 
   https://github.com/jseppi/Leaflet.MakiMarkers */
/* Not using, but a possible alternative:
   http://leafletjs.com/examples/custom-icons.htm */
var groceryMarker = L.MakiMarkers
				  .icon({icon: "grocery", color: "#0b0", size: "m"});

function showAllGroceries () {
	socrata.map().val(function (store) {
		if (!store.location_1) { return; }
		this.path('location_1').val(function(coordinate) {
			var item = {};
			item.storeName = store.name || "ERROR in storeName";
			item.lat = (!coordinate || !coordinate.latitude) ? 42.066586 : coordinate.latitude; // failure shows north of Utah
			item.lng = (!coordinate || !coordinate.longitude) ? -109.003007 : coordinate.longitude; // failure shows east of Utah
			showGrocery(item);
		})
	})
}

function showGrocery (item) {
//	console.log(item);
	L.marker([item.lat, item.lng], {icon: groceryMarker})
		.addTo(map)
		.bindPopup(item.storeName);
}