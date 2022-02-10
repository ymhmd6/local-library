
function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}
// Return total number of books borrowed
function getBooksBorrowedCount(books) {
  let booksOut = books.filter((book) => book.borrows.filter((record) =>
   record.returned === false).length > 0 );
  return booksOut.length;
}
//Return ordered list of most common genre
function getMostCommonGenres(books) {
  let map ={};
  books.forEach((num) => {
    if (map [num.genre]){
      map[num.genre]++;
    }else {
      map[num.genre] = 1;
    }
  });
  return Object.entries(map).map(([name,count]) => {
    return {name, count};
  })
  .sort((a,b) => b.count - a.count)
  .splice(0,5);
}

function getMostPopularBooks(books) {
  return books
  .map((book) => {
    return {name: book.title, count: book.borrows.length};
})
  .sort((a,b) => (a.count < b.count ? 1:-1))
  .splice(0,5);
}

function getMostPopularAuthors(books, authors) {
  const result = authors.map((author) => {
    const booksByAuthor = books.filter((book) => book.authorId === author.id);
    const borrowsTotal = booksByAuthor.reduce(
      (acc, book) => acc + book.borrows.length,
      0
    );
    const mostPopularAuthors = {
      name: `${author.name.first} ${author.name.last}`,
      count: borrowsTotal,
    };
    return mostPopularAuthors;
  });
  result.sort((authorA, authorB) => authorB.count - authorA.count);
  result.splice(5);
  return result;
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
