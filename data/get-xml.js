var request = new XMLHttpRequest();
var STATE_READY = 4;
request.open('get', '/data/tasks.json', 'true');
request.onreadystatechange = function () {
	var parser = new DOMParser();
	if (request.readyState === STATE_READY) {
		window.doc = parser.parseFromString(request.responseText, 'application/xml');
		console.log(window.doc);
	}
}
request.send();