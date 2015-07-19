var map = L.map('map').setView([40.75, -111.88333333333334], 12);

// TODO: Currently using example map's mapbox url.  Update to our desired tiles!
// TODO: Currently using example map's copyright option.  Decide and add our copyright option/s.
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6IjZjNmRjNzk3ZmE2MTcwOTEwMGY0MzU3YjUzOWFmNWZhIn0.Y8bhBaUMqFiPrDRW9hieoQ', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(map);

// create local gun datastore instance;
// see also app/express.js
var gun = Gun(location.origin + '/gun');

// loads data from data.json using gun's socrata key, if
// there is `not` existing data at the socrata key, then
// will run getSocrata to access raw data from Socrata site
var socrata = gun.get('socrata').not(getSocrata);

function getSocrata() {
	var dataUrls = [
		// official - non-Salt Lake County;
		// human-readable version at:
		// https://opendata.utah.gov/Business-Economy/Employers-In-Utah-Firmfind-Except-Salt-Lake/ni5h-hag4
	  , "https://opendata.utah.gov/resource/ni5h-hag4.json?$where=naics='445110'"
		// official - Salt Lake County only;
		// human-readable version at:
		// https://opendata.utah.gov/Business-Economy/Employers-SL-County/rvrt-7t4n
		, "https://opendata.utah.gov/resource/rvrt-7t4n.json?$where=naics='445110'"
	];
	// Get json from the SODA API
	dataUrls.forEach(function(current, index, array){
		console.log(current);
		$.getJSON(current, function(data, status) {
			console.log(data);
			data.forEach(function(item, index) {
				// Add each leaf and to gun's socrata key
				socrata.set(item);
			})
		})
	});
	return this.put({gun: 'initialized'}).key('socrata');
}

setTimeout(function() {
	window.showAllGroceries(); // scripts/grocery.js
}, 100);