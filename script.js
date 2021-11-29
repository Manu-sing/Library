const gridContainer = document.querySelector(".grid-container");

let myLibrary = [];

function Book(Author, Title, Pages, Status) {
  // the constructor...
  this.Author = Author;
  this.Title = Title;
  this.Pages = Pages;
  this.Status = Status;
}

const book1 = new Book("Andrea Boccini", "Nel Verde", 345, "Read");
const book2 = new Book("Mattia Onoro", "Mare", 145, "Not read");
const book3 = new Book("Ema Loru", "Nel Verde", 345, "Read");
const book4 = new Book("Klaus Menta", "Mare", 145, "Not read");
const book5 = new Book("Mango Bocco", "Nel Verde", 345, "Read");
const book6 = new Book("Mat Ono", "Mare", 145, "Not read");


function addBookToLibrary(obj1, obj2, obj3, obj4, obj5, obj6) {
  // do stuff here
  
  myLibrary.push(obj1, obj2, obj3, obj4, obj5, obj6);
  return myLibrary;

}

let obj1 = book1;
let obj2 = book2;
let obj3 = book3;
let obj4 = book4;
let obj5 = book5;
let obj6 = book6;

let number = 0;

console.log(addBookToLibrary(obj1, obj2, obj3, obj4, obj5, obj6));

for(books of myLibrary) {

    number++;
    
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    
    const bookTitle = document.createElement("h3");
    bookTitle.classList.add("book-title");
    bookTitle.textContent = `${"Book"} ${number}`;
    gridItem.appendChild(bookTitle);

    const book = document.createElement("div");
    book.classList.add("book");
    gridItem.appendChild(book);

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("remove-button");
    removeBtn.textContent = "Remove this book from the library";
    gridItem.appendChild(removeBtn);

    gridContainer.appendChild(gridItem);

    console.log(gridItem);


    for(let key in books) {
        if(Object.prototype.hasOwnProperty.call(books, key)) {
            
            const bookDetails = document.createElement("div");
            bookDetails.classList.add("book-details");
            bookDetails.textContent = key + ":" + " " + books[key];
            book.appendChild(bookDetails);
          
        }
    }

    const changeStatus = document.createElement("button");
    changeStatus.classList.add("change-status");
    changeStatus.textContent = "change status"
    book.appendChild(changeStatus);

}
    




