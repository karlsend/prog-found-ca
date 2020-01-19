/*Question 1
Declare and initialise a variable with a string value.
*/
var myCar = "Mercedes"

/*Question 2
Create an object variable called person and give it two properties
(a key and a value) of your choice.
*/
var person = {
  name: "Inge",
  age: 27
};

/*Question 3
Create a variable called outOfStock and assign it a boolean value.
Create an if else statement that checks the value of outOfStock.
If it is true, console log "Out of stock". Otherwise log "In stock".
*/
var outOfStock = true;

if (outOfStock === true) {
  console.log("Out of stock")
}
else { (outOfStock === false)
  console.log("In stock")
}

/*Question 4
Create an array of five numbers.
Loop through the array and console log each value.
*/
var numbers = [0, 1, 2, 3, 4];
for (numbers=0; numbers < 5; numbers++ ) {
  console.log(numbers);
}

/*Question 5
Create a for loop that counts from 15 to 25.
Console log the value of the counter variable inside the loop.
*/
for(var counter = 15; counter <= 25; counter++) {
  console.log(counter);
}

/*Question 6
Using the same loop from the above question,
only log the value of the counter variable if it is equal to 20.
*/
for (var counter = 15; counter <= 25; counter++) {
   if (counter === 20) {
     console.log(counter)
   }
}

/*Question 7
Create an array of two objects.
Each object must have the same three properties (with different values):
    one property with a string value
    one property with a number value
    one property with a boolean value
Loop through the array and console log the number value and the boolean value.
*/
var array = [ {stringValue: "dette er en string", numberValue: 5,
booleanValue: true}, {stringValue: "dette er andre string",
numberValue: 10, booleanValue: false}];
var i;
for (i = 0; i < array.length; i++){
console.log(array[i].numberValue);
console.log(array[i].booleanValue);
}

/*Question 8
Create a function called whatIDontLike that accepts one argument.
Choose a good name for the argument.
Inside the function, log the string "I don't like " together with the argument.
Call the function and pass in a value of your choice.
Example:
If you pass in the value "giraffes", the function should log:
"I don't like giraffes".
*/
function whatIDontLike(thing)
{console.log("I dont like " + thing)}
whatIDontLike("vegetables");

/*Question 9
Create a function that accepts two arguments.

Inside the function, subtract the second
argument from the first and console log the result.
*/
var x = substraction(5, 4);
console.log (x);

function substraction(arg1, arg2) {
  return arg1 - arg2;
}

/*Question 10
Create an empty array.
Create a function that accepts one argument.
Inside the function, add the argument to the array.
Call the function and pass in a value of any type.
*/
var myArray = [];
function addToArray(name) {
  console.log("My name is" + name)
    myArray.push(name);
    addToArray("Inge");
}

https://github.com/karlsend/prog-found-ca.git
