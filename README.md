File structure: (inside src folder)
1). actions folder :
    - in this folder we have the actions for redux
    - we have a file called book.js. If the app was bigger, other actions would be present here : users.js, products.js, etc...
    - inside book.js we have an API function that gets the books from the server (getBooksAPI) and inside it we have a Promise to solve the request
    - if the app was bigger, here we would have also the POST, PUT, DELETE functions (createBooksAPI, editBooksAPI, deleteBooksAPI)
    - besides the API function, we also have other actions: FILTER_BOOKS (for the search), 
            SET_FILTER (for setting the title or the description as the filtered criteria) and SET_BOOK (for when the user is selecting a book)

2). containers folder:
    - in this folder we have the components of the app
    - in "pages" folder, we have a folder for each page of the app. Because the app is small, we only have the "books" page. If the app was bigger,
        in here we would had "users" folder, "products" folder, etc...
    - inside the "book" folder, we have the main component "book.js" and it's corespondent scss file for the styling. Each page will have it's own scss file
    - each page has a "components" folder. In here we have the components of the respective page (for books we have : bookItem, bookList, bookModal, bookSearch)
    - App.js : is the main component. If the app was bigger, here we would have the Router, Link, Route, Switch from "react-router-dom" for the routing

3). reducers folder:
    - in this folder we have the reducers for REDUX
    - if the app was bigger, we would have more reducers here
    - in book.js reducer, we declare the initial state + the action types : GET_BOOKS, FILTER_BOOKS, SET_FILTER, SET_BOOK
    
4). utils folder:
    - here we simply create an instance of axios for the API request, so we prepare the baseUrl + headers
    
5). rootReducers.js:
    - we are using combineReducers, because if the apps was bigger this is how you would include all the reducers

6). Using REDUX in components:
    - const mapStateToProps = (state) => ({
          books: state.book.books,
          filteredBooks: state.book.filteredBooks
      })  ------> mapping the state to the props
    - const mapDispatchToProps = (dispatch) => ({
          getBooks: () => dispatch(getBooksAPI()),
      }) ------> mapping the functions
    - export default connect(mapStateToProps, mapDispatchToProps)(Books); ------> connecting all to the component 

7). List/Grid + dark mode/ light mode is done by adding a class to the container and from there it's only scss styling
