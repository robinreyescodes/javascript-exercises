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

const frag = new DocumentFragment();
const itemList = document.querySelector("#item-list");
const languages = ['js', 'python', 'java', 'c++', 'c'];

/*
*
* */

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
console.log(items[0]);