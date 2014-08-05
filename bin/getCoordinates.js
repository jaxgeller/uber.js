#!/bin/env node

var inquirer = require("inquirer");
var getCoordinates = require('../Client/helpers').getCoordinates;

var questions = [{
  type: 'input',
  name: 'address',
  message: 'Address'
}];

inquirer.prompt(questions, function(answer) {
  getCoordinates(answer.address, function(err, coords) {
    if (err) {
      console.log(err);
    }
    else {
      var response = ['\nLatitude: ', coords.latitude, ', Longitude: ', coords.longitude ].join('')
      console.log(response);
    }
  });
});