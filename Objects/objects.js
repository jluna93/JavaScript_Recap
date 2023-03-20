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

    //Adding items to array using index
    myArray2[0] = 1;
    myArray2[1] = 2;
    myArray2[2] = 3;

    //Using Array.length in a for, to show the content of an array
    console.log('Lenght of myArray1 = ' + myArray1.length + '; Content: ');
    for(let i = 0; i < myArray1.length; i++) {
        console.log('myArray1[' + i + '] = ' + myArray1[i]);
    }

    console.log('Lenght of myArray2 = ' + myArray2.length + '; Content: ');
    for(let i = 0; i < myArray2.length; i++) {
        console.log('myArray2[' + i + '] = ' + myArray2[i]);
    }

}