function getElement(selection) {
  const element = document.querySelector(selection);
  // console.log(element);
  if (element) {
    return element;
  }
  throw new Error(`Please check ${selection} selector, no such element exists`);
}

getElement(".first-counter");
getElement(".second-counter");

// select elements
function Counter(element, value) {
  (this.counter = element), (this.value = value);
  this.decreaseBtn = element.querySelector(".decrease");
  this.resetBtn = element.querySelector(".reset");
  this.increaseBtn = element.querySelector(".increase");
  this.valueDOM = element.querySelector(".value");
  this.valueDOM.textContent = this.value;
  console.log(this);
  // counter complete and bind this to all function
  this.decrease = this.decrease.bind(this);
  this.reset = this.reset.bind(this);
  this.increase = this.increase.bind(this);
  
  this.decreaseBtn.addEventListener("click", this.decrease);
  this.resetBtn.addEventListener("click", this.reset);
  this.increaseBtn.addEventListener("click", this.increase);
}

// functions
Counter.prototype.decrease = function () {
  console.log(this);
  this.value--;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.reset = function () {
  console.log(this);
  this.value = 0;
  this.valueDOM.textContent = this.value;
};
Counter.prototype.increase = function () {
  console.log(this);
  this.value++;
  this.valueDOM.textContent = this.value;
};

const firstCounter = new Counter(getElement(".first-counter"), 100);
const secondCounter = new Counter(getElement(".second-counter"), 200);

firstCounter.reset();
