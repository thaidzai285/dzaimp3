const proxy = require('http-proxy-middleware');

module.exports = function(app) {
  app.use('/api', { target: 'http://localhost:5000/'})
}