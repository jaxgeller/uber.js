var request = require('request');

var url = 'https://m.uber.com/cn';

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

  this.getLocation = function() {
    return {
      latitude: this.config.json.latitude,
      longitude: this.config.json.longitude
    }
  }
  
}


