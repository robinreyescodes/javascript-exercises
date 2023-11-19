/*
* NOTES
* - Append
* - Create
* - Edit
* - Classnames
* */

const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);


//1. create a <p> with red text that says "Hey I'm red!"

//first way is simply creating an element and appending it into a div
/*
const container = document.querySelector(".content");
const redP = document.createElement("p");
redP.innerHTML = "Hey I'm Red!";
redP.style.cssText = "color: red"\;
container.appendChild(redP);
*/


//second way is creating an element and appending it before an element

const redDiv = document.createElement("p");
redDiv.innerHTML = "Hey I'm Red!";
redDiv.style.cssText = "color: red";

container.insertBefore(redDiv, content);



//textcontent vs innerHTMl...whenever you want to put html into the document
//use innerHTML..if you want to change the text content of an element use the latter

//2. create an h3 with blue text that says i'm a blue h3
const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue H3";
blueH3.style['color'] = 'blue';
container.appendChild(blueH3);

//3.
const borderDiv = document.createElement("div");
borderDiv.style.cssText = "border: 1px solid black; background-color:pink";

const imADiv = document.createElement("h1");
const imAP = document.createElement("P");
imADiv.textContent = "I'm in a div";
imAP.textContent = "me too!";
borderDiv.appendChild(imADiv);
borderDiv.appendChild(imAP);


container.appendChild(borderDiv);





