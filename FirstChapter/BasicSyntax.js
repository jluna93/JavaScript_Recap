//First block of code
alert("Executing first code block!");

//Second block of code
alert("Executing second code block!");

//Third block of code
alert("Executing third code block! Now we are going to add two number, (1 + 3 = ?) calling the function doCalc(1,3)");
let resultOfOperation = doCalc(1,3);
alert("And the result is " + resultOfOperation);

//Declaring a function
//A function is a portion of code you can use  anytime and anywhere if accessible
function doCalc(n1,n2){
    //a variable is where you store your stuff, you can declare it using the keyword var or let, altough is more suggestable to use the later.
    //const is for constants, duh!
    let sum = n1 + n2;
    return sum;
}

