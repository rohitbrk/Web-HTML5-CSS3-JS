// the keyword "this" acts differently in browser and nodejs environment
// In browser too, it will represent the window object
// In nodejs, it represents global object

// In methods of the object, the keyword this represents the current object calling the method
// In normal functions, it reprensts the global object

// If the normal function is decalred using function keyword it takes the inner env
// In arrow functions, it takes the outer context of the arrow function

const obj = {
  title: "a",
  tags: ["a", "b", "c"],
  play: function () {
    this.tags.forEach(function(tag) {
      console.log(this.title, tag);
    });
  },
};
// this gives undefined because the callback function is not a method, its a normal function and it represents the global object

const obj = {
  title: "a",
  tags: ["a", "b", "c"],
  play: function () {
    this.tags.forEach((tag) => {
      console.log(this.title, tag);
    });
  },
};

// this gives correct answer, because the this context in arrow function is taken from the scope outer of the arrow function
