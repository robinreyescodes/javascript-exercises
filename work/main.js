const myLibrary = [];

//variable declarations
const container = document.querySelector(".container");
const button = document.querySelector("#submit-btn");
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");

addBookToLibrary("HP & the Sorceror's Stone", "J.K. Rowling", 201);
addBookToLibrary("Mr. Mercedes", "Stephen King", 297);


button.addEventListener('click', e => {
    e.preventDefault();
    //print all of the values to the console
    console.log(title.value);
    console.log(author.value);
    console.log(pages.value);
    //clear all of the inputs
    title.value = "";
    author.value = "";
    pages.value = "";
    //focus on the title of the page
    title.focus();

})


//loop through the library array and print the books that are inside
for (const book of myLibrary) {
    const card = document.createElement("div");
    const titleCard = document.createElement('p');
    const authorCard = document.createElement('p');
    const pagesCard = document.createElement('p');

    card.className = 'card';
    titleCard.className = 'title';
    authorCard.className = 'author';
    pagesCard.className = 'pages';

    titleCard.textContent = "title: " + book.title;
    authorCard.textContent = "author: " + book.author;
    pagesCard.textContent = "pages: " + book.pages;

    card.appendChild(titleCard);
    card.appendChild(authorCard);
    card.appendChild(pagesCard);

    container.appendChild(card);
}








function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    myLibrary.push(new Book(title, author, pages));
}

