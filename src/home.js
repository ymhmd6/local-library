function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  return books.filter((book) => !book.borrows[0].returned).length;
}

function getMostCommonGenres(books) {
  const result = books.reduce((acc, book) => {
    const genre = book.genre;
    const genreDeets = acc.find((title) => title.name === genre);
    if (!genreDeets) {
      const newGenreDeets = {
        name: genre,
        count: 1,
      };
      acc.push(newGenreDeets);
    } else {
      genreDeets.count++;
    }
    return acc;
  }, []);
  result.sort((genreA, genreB) => genreB.count - genreA.count);
  result.splice(5);
  return result;
}

function getMostPopularBooks(books) {
  const result = books.map((book) => {
    const mostPopularBooks = {
      name: book.title,
      count: book.borrows.length,
    };
    return mostPopularBooks;
  });
  result.sort((bookA, bookB) => bookB.count - bookA.count);
  result.splice(5);
  return result;
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
