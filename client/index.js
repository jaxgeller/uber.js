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

var uber = new UberClient(keys.token, keys.deviceId);

uber.pingClient('----','----', function(res) {
  console.log(res);
})