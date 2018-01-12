function number() {

var testprompt= prompt ("Enter a Number!", "");
var test= parseInt(testprompt, 10);
var answ= 0;
for (var i= 1; i< test+1; i+= 1) {
    answ+= i;
}
console.log (answ);
}

function play () {
    var testprompt= prompt ("Do you want to play a game?");
    var x="no";
    var y="";
    if (testprompt=="yes") {
    do { 
        var z=prompt ("Enter a word");
        y+=" "+z;
        console.log (y);
        x=prompt ("Do you want to play again?");
       
        } while (x=="yes") }
} 

function test() {
    var testprompt= prompt ("Would you like to print your name?");
    var x= "yes";
    var y="";
    if (testprompt=="yes") {
       var z=prompt ("Enter your name")
       y= "Hello. My name is "+z;
       console.log (y);
       while (x=="yes") {
           x= prompt ("Would you like to print this again?");
           console.log (y+="!");
       }
    } 
}

function food() {
    var testprompt= prompt("Pick a time: Morning, noon, or evening.");
    var x=" "
    if (testprompt=="Morning") {
        x= "Good morning! A fry up would be good for breakfast, wouldn't it?";
        console.log (x);
    } else if (testprompt=="noon") {
        x= "Lovely afternoon! We suggest a turkey sandwich for lunch!";
        console.log (x);
    } else (textprompt=="evening") {
        x= "Wonderful evening! Let's have some Korean BBQ for dinner.";
        console.log (x);
    }
}

