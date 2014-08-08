# Uber.js
> A semi-completed node library of the Uber Api

### Install
---
+ `npm install uber.js --save`


### First steps
---
+ Get token. 
    + Either use the included cli --> `$ node node_modules/uber.js/bin/getToken.js`   
    + Or snoop it from https://m.uber.com/cn
    + **make note of your token**
+ Get location
    + Either use the included cli --> `$ node node_modules/uber.js/bin/getCoordinates.js`
    + Or use an online geolocation
    + **take note of lat and long**



### Use
> with a fixed location

```js
var UberClient = require('uber.js');

// Must init with token (str) and location (obj)
var client = new UberClient(token, {longitude: '', latitude: ''});


// Will return list of cars near location
client.pingClient(function(err, cars) {
    if (err) console.log(err);
    else {
        console.log(cars);
    }
});


/* Schedule a pickup at a certain location.
 * caution on this one
 */
var pickupLocation = {
    longitude: 38.897096,
    latitude: -77.036545
}
client.pickup(pickupLocation, function(err, resp) {
    if(err) console.log(err)
    else {
        console.log(resp);
    }
});


// Cancel a pickup at a certain location.
client.cancel(function(err, resp) {
    if (err) console.log(err);
    else {
        console.log(resp);
    }
});

```

### Use
> with variable location

```js

app.post('/scheduleUber', function(req, res) {
  var token = req.body.token;
  var location = {
    longitude: req.body.longitude,
    latitude: req.body.latitude
  };

  var client = new Uber(token, location);

  client.pickup(location, function(err, response) {
    if (err) res.send(err);
    else {
      res.send('Your uber is scheduled and shall arrive shortly!');
    }
  });
});

```


### API
+ `Client`
    + Constructor
    + param `token` uber token
    + param `location` object of `longitude` & `latitude`
+ `pingClient`
    + param `callback(error, response)`
    + returns list of cars around you
+ `pickup`
    + param `location` object. Must include `longitude` & `latitude` properties
    + param `callback(error, response)`
    + returns a response if the cab is scheduled.
+ `cancel`
    + param `callback(error, response)`
    + returns a response if cab is cancelled.

#### This Api also includes helpers for generating tokens and geocoding on the fly

  + `getToken` **not reconmended**
    + param `email` str uber account email
    + param `password` str uber password
    + param `callback` err token
    + returns token from uber.com/cn

  + `getCoordinates`
    + param `address` str an address to geocode
    + param `callback` err location
    + returns object of long lat

#### Example
```js
var Uber = require('uber.js');

app.get('/getcars', function(req, res) {
  var creds = {
    email: req.body.email,
    password: req.body.password
  }
  var address = req.body.address;
    
  Uber.getToken(creds.email, creds.password, function(err, token) {
    // handle err omitted
    Uber.getCoordinates(address, function(err, location) {
      // handle err omitted
      var client = new Uber(token, location);

      client.doStuff();
    });

  });

});
```



