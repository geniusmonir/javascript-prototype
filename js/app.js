//Check Prototype Property for Object
document.addEventListener("keypress", function (e) {
  if (e.keyCode === 13 || e.which === 13) {
    //code
  }
  console.log(e);
});

//This is an object with constructor Function
//Js don't have class facility like java or other language, it has this constructor function that can be used just like as Java Class!
var Person = function (name, yearofBirth, job) {
  this.name = name;
  this.yearofBirth = yearofBirth;
  this.job = job;

  this.calculateAge = function () {
    this.age = 2020 - this.yearofBirth;
  };
};

//This is inheritence, this 'lastName' property with value 'smith' will be autometically attached with all newly created Object using Person function constructor. We can make it possible only for 'prototype' property.
Person.prototype.lastName = "Smith";

//We can inherit a function also. that again contain 'willRetireAfter' property. this will be inherited in all newly created object like 'lastName' Property.
Person.prototype.retiredIn = function () {
  this.willRetireAfter = 65 - this.age;
};

//Creating new object,
var jane = new Person("Jane", 1995, "Designer");
var mike = new Person("Mike", 1965, "Driver");

//Try making new Object by
//{var turna = new Person('Turna',1998,'Fucker');}

//Calling Function is Required,
//Tt will be more easy if we use IFFI. (function(){//code})();  this is IFFI, no function calling is required!

jane.calculateAge();
jane.retiredIn();

mike.calculateAge();
mike.retiredIn();

//Function calling is required for all newly created object, this is too much boring try use IFFI.
// {turna.calculateAge();}
// {turna.retiredIn();}

//Every Object will be consoled with the 'lastName' property and 'willRetireAfter' property though there is no own property of of 'Person' object named 'lastName','willRetireAfter'. Both two property is inherited from outside by 'prototype' property.

console.log(jane);
console.log(mike);

// {console.log(truna);}
