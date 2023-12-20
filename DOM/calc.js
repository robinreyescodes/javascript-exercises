const container = document.querySelector(".container");

for (let i = 0; i < 4; i++) {
    createButtons();
    
}



function createButtons() {
    for (let i = 0; i < 4; i++) {
        const button = document.createElement("button");
        button.textContent = i+1;
        button.style.cssText =
            "border: 1px solid black;" +
            "height:100px;" +
            "width: 100px;" +
            container.appendChild(button);
    }
}
