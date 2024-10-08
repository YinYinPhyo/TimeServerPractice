var http = require('http')
var url = require('url')

// Function to parse time and return only hour, minute, and second
function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

// Function to return UNIX epoch time
function unixtime (time) {
  return { unixtime : time.getTime() }
}

// Function to return current year, month, date, hour, and minute
function currenttime (time) {
  return {
    year: time.getFullYear(),
    month: time.getMonth() + 1, // Months are zero-indexed in JavaScript
    date: time.getDate(),
    hour: time.getHours(),
    minute: time.getMinutes()
  }
}

var server = http.createServer(function (req, res) {
  var parsedUrl = url.parse(req.url, true)
  var time = new Date(parsedUrl.query.iso)
  var result

  // Endpoint for /api/parsetime
  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  }
  // Endpoint for /api/unixtime
  else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }
  // Endpoint for /api/currenttime
  else if (/^\/api\/currenttime/.test(req.url)) {
    result = currenttime(new Date()) // No need for query string, just get current time
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})

server.listen(Number(process.argv[2]))
console.log('Node server running on http://localhost:'+ process.argv[2]);