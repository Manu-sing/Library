const gridContainer = document.querySelector(".grid-container");
const newBookBtn = document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".form").style.display = 'block';
});
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const status = document.getElementById("status");
const submitBtn = document.querySelector(".submit-button").addEventListener("click", (e) => {
    e.preventDefault();
    //push book into array
    addBookToLibrary();
    // show books in a grid
    displayOnPage()
    // reset form and hide
    resetForm();
})
const form = document.querySelector(".form");



let myLibrary = [];

function Book(Author, Title, Pages, Status) {
  // the constructor
  this.Author = Author;
  this.Title = Title;
  this.Pages = Pages;
  this.Status = Status;  
}

// push new book into array myLibrary
function addBookToLibrary() {
    
    let newBook = new Book(author.value, title.value, pages.value, status.value);
    
    myLibrary.push(newBook);
    
}


function displayOnPage() {
        gridContainer.innerHTML = '';
        for (let i = 0; i < myLibrary.length; i++) {
            gridContainer.innerHTML += `<div class="book-container" data-index="${i}">
                <p>Title: ${myLibrary[i].Author}</p>
                <p>Author: ${myLibrary[i].Title}</p>
                <p>Pages: ${myLibrary[i].Pages}</p>
                <p class="Status">Status: ${myLibrary[i].Status}</p>
                <button class="change-status">Change Status</button>
                <button class="remove-btn">Remove ✖️</button>
            </div>`;

            

        }

       
        
        const removeButton = document.querySelectorAll(".remove-btn");
        
        removeButton.forEach((button, index) => {
            button.addEventListener("click", (e) => {
                
                // remove the book object with index = index;
                myLibrary.splice(index, 1);
                // remove the bookContainer whose data-index value is equal to index;
                e.target.parentNode.remove();
                
            })
        })  
        
        const changeStatus = document.querySelectorAll(".change-status");
        changeStatus.forEach((button, index) => {
            button.addEventListener("click", (e) => {
                
                if (myLibrary[index].Status == "Read" && e.target.previousElementSibling.innerText == "Status: Read") {
                    myLibrary[index].Status = "Non read";
                    e.target.previousElementSibling.innerText = "Status: Non read";
                
                } else if (myLibrary[index].Status == "Non read" && e.target.previousElementSibling.innerText == "Status: Non read") {
                    myLibrary[index].Status = "Read"
                    e.target.previousElementSibling.innerText = "Status: Read";
                }
                
            })
        })  

}

function resetForm() {
    form.reset();
    document.querySelector(".form").style.display = 'none';
}



    


/*you can querySelectorAll(".delete-book-btns") immeadiately after the for loop in renderDisplay(). Keep in mind that the forEach method can take a second parameter for index. That way it's easy to pass the index-number to deleteBook without any extra code. Example:  .forEach(item, index => item.addEventListener("click", () => fn(index))
I wouldnt say it's the most stable way to do this though. Since you never know if, in future iterations of the code, your array gets modified before .forEach attaches the eventlisteners and hence be in danger that the indizes dont match anymore. But I guess it's no biggie for now. Just keep it in mind for future tasks like that*/    
    













