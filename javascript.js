let myLibrary = [];
let i = 0;

function Book(author, title, numOfPages, read){
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;

}

function addBookToLibrary(){
  
  let newBook = new Book(newBookForm.author.value, newBookForm.title.value, newBookForm.numOfPages.value, newBookForm.read.checked);
  if(newBook.value == "" || newBook.author == "" || newBook.title == "" || newBook.numOfPages == ""){
    return;
  }
  myLibrary.push(newBook);
    createBookDisplay();
    
}

function createBookDisplay(){
  const newDiv = document.createElement("div");
  const newButton = document.createElement("button");
  const newReadButton = document.createElement("button");


  const newContent = document.createTextNode("Book Name: " + myLibrary[i].title + ", Book Author: " + myLibrary[i].author + ", Numer of pages: " + myLibrary[i].numOfPages + ", Read: " + myLibrary[i].read);
  const newButtonText = document.createTextNode("Remove Book");
  const newReadButtonText = document.createTextNode("Read");
  // add the text node to the newly created div
  newDiv.appendChild(newContent);
  newDiv.setAttribute("id", i);
  newButton.appendChild(newButtonText);
  newButton.setAttribute("id", "button" + i);
  newButton.setAttribute("onclick", "delBook(" + i + ")")
  newReadButton.appendChild(newReadButtonText);
  newReadButton.setAttribute("id", "read" + i);
  newReadButton.setAttribute("onclick", "readBook(" + i + ")");
 
  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("library");
  currentDiv.insertAdjacentElement('beforeend', newDiv);
  currentDiv.insertAdjacentElement('beforeend', newReadButton);
  currentDiv.insertAdjacentElement('beforeend', newButton);
  i++;

}

function delBook(bookID){
  let bookToBeDeleted = document.getElementById(bookID);
  let buttonToBeDeleted = document.getElementById("button" + bookID);
  let readButtonToBeDeleted = document.getElementById("read" + bookID);
  readButtonToBeDeleted.remove();
  buttonToBeDeleted.remove();
  bookToBeDeleted.remove();
}

function readBook(readID){
  console.log(myLibrary[readID].read);
  myLibrary[readID].read = !myLibrary[readID].read;
  console.log(myLibrary[readID].read);
  let updateReadStatus = document.getElementById(readID);
  updateReadStatus.innerHTML = "Book Name: " + myLibrary[readID].title + ", Book Author: " + myLibrary[readID].author + ", Numer of pages: " + myLibrary[readID].numOfPages + ", Read: " + myLibrary[readID].read;


}

