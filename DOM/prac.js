/*
const items = document.querySelectorAll(".item");
console.log(items);

const items2 = document.getElementsByClassName("item")
console.log(items2);

const itemsArr = Array.from(items);

for (const item of itemsArr) {
    console.log(item);
}
*/


// ----- document fragment -----
/*
 instead appending a child into a parent node every time via appendChild,
 use a doc frag to better performance!
 */

/*
const frag = new DocumentFragment();
const itemList = document.querySelector("#item-list");
const languages = ['js', 'python', 'java', 'c++', 'c'];

/!*
*
* *!/

for (const language of languages) {
    const item = document.createElement("li");
    item.textContent = language;
    frag.appendChild(item);
}

itemList.appendChild(frag);
console.log(itemList);

const libs = ['React', 'Meteor', 'Polymer'];
const items = libs.map((lib) => {
    const item = document.createElement('li');
    item.innerText = lib;
    return item;
});
console.log(items[0]);*/

const username = document.querySelector("#username");
console.log(username.id);
console.log(username.type);

/*
*     element.getAttribute(name) – get the attribute value
    element.setAttribute(name, value) – set the value for the attribute
    element.hasAttribute(name) – check for the existence of an attribute
    element.removeAttribute(name) – remove the attribute
*
* */

console.log(username.getAttribute("name"));
username.setAttribute("value", "hihijhi");
console.log(username.value);

for (const attribute of username.attributes) {
    console.log(`${attribute.name}: ${attribute.value}`)
}

console.log(username.dataset);

console.log('--------------')
const myButton = document.querySelector("#my-button");
myButton.setAttribute("name", "send");
myButton.setAttribute("value", "penis");

console.log(myButton.getAttribute("name"));
console.log(myButton.getAttribute("value"));

myButton.removeAttribute("name");
console.log(myButton);

if (myButton.hasAttribute(name)) console.log('here');
else console.log('name is not here yet');