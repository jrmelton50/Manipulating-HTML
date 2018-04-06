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
    var $button = $("<button>Click Me</button>");
    $button.click(displayAlert);
    // div.append($button); // This says [object Object] where the button should be...
    $button.appendTo(div);
}

function objective2(){
    var $objective2Content = $("#objective2Content");
    var div = makeHeaderAndDivAndReturnDiv();
    $objective2Content.appendTo(div);
}

function objective3() {
    var mainDiv = makeHeaderAndDivAndReturnDiv();
    var $div = $("<div></div>");
    $div.css({
        "height": "100px",
        "background-color": "black",
    });
    $div.mouseover(addBackgroundColor); 
    $div.mouseout(removeBackgroundColor); 
    $div.appendTo(mainDiv);
}

function objective4() {
    var $div = makeHeaderAndDivAndReturnDiv();  
    var $paragraph = $("<p> some text</p>"); 
    $paragraph.click(changeColor);
    $paragraph.appendTo($div);
}

function objective5() {
    var $div = makeHeaderAndDivAndReturnDiv(); 
    var $button =  $("<button> Click me! </button>");
    var $emptyDiv = $("<div></div>");
    $button.click(function() {
        // Add span to emptyDiv
        var $span = $("<span> Jessie Melton </span>"); 
        $span.appendTo($emptyDiv);
    });
    $button.appendTo($div); 
    $emptyDiv.appendTo($div); 
}
function objective6() {
    var $div = makeHeaderAndDivAndReturnDiv(); 
    var $button = $("<button> Click me! </button>");
    var $ul = $("<ul></ul>");
    var friends = ["Kaitlyn", "Josh", "Alex", "Allison", "Scott", "Caitlin", "Emma", "Alice", "Jonna", "Jordan"];
    var index = 0;
    $button.click(function() {
        var $li = $("<li>" + friends[index] + "</li>");
        $li.appendTo($ul);
        index++;
    });
    $button.appendTo($div); 
    $ul.appendTo($div); 
}

// Helper function to make things easier to read
function displayAlert() {
    alert("You clicked the button! Good job!");
}

function displayInput() {
    alert($("#textBox").val());
}

function makeHeaderAndDivAndReturnDiv(isFirstDiv) {  
    var $div = $("<div></div>"); // document.createElement("div");
    if (!isFirstDiv) {                  // I don't want a margin on the first div
        $div.css("margin-top", "3rem"); // div.style.marginTop = "3rem";   // I added a top margin to make it more readable on the website
    } 
    objectiveNumber++;
    var $h3 = $("<h3>Objective " + objectiveNumber + "</h3>"); // document.createElement("h3");
    // var text = document.createTextNode("Objective " + objectiveNumber);
    // h3.appendChild(text);
    $h3.appendTo($div); // div.appendChild(h3);
    $div.appendTo("body"); // document.body.appendChild(div);
    return $div;
}

function addBackgroundColor() {
    $(this).css("background-color", "pink");
}

function removeBackgroundColor() {
    $(this).css("background-color", "black");
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
    $(this).css("color", "rgb(" + redNumberValue + ", " + greenNumberValue + ", " + blueNumberValue + ")");
}