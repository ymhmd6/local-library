//  author.id === id return author object that is true
function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}
// return books where book.id === id is true
function findBookById(books, id) {
  let foundBooks = books.find((book) => book.id === id);
  return foundBooks;
}
//retrun array borrowed books and retruned books
//First array contains books returned
//second array contains books not returned
function partitionBooksByBorrowedStatus(books) {
  let booksReturned = books.filter((book) => book.borrows.every((borrow) => borrow.returned === true) );
  let booksBorrowed = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false) );
  
  let finalArray = [[...booksBorrowed], [...booksReturned]];
  return finalArray;
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {
    let account = accounts.find((account) => account.id === borrow.id);
    return {...borrow, ...account };
  })
  .slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
