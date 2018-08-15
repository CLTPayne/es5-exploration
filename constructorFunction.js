// Manually create an object - not very clever...

function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi I\m ' + this.name + '.');
  };
  return obj;
};

// Construtor function
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi I\'m ' + this.name + '.');
  };
};

var person1 = new Person('Jeremy');
var person2 = new Person('Myra');
