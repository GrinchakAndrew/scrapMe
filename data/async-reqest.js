var request = new XMLHttpRequest()
var STATE_READY = 4
request.open('get', '/', 'true')
request.onreadystatechange = function () {
  if (request.readyState === STATE_READY) {
    console.log(request.responseText)
  }
}
request.send()