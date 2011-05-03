"use strict";

function validatePart(input, regex) {
  return input.split('.').every(function(part) {
      return regex.test(part);
  });
}

function validLocalPart(input) {
  var regex = /^[a-z0-9!#$%&'*+\-\/=?\^_`{|}~]+$/;
  return validatePart(input, regex);
}

function validDomainPart(input) {
  var regex = /^[a-z0-9\-]+$/;
  return validatePart(input, regex);  
}

function validEmail(email) {
  var parts = email.split('@');
  if (parts.length !== 2) {
    return false;
  }  
  return validLocalPart(parts[0]) && validDomainPart(parts[1]);
}

var test_email = "testur+garbage@testur.is";
console.log(validEmail(test_email));

var test_email = "carl.anthony.youngblood@cisco.no";
console.log(validEmail(test_email));

var test_email = "testur+garbage.second_part@testur.is";
console.log(validEmail(test_email));

var test_email = "testur+garbage@testur.bad_domain.com";
console.log(validEmail(test_email));

var test_email = "no..consecutive.dots@testur.is";
console.log(validEmail(test_email));

