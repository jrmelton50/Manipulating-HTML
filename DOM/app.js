var objectiveNumber = 0; // Global variable used to display objective number

// OBJECTIVE 1
objective1();

// OBJECTIVE 2
objective2();

// OBJECTIVE 3
objective3();

// OBJECTIVE 4
objective4();

// OBJECTIVE 5
objective5();

// OBJECTIVE 6
objective6();

// Functions to run each objective so I can use the same variables without accidently overwriting one.
function objective1() {
    var div = makeHeaderAndDivAndReturnDiv(true);
    var button = document.createElement("button");
    button.addEventListener("click", displayAlert);
    div.appendChild(button);
}

function objective2(){
    var objective2Content = document.getElementById("objective2Content");
    var div = makeHeaderAndDivAndReturnDiv();
    div.appendChild(objective2Content);
}

function objective3() {
    var mainDiv = makeHeaderAndDivAndReturnDiv();
    var div = document.createElement("div");
    div.style.height = "100px";
    div.style.backgroundColor = "black";
    div.addEventListener("mouseover", addBackgroundColor);
    div.addEventListener("mouseout", removeBackgroundColor);
    mainDiv.appendChild(div);
}

function objective4() {
    var div = makeHeaderAndDivAndReturnDiv();  
    var paragraph = document.createElement("p");
    var text = document.createTextNode("some text");
    paragraph.appendChild(text);
    paragraph.addEventListener("click", changeColor); 
    div.appendChild(paragraph);
}

function objective5() {
    var div = makeHeaderAndDivAndReturnDiv(); 
    var button = document.createElement("button");
    var emptyDiv = document.createElement("div");
    button.addEventListener("click", function() {
        // Add span to emptyDiv
        var span = document.createElement("SPAN");
        var text = document.createTextNode("Jessie Melton");
        span.appendChild(text);
        emptyDiv.appendChild(span);
    });
    div.appendChild(button);
    div.appendChild(emptyDiv);
}
function objective6() {
    var div = makeHeaderAndDivAndReturnDiv(); 
    var button = document.createElement("button");
    var ul = document.createElement("ul");
    var friends = ["Kaitlyn", "Josh", "Alex", "Allison", "Scott", "Caitlin", "Emma", "Alice", "Jonna", "Jordan"];
    var index = 0;
    button.addEventListener("click", function() {
        var li = document.createElement("li");
        var name = document.createTextNode(friends[index]);
        li.appendChild(name);
        ul.appendChild(li);
        index++;
    });
    div.appendChild(button);
    div.appendChild(ul);
}

// Helper function to make things easier to read
function displayAlert() {
    alert("You clicked the button! Good job!");
}

function displayInput() {
    var message = document.getElementById("textBox").value;
    alert(message);
}

function makeHeaderAndDivAndReturnDiv(isFirstDiv) {  
    var div = document.createElement("div");
    if (!isFirstDiv) {                  // I don't want a margin on the first div
        div.style.marginTop = "3rem";   // I added a top margin to make it more readable on the website
    } 
    objectiveNumber++;
    var h3 = document.createElement("h3");
    var text = document.createTextNode("Objective " + objectiveNumber);
    h3.appendChild(text);
    div.appendChild(h3);
    document.body.appendChild(div);
    return div;
}

function addBackgroundColor() {
    this.style.backgroundColor = "pink";
}

function removeBackgroundColor() {
    this.style.backgroundColor = "black";
}

// function changeColor() {
//     var colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "black"];
//     var num = Math.floor(Math.random() * colors.length);
//     this.style.color = colors[num];
// }

// CHALLENGE ACCEPTED! 
function changeColor() {
    var redNumberValue = Math.floor(Math.random() * 255);
    var greenNumberValue = Math.floor(Math.random() * 255);
    var blueNumberValue = Math.floor(Math.random() * 255);
    this.style.color = "rgb(" + redNumberValue + ", " + greenNumberValue + ", " + blueNumberValue + ")";
}