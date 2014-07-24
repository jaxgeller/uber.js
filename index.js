var keys = require('./keys');
var request = require('request');

function UberClient (token, deviceId) {
  this.opts = {
    token: keys.token,
    deviceId: keys.deviceId,
    app: 'client'
  }
  this.request = {
    method: 'POST',
    uri: keys.uri,
    json: this.opts
  }
}

UberClient.prototype.pingClient = function(lgtd, lat, cb) {
  this.opts.messageType = 'PingClient';
  this.opts.latitude = lat;
  this.opts.longitude = lgtd;
  request(this.request, function(err, res, body) {
    if (err) {
      cb(new Error(err));
    }
    else {
      cb(body);  
    }
  })
};



var uber = new UberClient(keys.token, keys.deviceId);


uber.pingClient('----','----', function(res) {
  console.log(res);
})