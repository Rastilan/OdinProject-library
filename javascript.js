let myLibrary = [];
let i = 0;

// takes the input from the user form in index.html and turns it into an object
function Book(author, title, numOfPages, read){
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;

}

// uses takes the raw input data and the function Book() to create a book object and add it to our myLibrary Array
function addBookToLibrary(){
  
  let newBook = new Book(newBookForm.author.value, newBookForm.title.value, newBookForm.numOfPages.value, newBookForm.read.checked);
  if(newBook.value == "" || newBook.author == "" || newBook.title == "" || newBook.numOfPages == ""){
    return;
  }
  myLibrary.push(newBook);
    createBookDisplay();
    
}

// Creates the visual element of our books. That way, when added, we can see what books have been added to the page
function createBookDisplay(){
  const newDiv = document.createElement("div");
  const newButton = document.createElement("button");
  const newReadButton = document.createElement("button");

// creating the text to go into our new elements
  const newContent = document.createTextNode("Book Name: " + myLibrary[i].title + ", Book Author: " + myLibrary[i].author + ", Numer of pages: " + myLibrary[i].numOfPages + ", Read: " + myLibrary[i].read);
  const newButtonText = document.createTextNode("Remove Book");
  const newReadButtonText = document.createTextNode("Read");
  // attaching the elements to the text and adding some values to elements
  newDiv.appendChild(newContent);
  newDiv.setAttribute("id", i);
  newButton.appendChild(newButtonText);
  newButton.setAttribute("id", "button" + i);
  newButton.setAttribute("onclick", "delBook(" + i + ")")
  newReadButton.appendChild(newReadButtonText);
  newReadButton.setAttribute("id", "read" + i);
  newReadButton.setAttribute("onclick", "readBook(" + i + ")");
 
  // adding the new book at the inside of the end of the library div
  const currentDiv = document.getElementById("library");
  currentDiv.insertAdjacentElement('beforeend', newDiv);
  currentDiv.insertAdjacentElement('beforeend', newReadButton);
  currentDiv.insertAdjacentElement('beforeend', newButton);
  i++;

}

// removes the book from the UI but not from the array
function delBook(bookID){
  let bookToBeDeleted = document.getElementById(bookID);
  let buttonToBeDeleted = document.getElementById("button" + bookID);
  let readButtonToBeDeleted = document.getElementById("read" + bookID);
  readButtonToBeDeleted.remove();
  buttonToBeDeleted.remove();
  bookToBeDeleted.remove();
}

// alternates the status of "read" in the books UI

function readBook(readID){
  console.log(myLibrary[readID].read);
  myLibrary[readID].read = !myLibrary[readID].read;
  console.log(myLibrary[readID].read);
  let updateReadStatus = document.getElementById(readID);
  updateReadStatus.innerHTML = "Book Name: " + myLibrary[readID].title + ", Book Author: " + myLibrary[readID].author + ", Numer of pages: " + myLibrary[readID].numOfPages + ", Read: " + myLibrary[readID].read;


}

