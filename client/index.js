var request = require('request');

var url = 'https://m.uber.com/cn';
var api = require('./api');
var helpers = require('./helpers');

var UberClient = function(token, location) {
  if (!token) {
    throw new Error('You need a token to use the api. Try using bin/getToken');
  }
  if (!location.longitude || !location.latitude) {
    throw new Error('You need to supply your location. Try using bin/getCoordinates');
  }
  
  this.config = {
    url: 'https://m.uber.com/cn',
    json: {
      token: token,
      longitude: location.longitude,
      latitude: location.latitude,
      app: 'client',
      messageType: '',
    }
  }

  this.pingClient = api.pingClient;
  this.pickup = api.pickup;
  this.cancel = api.cancel;

  this.getToken = helpers.getToken;
  this.getCoordinates = helpers.getCoordinates;
  
}


module.exports = UberClient;