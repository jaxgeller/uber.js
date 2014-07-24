# Uber API Client

### First thing you will need is that deviceId, token. You can get these by using Charles Proxy with your phone.

### Use
```js
// Once you have your id's,
var UberClient = require('uberjs');
var uber = new UberClient(token, deviceId);
uber.call_some_method();
```

### Still A work in progress, so far PingClient for Car's around you is working. 