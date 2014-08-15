var getPlaylistTime = function() {
	var el = document.getElementsByClassName('video-time');
	if(!el.length) {
		el = document.getElementsByClassName('timestamp');
	}
	var timesInSeconds = [];
	var totalTimeInSeconds = 0;

	var sum = function(a,b) {
		return a + b;
	};

	function convertToTime(seconds) {
		var hours = Math.floor(seconds / 3600);
		var mins = Math.floor((seconds % 3600) / 60);
		var secs = Math.floor(seconds % 60);

		if (hours   < 10) {hours   = '0' + hours;}
		if (mins < 10) {mins = '0' + mins;}
		if (secs < 10) {secs = '0' + seconds;}

		return hours + ':' + mins + ':' + secs;
	}

	for(var i = 0; i < el.length; i++) {
		var time = el[i].innerHTML.split(':');
		var hours, mins, secs;
		if(time.length === 3) {
			hours = parseInt(time[0], 10);
			mins = parseInt(time[1], 10);
			secs = parseInt(time[2], 10);
			timesInSeconds.push( (hours * 3600) + (mins * 60) + secs );
		} else if (time.length === 2) {
			mins = parseInt(time[0], 10);
			secs = parseInt(time[1], 10);
			timesInSeconds.push( (mins * 60) + secs );
		} else if (time.length === 1) {
			secs = parseInt(time[0], 10);
			timesInSeconds.push( secs );
		}
	}

	totalTimeInSeconds = timesInSeconds.reduce(sum);
	console.log(convertToTime(totalTimeInSeconds));
};

getPlaylistTime();
