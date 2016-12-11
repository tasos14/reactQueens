import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './routes';
import Pengines from 'pengines';
import bodyParser from 'body-parser';


// initialize the server and configure support for ejs templates
const app = new Express();
const server = new Server(app);
app.set('view enmgine', 'ejs');
app.set('views', path.join(__dirname,'views'));

// define the folder that will be used for static assets
app.use(Express.static(path.join(__dirname, 'static')));

// use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// universal routing and rendering
app.get('*', (req, res) => {
  match(
    { routes, location},
    (err, redirectLocation, renderProps) =>{

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        markup = renderToString(<RouterContext {...renderProps}/>);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });

    }
  );
});

app.post('/', (req, res) => {
  let size = req.body.size;
  let queens = req.body.queens;

  let query = "queens(".concat(size+",["+queens+"])");

  // create pengine
  let pengine = new Pengines({
    server: "http://localhost:3030/pengine",
    application: 'queens',
    destroy: true,
    ask: query
  }).on('create', function() {
      console.info("Pengine created.");
    }).on('success', function(resault) {
      let answer = true;
      res.json(answer);
    }).on('failure', function() {
      console.info("failed..");
      let answer = false;
      res.json(answer);
    }).on('error', function() {
      console.info("Error: " + this.data);
    }).on('destroy', function() {
      console.info("pengine destroyed.\n---------------------------");
    });

  // res.json(answer);
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

server.listen(port, err => {
  if (err) {
    return console.console.error(err);
  }

  console.info(`Server running on http://localhost:${port} [${env}]`);
});
