//DOM (document object model) It allows JavaScript to access and change HTML elements.

// change backgroung colour
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

// for change text 
// inner element (.innerHTML) It changes or gets the HTML content of an element.
function changeText() {
    document.getElementById("heading").innerHTML = "Welcome Asfand!";
}

//for change text color
function changeColor() {
    document.getElementById("heading").style.color = "red";
}

//