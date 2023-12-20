const list = document.querySelector("ul")
const input = document.querySelector("#item");
const button = document.querySelector("button");


button.onclick = buttonAction;

// function used to create list items when a button is clicked
// along with a delete function to get rid of items
function buttonAction() {
    const item = document.createElement("li");
    item.textContent = input.value;
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "delete";
    item.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", deleteFunction);
    list.appendChild(item)

    input.focus();


    function deleteFunction() {
        list.removeChild(item)
    }
}






