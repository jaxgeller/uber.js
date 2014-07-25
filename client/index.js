var keys = require('./keys');
var request = require('request');

function UberClient (token, deviceId) {
  this.profile = {
    token: token,
    deviceId: deviceId,
    app: 'client',
    uri: 'https://cn-dc1.uber.com/'
  }
  this.location = {
    longitude:
    latitude:
    setLocation: function(long, lat) {
      this.location.longitude = long;
      this.location.lat = lat;
    }
  }
  this.token = token;
  this.deviceId = deviceId;
  this.app = 'client';
  this.uri = 'https://cn-dc1.uber.com/';
}




this.request = {
    method: 'POST',
    uri: keys.uri,
    json: this.opts
  }
var uber = new UberClient(keys.token, keys.deviceId);

uber.pingClient('----','----', function(res) {
  console.log(res);
})