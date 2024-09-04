//OOP is the programming paradigm, means that it is the  style for coding.
const user = {
  username: "Muhammad Farrukh",
  id: 2023413,
  isloggedIn: true,
  mydetails: function () {
    console.log(`My name is "${this.username}`);
  },
};

console.log(user.id);
console.log(user.mydetails());

///////////////////////////////////
class myself {
  constructor(name, age, education) {
    this.name = name;
    this.age = age;
    this.education = education;
  }
  details() {
    console.log(
      `My name is ${this.name}. I am ${this.age} years old and my education is ${this.education}`
    );
  }
}

let me = new myself("Muhammad Farrukh", 19, "Bachelors");
me.details();
//////////////////////////////////////////////////////////////////////////
// EXTENDS AND SUPER
class superClass {
  constructor(engine, model) {
    this.engine = engine;
    this.model = model;
  }
  details() {
    console.log(`Engine:${this.engine}
      Model:${this.model}`);
  }
}
let mySuperClass = new superClass("1800cc", 2024);
mySuperClass.details();

class subClass extends superClass {
  constructor(engine, model, year) {
    super(engine, model); // Call the parent class's constructor
    this.year = year;
  }
  details() {
    console.log(`Engine:${this.engine}
      Model:${this.model}, 
      Year:${this.year}`);
  }
}
let sbclas = new subClass("2000cc", 2024, 2024);
sbclas.details();
/////////////////////////////////////////////////////////////////////////////

// METHOD OVERRIDING
class suv {
  callMe() {
    console.log("I am SUV,and i am Boss");
  }
}
class hatchback extends suv {
  callMe() {
    console.log("I am hatchback, and you like me.");
  }
}
class sedan extends suv {
  callMe() {
    console.log("I am sedan, and i am widely used.");
  }
}
let cars = [new hatchback(), new sedan()];
for (let i = 0; i < cars.length; i++) {
  cars[i].callMe();
}
////////////////////////////////////////////////////////////////////////
//METHOD OVERLOADING
// as the method overloading in JS doesnot exist in the way as in other languages, because the JS doesnot let the same method calling with the same name.  But thid=s can be achieved through differnt ways.

class classes {
  func(name1 = "Farrukh", name2 = "Saad", name3 = "Alyan") {
    console.log(`The students are:
      ${name1},
      ${name2},
      ${name3}.`);
  }
}
const clas = new classes();
clas.func();
clas.func("Nitesh");

clas.func("Nitesh", "Muzammil");

clas.func("Nitesh", "Muzammil", "Fayaz");
//////////////////////////////////////////////////////////
//
//PRIVATE ATTRIBUTES AND METHODS
class mydet {
  #name;
  #age;
  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }
  myName() {
    console.log(this.#name);
  }
  myAge() {
    console.log(this.#age);
  }
  myBirthYear() {
    console.log(new Date().getFullYear() - this.#age);
  }
  #myDets() {
    console.log(`Name:${this.#name},
      Age:${this.#age}.`);
  }
}
const mine = new mydet("Muhammad Farrukh", 19);
mine.myName();
mine.myAge();
mine.myBirthYear();
//  mine.#name; //Error, because private attribute can't be accessed in this way.
//  mine.#myDets(); // Error, because private methods can't be accessed in this way.
