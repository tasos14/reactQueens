/* eslint-disable no-console */
const path = require('path');
const { Server } = require('http');
const Express = require('express');
const Pengines = require('pengines');
const bodyParser = require('body-parser');


// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'src', 'static')));

// use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// allow CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'static/index.html'));
});

app.get('/report', (req, res) => {
  res.sendFile(path.join(__dirname, 'src', 'static/report.html'));
});

app.post('/', (req, res) => {
  const { size, queens } = req.body;

  const query = `queens(${size}, [${queens}])`;

  const peng = Pengines({
    server: 'http://localhost:3030/pengine',
    application: 'queens',
    destroy: true,
    ask: query,
  }).on('create', () => {
    console.info('---------------------------\nPengine created.');
  }).on('success', () => {
    const result = true;
    res.json({ result });
    peng.destroy();
  }).on('failure', () => {
    console.info('failed..');
    const result = false;
    res.json({ result });
  })
    .on('error', (err) => {
      console.info(`Error: ${err}`);
    })
    .on('destroy', () => {
      console.info('pengine destroyed.\n---------------------------');
    });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, () => {
  console.info(`Server running on http://localhost:${port} [${env}]`);
});
