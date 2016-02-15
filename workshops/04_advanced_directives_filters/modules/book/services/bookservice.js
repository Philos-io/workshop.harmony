export default  function BookFactory($http) {

  function getBook(id) {
    return $http.get('/api/books/'+ id).then((response)=> response.data);
  }

  function getBooks() {
    return $http.get('/api/books').then((response) => response.data);
  }

  function addBook(book) {
    // return $http.post('/api/books', book).then((response) => response.data);
    throw new Error('Not implemented');
  }

  function deleteBook(id) {
    // return $http.delete('/api/books', {id: id}).then((response) => response.data);
    throw new Error('Not implemented');
  }

  return {
    getBook : getBook,
    getBooks : getBooks,
    addBook : addBook,
    deleteBook : deleteBook
  };
}

BookFactory.$inject = ['$http'];
