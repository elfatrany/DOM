const pageHeader = document.getElementById("page-header");
const manHeading = document.getElementById("main-heading");
const paragraphOne = document.getElementById("para1");
const paragrahTwo = document.getElementById("para2");
const paragrahFour = document.getElementById("para4");
const red = document.getElementById("red");
const blue = document.getElementById("blue");
const yellow = document.getElementById("yellow");
const green = document.getElementById("green");
const black = document.getElementById("black");
const button = document.getElementById("btn");


pageHeader.innerHTML = "<h1>New DOM Layout</h1>";
pageHeader.classList = "bg-success";
paragraphOne.innerHTML = "<i>The Document Object Model (DOM)</i> is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure.";
paragrahTwo.innerHTML = "<i>The Document Object Model (DOM)</i> is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
button.addEventListener ("click", function(){
    paragrahFour.innerHTML = "<i>The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.</i>";
});

red.classList = "bg-danger";
blue.classList = "bg-primary";
yellow.classList = "bg-warning";
green.classList = "bg-success"
black.classList = "bg-dark";
