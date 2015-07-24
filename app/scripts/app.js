/*
    Setup basic map and map tiles

    can currently be set to either:
    MapQuestLayer OR StamenLayer
    (Sean's leaning toward MapQuestLayer as he's had
     problems with Stamen during basic testing.)

*/
map.addLayer(MapQuestLayer); // map.js


/*
		Setup local datastore instance;

    for more info see app/express.js
    and https://github.com/amark/gun/wiki/

*/
var gun = Gun(location.origin + '/gun');

// loads data from data.json using gun's socrata key, if
// there is `not` existing data at the socrata key, then
// will run getSocrata to access raw data from Socrata site
var socrata = gun.get('socrata').not(getSocrata);


/*
		Once data is loaded, add relevant markers

 */
setTimeout(function() {
	window.showAllGroceries(); // scripts/grocery.js
}, 100);