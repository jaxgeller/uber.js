var request = require('request');
var geocoder = require('node-geocoder').getGeocoder('google', 'http');


exports.getToken = function(email, password, cb) {
  var config = {
    url: 'https://m.uber.com/cn',
    json: {
      messageType: 'Login',
      app: 'client',
      email: email,
      password: password  
    }
  }
  request.post(config, function(err, res, body) {
    if (err) {
      cb(err);
    } 
    else if (body.messageType === 'Error') {
      cb(new Error(body.description));
    }
    else if (body.messageType === 'OK' && body.token) {
      cb(null, body.token);
    }
  });
}


exports.getCoordinates = function(address, cb) {
  geocoder.geocode(address, function(err, data) {
    if (err) {
      cb(err);
    }
    else {
      cb(null, {
        latitude: data[0].latitude, 
        longitude: data[0].longitude
      });
    }
  });
}