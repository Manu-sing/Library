const gridContainer = document.querySelector(".grid-container");
const newBookBtn = document.querySelector(".btn");
const submitBtn = document.querySelector(".submit-button");
const form = document.querySelector(".form");

let myLibrary = [];

function Book(Author, Title, Pages, Status) {
  // the constructor
  this.Author = Author;
  this.Title = Title;
  this.Pages = Pages;
  this.Status = Status;
  
}
    
// make form appear upon button click
newBookBtn.addEventListener("click", () => {
    document.querySelector(".form").style.display = 'block';
})

// push new book into array myLibrary
function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
    return myLibrary;
  }


// input new book with form 
submitBtn.addEventListener("click", (e) => {

    e.preventDefault();

    let Author = document.getElementById("author").value;
    let Title = document.getElementById("title").value;
    let Pages = document.getElementById("pages").value;
    let Status = document.getElementById("status").value;
    
    let newBook = new Book(Author, Title, Pages, Status);

    //push book into array
    addBookToLibrary(newBook);

    // show books in a grid
    createNewGrid();

})

function createNewGrid() {

    for(books of myLibrary) {

        // loop through array and create grid-items
        const gridItem = document.createElement("div");
        gridItem.classList.add("grid-item");
        gridItem.dataset.test= "data";
        
        const bookTitle = document.createElement("h3");
        bookTitle.classList.add("book-title");
        bookTitle.textContent = `${"Book"}`;
        gridItem.appendChild(bookTitle);

        const book = document.createElement("div");
        book.classList.add("book");
        gridItem.appendChild(book);

        const removeBtn = document.createElement("button");
        removeBtn.classList.add("remove-button");
        removeBtn.textContent = "remove from library";
        gridItem.appendChild(removeBtn);

        gridContainer.appendChild(gridItem);

        for(let key in books) {
            //loop through object properties and add book details to book item
            if(Object.prototype.hasOwnProperty.call(books, key)) {
                
                const bookDetails = document.createElement("div");
                bookDetails.classList.add("book-details");
                bookDetails.textContent = key + ":" + " " + books[key];
                book.appendChild(bookDetails);
        
            }
        }
        // create button to change status of read
        const changeStatus = document.createElement("button");
        changeStatus.classList.add("change-status");
        changeStatus.textContent = "change status"
        book.appendChild(changeStatus);
        
        // remove grid item from array
        removeBtn.addEventListener("click", () => {
        gridItem.remove();    
        })

    }
    // reset form, make its display to none again and empty the array
    form.reset();
    document.querySelector(".form").style.display = 'none';
    myLibrary = [];
}










