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

    //add the values to from the inputs into library using Book constructor
    const book = addBookToLibrary(title.value, author.value, pages.value);

    displayBook(book);

    //clear all  inputs
    title.value = "";
    author.value = "";
    pages.value = "";
    //focus on the title of the page
    title.focus();
    console.log(myLibrary);
    localStorage.setItem('book', JSON.stringify(book));
})




//loop through the library array and print the books that are inside
for (const book of myLibrary) {
    displayBook(book);
}




function displayBook(book) {
    const card = document.createElement("div");
    const titleCard = document.createElement('p');
    const authorCard = document.createElement('p');
    const pagesCard = document.createElement('p');
    const deletebtn = document.createElement('button');
    const readBtn = document.createElement('button');


    card.className = 'card';
    titleCard.className = 'title';
    authorCard.className = 'author';
    pagesCard.className = 'pages';

    deletebtn.textContent = 'delete';
    readBtn.textContent = 'read';
    titleCard.textContent = "title: " + book.title;
    authorCard.textContent = "author: " + book.author;
    pagesCard.textContent = "pages: " + book.pages;

    card.appendChild(titleCard);
    card.appendChild(authorCard);
    card.appendChild(pagesCard);
    card.appendChild(deletebtn);
    card.appendChild(readBtn);
    deletebtn.addEventListener('click', () => {
        card.remove();
    })

    readBtn.addEventListener('click', () => {
        card.classList.add('book-read');
    })
    container.insertBefore(card, container.firstChild);

}



function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(title, author, pages) {
    const book = new Book(title, author, pages)
    myLibrary.push(book);
    localStorage.setItem('book', JSON.stringify(book));
    return book;
}

