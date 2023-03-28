
const displayMessage = (msg,msgContainer) => {
    document.getElementById(msgContainer).innerHTML = msg;
};

const getValueFromInput = (id) => {
   return document.getElementById(id).value;
};

const set_demoButton1 = () =>{
    let demoButton = document.getElementById("demoButton");
   
    demoButton.addEventListener("click", function(){
        let demoMessage = document.getElementById("demoMessage").value;
         displayMessage(demoMessage, "msgContainer2");
    });

};

const set_demoButton2 = () => {
    let demoButton2 = document.getElementById("demoButton2");

    demoButton2.addEventListener("click", function(){
        displayMessage("You clicked on the button.", "msgContainer3");
    });
    demoButton2.addEventListener("mouseover", function(){
        displayMessage("Your mouse is over the button.", "msgContainer3");
    });
    demoButton2.addEventListener("mouseout", function(){
        displayMessage("Your mouse is out of the button", "msgContainer3");
    });
};

document.addEventListener("DOMContentLoaded", function(){
    //Adding events
    displayMessage("Hello World. Sending this message from a listener!!! Listener waits for DOM to be fully loaded and then shows this message as a response", "msgContainer");
    set_demoButton1();
    set_demoButton2();

});

