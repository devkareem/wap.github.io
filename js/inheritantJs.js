'use strict';

// Question 1
String.prototype.filter = function(bannedWords) {
  return this.split(" ")
              .filter(word => ! bannedWords.includes(word))
              .join(" ");
}
const string = "I can do Javascript easily";
const bannedWords = ['can', 'easily'];
const flteredStr = string.filter(bannedWords);
console.log("Question 1, String filtering. String is I can do Javascript easily, banned words are ['can', 'easily'], expected output is 'I do Javascript'");
console.log("Actual output is", flteredStr);
console.log(".........................................");



//Question 2
Array.prototype.removeFirst = function(value) {
  const filtered = [];
  let isFound = false; 
  this.forEach(element => {
    if(!isFound && element === value) {
      isFound = true;
    }
    else {
      filtered.push(element);
    }
  });

  return filtered;
}
Array.prototype.bubbleSort = function() {
  let sorted = [];
  const length = this.length;
  let self = this;
  while (sorted.length !== length) {
    const min = Math.min(...self);
    sorted.push(min);
    self = self.removeFirst(min);
  }

  return sorted;
}
const nums = [0,4,5,-1,-1,-2,-2];
const sorted = nums.bubbleSort();
console.log("Question 2, Bubble Sortng. Array is [0,4,5,-1,-1,-2,-2], expected output is [-2,-2,-2,-2,0,4,5]");
console.log("Actual output is", sorted);
console.log(".........................................");




//Question 3 Part 1
function Person(name) {
  this.name = name;
}

const teacher = new Person("Joe");
Person.prototype.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
}
console.log("Question 3 using function constructor");
teacher.teach("Math");
console.log(".........................................");





// Question 3 Part 2
const personObj = {
  name: 'Joe'
};

const teacherObj = Object.create(personObj);
teacherObj.teach = function (subject) {
  console.log(this.name + " is now teaching " + subject);
}

console.log("Question 3 using Object create");
teacherObj.teach("Math");
console.log(".........................................");



// QUestion 4
const PersonQues4 = function(name, age) {
  this.name = name;
  this.age = age;
  this.greeting = function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age +  " years old.");
  };
  this.salute = function() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
};

const Student = function (name, age, major) {
  PersonQues4.call(this, name, age);
  this.major = major;
  this.greeting = function () {
    console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
  }
}

const Professor = function(name, age, department) {
  PersonQues4.call(this, name, age);
  this.department = department;
  this.greeting = function () {
    console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
  }
}

console.log("Question 4 using function constructor");
const myStu = new Student("Adam", 20, "CS");
myStu.greeting();
myStu.salute();

const myProf = new Professor("Joe", 40, "CS");
myProf.greeting();
myProf.salute();
console.log(".........................................");




// using object.create
const personQues4Obj = {
  name: "NA",
  age: "NA",
  greeting: function () {
    console.log("Greetings, my name is " + this.name + " and I am " + this.age +  " years old.");
  },
  salute: function() {
    console.log("Good morning!, and in case I dont see you, good afternoon, good evening and good night!");
  }
};

const student = Object.create(personQues4Obj);
student.name = "Adam";
student.age = 20;
student.major = 'cs';
student.greeting = function () {
  console.log("Hey, my name is " + this.name + " and I am studying " + this.major);
}

const prof = Object.create(personQues4Obj);
prof.name = "Joe";
prof.age = 44;
prof.department = 'cs';
prof.greeting = function () {
  console.log("Good day, my name is " + this.name + " and I am in the " + this.department + " department.");
}


console.log("Question 4 using Object Create");
student.greeting();
student.salute();

prof.greeting();
prof.salute();
console.log(".........................................");