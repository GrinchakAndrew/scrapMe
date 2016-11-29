var request = new XMLHttpRequest();
var STATE_READY = 4;
var text; 
request.open('post', 'static/data/tasks.json', true);
request.onreadystatechange = function () {
  if (request.readyState === STATE_READY) {
    var text = JSON.parse(request.responseText);
	if(text) {
	console.log(text);
}
  }
}
request.send();
