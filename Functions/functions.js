const exponetialOp = function(number,exponential){ return Math.pow(number,exponential);}

demo2();

//basic function as example
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


function demo2(){
    console.log("using the function 'exponetialOp' that calculates the exponential of a number");
    console.log("In that case we will call that function as following: 'exponetialOp(1,2);'")
    let result = exponetialOp(5,2);
    console.log("the result of 'exponetialOp(1,2);'" + result);
}