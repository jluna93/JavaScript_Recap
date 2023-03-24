//"use strict";

//Basic function declaration and usage
function nameOfFunction(optionalParam1,optionalParam2){
    //code goes here like ex:
    let result = optionalParam1 + optionalParam2;
    return result;
}

function demo1(){
    console.log("using the function 'nameOfFunction' that sums two numbers");
    console.log("In that case we will call that function as following: 'nameOfFunction(1,2);'")
    let result = nameOfFunction(1,2);
    console.log("the result of 'nameOfFunction(1,2);'" + result);
}

//Declaring a function using function expression
const exponetialOp = function(number,exponential){ return Math.pow(number,exponential);}

function demo2(){
    console.log("using the function 'exponetialOp' that calculates the exponential of a number");
    console.log("In that case we will call that function as following: 'exponetialOp(1,2);'")
    let result = exponetialOp(5,2);
    console.log("the result of 'exponetialOp(1,2);'" + result);
}


// BEGIN Arrow functions examples -------------------------------------------------------------------
const basicArrowFunction = () =>  {
    let person = {
        name:'Jorge',
        lastName:'Luna',
        age:29
    };

    console.log(person.name);
    console.log(person.lastName);
    console.log(person.age);

    return person;
};

const returningObjLit = () => ({firstName:'Jorge'});

function demo3(){
    console.log("using 'this' just like that. If this code is running on a client browser, it will return a window, if you modify the file function.js and use strict mode it will return a 'undefined'");
    console.log("value of this:");
    console.log(this);
}
//END Arrow functions examples -------------------------------------------------------------------

//BEGIN this keyword exercises-------------------------------------------
let pi = 3.14; //global pi value

//getting the value of pi in the global context
const globalFunction = () =>{console.log("value of pi (global): " + pi)};

//getting the value of pi in the scopeFunction() context
const scopeFunction = () => {
    
    let piObj = {
        pi:3.14159265359,
        getPi: function() { return this.pi; }
    };

    console.log("value of pi(from local 'piObj' object): " + piObj.getPi());
};


function demo4() {
    scopeFunction(); //returns 3.14159265359 from the piObj inside that function
    globalFunction(); //returns 3.14 as the global pi
}

//END-- this keyword exercises-------------------------------------------

//Using bind() to change the starting point of "this"
function demo5(){
    
    let myObject = { 
        firstName:"Steve",
        lastName:"Irwin"
    };

    //Using this inside a function, by default it will point to the global object and if is on strict mode it will return an "undefined"
    console.log('Using "this" inside a function, by default it will point to the global object and if is on strict mode it will return an "undefined"');
    function myFunction() { console.log("Hi I'm " + this.firstName + " "+ this.lastName ) }
    myFunction();

    //Using bind() to change the starting point of "this" to the object myObject
    console.log('Using bind() to change the starting point of "this" to the object myObject');
    let myBindFunction = myFunction.bind(myObject);
    myBindFunction();
    
}

//Using call()
function demo6(){
    
    function meetBiologist(message) { console.log('Hey! Meet ' + this.firstName + ' '+ this.lastName + '! This person has the following message for you: ' + message) }

    const biologist = { 
        firstName:"Steve",
        lastName:"Irwin"
    };

    meetBiologist.call(biologist,"Take care of my cocodriles!");
}


//Using apply()
function demo7(){
    function meetTheOffice(firstName,secondName,thirdName){
        console.log(this.message, firstName);
        console.log(this.message, secondName);
        console.log(this.message, thirdName);
    }
    
    const greet = { message:'Hello '};

    meetTheOffice.apply(greet,["Michael Scott", "Pam", "Jim"]);
}


//Clousures
function demo8(){

    //Let's create a function
    const myId = function(){
        //Variable that holds some basic values. By itself, is not accessible to outer scope.
        let myData ={
            firstName: "",
            lastName: "",
            yearOfBirth: 0
        };
    
        //Function that sets values to the previous variable myData. By itself, is not accessible to outer scope.
        function setData(firstName, lastName, yearOfBirth){
            myData["firstName"] = firstName;
            myData["lastName"] = lastName;
            myData["yearOfBirth"] = yearOfBirth;
        }
    
        //We return two functions that allow us to access to the inner vars and functions of the myId function, that now works more like an object with props and methods.
        return {
            setMyData : function(firstName,lastName,yearOfBirth) { setData(firstName,lastName,yearOfBirth); },
            getMyData : function() { return myData; }
        }
    };
    
    //Using the myId Function.

    const Jorge_Data = myId();
    Jorge_Data.setMyData("Jorge", "Luna", 1993);

    const Dary_Data = myId();
    Dary_Data.setMyData("Dary", "Esquivel", 1994);

    console.log(Jorge_Data.getMyData());
    console.log(Dary_Data.getMyData());

    //This is so powerful, as you can see. We could create two different objects using the same myId function! this is like classes in OOP!!!!
}

