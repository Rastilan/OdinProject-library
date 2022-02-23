let myLibrary = [];

function Book(author, title, numOfPages, read){
    this.author = author;
    this.title = title;
    this.numOfPages = numOfPages;
    this.read = read;

}

function addBookToLibrary(){
  let newBook = new Book(newBookForm.author.value, newBookForm.title.value, newBookForm.numOfPages.value, newBookForm.read.checked);
    myLibrary.push(newBook);
}

let lordOfTheRings = new Book("tolken", "Lord of the Rings", 500, true);