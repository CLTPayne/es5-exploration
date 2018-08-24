var person = {
  name: {
    first : 'Bob',
    last : 'Smith'
  },
  age: 32,
  gender: 'male',
  interests: ['coding', 'jogging'],
  bio: function() {
    alert(this.name.first + ' ' + this.name.last + ' is ' + this.age +
      ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1]
      + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.first + '.');
  }
};
