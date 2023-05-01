const getTheTitles = function() {
    const books = [
        {
          title: 'Book',
          author: 'Name'
        },
        {
          title: 'Book2',
          author: 'Name2'
        }
      ]
    
      const bookTitles = books.map(function(book) {
        return book.title;
      }); 
      return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
