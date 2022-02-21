//Dog Years Project - covert human years to dog years
// set a variable to human years. Ask user to enter thier age.
var humanYears = prompt("How old are you in human years?");
// set a variable your name. Ask user to enter thier name.
var yourName = prompt("What is your name?");
// set a variable for early years. the first two years of a dog's life count as 10.5 human years each.
var earlyYears = 2;
// calculte the number of dog years  for eraly years
earlyYears *= 10.5;
// set a variable for later years. the later years over two years count as 4 human years each.
var laterYears = humanYears - 2;
// calculate the number of dog years for later years.
laterYears *= 4;
// set a variable for the total dog years.
var myAgeInDogYears = earlyYears + laterYears;
//Display the results to the user in the console.
console.log("My name is " + yourName + ". I am " + humanYears + "years old in human years which is " + myAgeInDogYears + " years old in dog years.");
// display the results to the user in the browser(pop-up)
alert("My name is " + yourName + ". I am " + humanYears + "years old in human years which is " + myAgeInDogYears + " years old in dog years.");
// end of program