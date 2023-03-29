
const displayMessage = (msg,msgContainer) => {
    document.getElementById(msgContainer).innerHTML = msg;
};

const appendMessage = (msg,msgContainer) => {
    let currentMessage = document.getElementById(msgContainer).innerHTML;
    document.getElementById(msgContainer).innerHTML = currentMessage + msg + "<hr>";
};

const clearContainer = (msgContainer) => {
    document.getElementById(msgContainer).innerHTML = "";
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

const set_demoButton3 = () => {
    let demoButton3 = document.getElementById("demoButton3");

    demoButton3.addEventListener("click", function(e){
        let eventInfo = e;
        let idOfButton = this.id;
        console.log(e);
        displayMessage("Event: " + eventInfo + " <hr> Id of Button clicked: " + idOfButton, "msgContainer4");
    });
};

const set_demo4 = () => {

    let demoButton4 = document.getElementById("demoButton4");
    let demoContainer = document.getElementById("demoContainer");

    demoButton4.addEventListener("click",function(e){
        console.log(this.id + " clicked");
        appendMessage(this.id + " clicked","msgContainer5");
       
    });

    demoContainer.addEventListener("click",function(){
        console.log(this.id + " clicked");
        appendMessage(this.id + " clicked","msgContainer5");
    });

    document.addEventListener("click",function(){
        console.log("document clicked");
        appendMessage("document clicked","msgContainer5");
    });

    window.addEventListener("click",function(){
        console.log("window clicked");
        appendMessage("window clicked","msgContainer5");
    });

    document.getElementById("demoButton4Cleaner").addEventListener("click",function(e){
        e.stopPropagation();
        clearContainer("msgContainer5");
    });
};


document.addEventListener("DOMContentLoaded", function(){
    //Adding events
    displayMessage("Hello World. Sending this message from a listener!!! Listener waits for DOM to be fully loaded and then shows this message as a response", "msgContainer");
    set_demoButton1();
    set_demoButton2();
    set_demoButton3();
    set_demo4();

});


