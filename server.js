/* eslint no-console:0 */
require('babel-register');
const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const _ = require('lodash');
const fs = require('fs');
const App = require('./js/Landing').default;

const StaticRouter = ReactRouter.StaticRouter;
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);

const server = express();
// server.use(compression());
server.use('/public', express.static('./public'));

server.use((req, res) => {
  console.log(req.url);
  const context = {};
  const body = ReactDOMServer.renderToString(
    React.createElement(
      StaticRouter,
      { location: req.url, context },
      React.createElement(App)
    )
  );

  if (context.url) {
    res.redirect(context.url);
  }

  res.write(template({ body }));
  res.end();
});

console.log(`Listening on port ${port}`);
server.listen(port);

// if (context.url) {
// }

// const bodyParser = require('body-parser');
// const path = require('path');
// const app = express();
// app.disable('x-powered-by');
// app.use(express.static(path.join(__dirname, 'build')));
// // need to declare a "catch all" route on your express server
// // that captures all page requests and directs them to the client
// // the react-router do the route part
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });
// app.listen(process.env.PORT || 8080, function() {
//   console.log(`Frontend start on http://localhost:8080`);
// });
