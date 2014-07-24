module.exports = function pingClient() {
  
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