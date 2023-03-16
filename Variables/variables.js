function demo1(){

    //Using a variable that only can be used in a single block
    for (let i = 0; i < 10; i++) {
        console.log(i); //output = numbers between 0 and 9
    }
      console.log(typeof(i)); //error i is undefined, it means it doesnt exist outside the block where was created
      
    for(var z=0; z < 10; z++) {
        console.log(z);
    }

    console.log(typeof(z)); //z is defined as number. So it became global as soon we created it as "var"
    

}