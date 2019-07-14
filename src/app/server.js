const express = require('express');
const compression = require('compression');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.use(compression());

    server.get('/favicon.ico', (req, res) => {
      return handle(req, res);
    });
    server.get('/:path', (req, res) => {
      const actualPage = '/index';
      const queryParams = { path: req.params.path };
      app.render(req, res, actualPage, queryParams);
    });

    server.get('/', (req, res) => {
      const actualPage = '/index';
      app.render(req, res, actualPage);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(80, err => {
      if (err) throw err;
      console.log('> Ready on http://code.martechpoint.com');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
