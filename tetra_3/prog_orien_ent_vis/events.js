window.addEventListener("load", function() {
    alert("Page is fully loaded");
});
window.addEventListener("unload", function() {
    alert("Page is unloading");
});

window.addEventListener("resize", function() {
    alert("Window resized to: " + window.innerWidth + "x" + window.innerHeight);
});


document.getElementById("myInput").addEventListener("blur", function() {
    alert("Input field lost focus");
});

document.getElementById("mySelect").addEventListener("change", function() {
    alert("Selection changed to: " + this.value);
});

document.getElementById("clickme").addEventListener("click", function() {
    alert("Button was clicked!");
});

document.getElementById("dblclick").addEventListener("dblclick", function() {
    alert("Button was double-clicked!");
});

document.getElementById("onfocus").addEventListener("focus", function() {
    this.style.backgroundColor = "yellow";
});

document.getElementById("keydown").addEventListener("keydown", function(event) {
    alert("Youn press key down"+event.key)
    
});

document.getElementById("keypress").addEventListener("keypress", function(event) {
    alert("Key pressed: " + event.key);
});

document.getElementById("keyup").addEventListener("keyup", function(event) {
    alert("Key released: " + event.key);
});


document.getElementById("mousedown").addEventListener("mousedown", function() {
    alert("Mouse button held down on button");
});

document.getElementById("mousemove").addEventListener("mousemove", function(event) {
    alert("Mouse moved: " + event.clientX + ", " + event.clientY);
});

document.getElementById("mouseout").addEventListener("mouseout", function() {
    alert("Mouse moved out of the box");
});

document.getElementById("mouseover").addEventListener("mouseover", function() {
    this.style.backgroundColor = "lightblue";
});

document.getElementById("mouseup").addEventListener("mouseup", function() {
    alert("Mouse button released on button");
});


document.getElementById("myForm").addEventListener("reset", function() {
    alert("Form was reset");
});

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});


document.getElementById("myTextarea").addEventListener("select", function() {
    alert("Text selected: " + this.value.substring(this.selectionStart, this.selectionEnd));
});



