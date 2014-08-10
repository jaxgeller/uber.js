var request = require('request');

exports.pingClient = function(cb) {
  var config = this.config;
  config.json.messageType = 'PingClient';
  
  request.post(config, function(err, res, body) {
    if (err) {
      cb(err);
    }
    else if (body.messageType === 'Error') {
      cb(new Error(body.description));
    }
    else {
      cb(null, body);
    }
  });
}

exports.pickup = function(location, cb) {
  var config = this.config;
  config.json.messageType = 'Pickup';
  config.json.pickupLocation = location;

  request.post(config, function(err, res, body) {
    if (err) {
      cb(err);
    }
    else if (body.messageType === 'Error') {
      cb(new Error(body.description));
    }
    else {
      cb(null, body);
    }
  });
}

exports.cancel = function(cb) {
  var config = this.config;
  config.json.messageType = 'PickupCanceledClient';
  request.post(config, function(err, res, body) {
    if (err) {
      cb(err);
    }
    else if (body.messageType === 'Error') {
      cb(new Error(body.description));
    }
    else {
      cb(null, body);
    }
  });
}





