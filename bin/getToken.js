#!/bin/env node

var inquirer = require("inquirer");
var getToken = require('../Client/helpers').getToken;

var questions = [{
  type: 'input',
  name: 'email',
  message: 'Uber email'
}, {
  type: 'password',
  name: 'password',
  message: 'Uber password'
}];


inquirer.prompt(questions, function(answer) {
  getToken(answer.email, answer.password, function(err, token) {
    if (err) {
      console.log(err);
    }
    else {
      console.log('\nToken: ' + token);
    }
  });
});