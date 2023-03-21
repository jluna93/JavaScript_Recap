
function demo1(){
    //To access to a property of a object, use the dot notation
    let titleOfPage = document.title;
    //To modify a property of a object, use the dot notation and assign it a value as
    //you will do to a single variable
    document.title = "Lol we change this title!!!";
    

}

function demo2Arrays(){
    //Two different ways to create/declare an array
    let myArray1 =  new Array();
    let myArray2 = [];

    //Adding items to array
    myArray1.push(1);
    myArray1.push(2);
    myArray1.push(3);
    myArray1.push(4);
    myArray1.push(5);
    myArray1.push(6);
    //Adding items to array using index
    myArray2[0] = 1;
    myArray2[1] = 2;
    myArray2[2] = 3;
    myArray2[3] = 4;
    myArray2[4] = 5;
    myArray2[5] = 6;

    //Using Array.length in a for, to show the content of an array
    console.log('Lenght of myArray1 = ' + myArray1.length + '; Content: ');
    for(let i = 0; i < myArray1.length; i++) {
        console.log('myArray1[' + i + '] = ' + myArray1[i]);
    }

    //Using Array.forEach() (arrow function)
    console.log('Lenght of myArray2 = ' + myArray2.length + '; Content: ');
    myArray2.forEach((value,index,array) => {
        console.log('myArray2[' + index + '] = ' + value);
        console.log(array);
    });

    //Using conditionals and Array.filter() to create a new array
    console.log('Odd numbers on myArray2: ');
    let myArray2oddNumbers = myArray2.filter((value,index,array)=>{
        if(value % 2){
            console.log('myArray2[' + index + '] = ' + value);
            return value;
        }
    });

    //Using Array.map function  to create a new array similar to myArray1 but each value will be added +5
    let myArray1plus5 = myArray1.map((value,currentValue,currentIndex,array) => {
        return value + 5;
    });

    //Showing the conntet of myArray1plus5
    console.log('Lenght of myArray1plus5 = ' + myArray1plus5.length + '; Content: ');
        myArray1plus5.forEach((value,index,array) => { 
        console.log('myArray1plus5[' + index + '] = ' + value);
    });

    //Using Array.reduce function 
    const initialValue = 0;
    let myArray2Single = myArray2.reduce((accomulator,currentValue)=> accomulator + currentValue,initialValue);
    console.log("Sum of all of the elements of myArray2 = " + myArray2Single);
}

function demo3exercise(){
    //Exercise
    /* Given an array of numbers, how do you remove all duplicates and
     return only unique values? */

    let myArray = [1,2,3,4,5,6,7,8,9,10,4,3,5,6,7];

    let myArrayNoDups = myArray.filter((value,index,array) =>{
        let NoDup = true;
        let currentValue = value;
        let count = 0;

        myArray.forEach((value,index,array)=>{
            if(currentValue === value){
                count++;
                if(count > 1){
                    NoDup = false;
                }
            }
        });

        if(NoDup){
            return value;
        }

    });

    myArrayNoDups.forEach((value,index,array) => { console.log(value)});
}