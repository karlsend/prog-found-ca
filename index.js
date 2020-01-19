Question 1
var myCar = "Mercedes"

Question 2
var person = {
  name: "Inge",
  age: 27
};

Question 3
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock")
}
else { (outOfStock === false)
  console.log("In stock")
}

Question 4
var numbers = [0, 1, 2, 3, 4];
for (numbers=0; numbers < 5; numbers++ ) {
  console.log(numbers);
}

Question 5
for(var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

Question 6
for (var counter = 15; counter <= 25; counter++) {
   if (counter === 20) {
     console.log(counter)
   }
}

Question 7
var array = [ {stringValue: "dette er en string", numberValue: 5, booleanValue: true}, {stringValue: "dette er andre string", numberValue: 10, booleanValue: false}];
var i;
for (i = 0; i < array.length; i++){
console.log(array[i].numberValue);
console.log(array[i].booleanValue);
}

Question 8
function whatIDontLike(thing)
{console.log("I dont like " + thing)}
whatIDontLike("vegetables");

Question 9
var x = substraction(5, 4);
console.log (x);

function substraction(arg1, arg2) {
  return arg1 - arg2;
}

Question 10
var myArray = [];
function addToArray(name) {
  console.log("My name is" + name)
    myArray.push(name);
    addToArray("Inge");
}

https://github.com/karlsend/prog-found-ca.git
