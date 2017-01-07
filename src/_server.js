'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _http = require('http');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _pengines = require('pengines');

var _pengines2 = _interopRequireDefault(_pengines);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize the server and configure support for ejs templates
var app = new _express2.default();
var server = new _http.Server(app);
app.set('view enmgine', 'ejs');
app.set('views', _path2.default.join(__dirname, 'views'));

// define the folder that will be used for static assets
app.use(_express2.default.static(_path2.default.join(__dirname, 'static')));

// use body-parser as middle-ware
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

app.get("*", function (req, res) {
  res.sendFile(_path2.default.join(__dirname, "static/index.html"));
});

app.post('/', function (req, res) {
  var size = req.body.size;
  var queens = req.body.queens;

  var query = "queens(".concat(size + ",[" + queens + "])");

  // create pengine
  var pengine = new _pengines2.default({
    server: "http://localhost:3030/pengine",
    application: 'queens',
    destroy: true,
    ask: query
  }).on('create', function () {
    console.info("Pengine created.");
  }).on('success', function (resault) {
    var answer = true;
    res.json(answer);
  }).on('failure', function () {
    console.info("failed..");
    var answer = false;
    res.json(answer);
  }).on('error', function () {
    console.info("Error: " + this.data);
  }).on('destroy', function () {
    console.info("pengine destroyed.\n---------------------------");
  });

  // res.json(answer);
});

// start the server
var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'production';

server.listen(port, function (err) {
  if (err) {
    return console.console.error(err);
  }

  console.info('Server running on http://localhost:' + port + ' [' + env + ']');
});
