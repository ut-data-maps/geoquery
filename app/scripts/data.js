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
