var map = new L.Map("map", {
	center: new L.LatLng(40.73, -111.895),
	zoom: 12
});
//40.734737, -111.88333333333334
//40.734, -111.904349
// 40.7335

var maximumZoom = 18;

/**********************************************************
 * MapQuest map tiles
 *********************************************************/
var MapQuestLayer = L.tileLayer(' 	http://otile1.mqcdn.com/tiles/1.0.0/map/{z}/{x}/{y}.jpg', {
	maxZoom: maximumZoom,
	detectRetina: true,
	attribution: 'Data, imagery and map information provided by <a href="http://www.mapquest.com/" target="_blank">MapQuest</a> & <a href="http://www.openstreetmap.org/copyright"> © OpenStreetMap contributors</a> (<a href="www.opendatacommons.org/licenses/odbl">ODbL</a>)'
});


/**********************************************************
 * Stamen map tiles
 * avail styles: "toner", "terrain", or "watercolor"
 *********************************************************/
var StamenLayer = new L.StamenTileLayer("terrain", {
	detectRetina: true,
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.'
});