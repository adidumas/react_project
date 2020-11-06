import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getBooksAPI } from '../../../actions/book'
import BookList from './components/bookList';
import BookSearch from './components/bookSearch';

class Books extends Component {
  componentDidMount() {
    this.props.getBooks();
  }

  render() {
    return (
      <div>
        <BookSearch />
        <BookList books={this.props.filteredBooks} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    books: state.book.books,
    filteredBooks: state.book.filteredBooks
})

const mapDispatchToProps = (dispatch) => ({
    getBooks: () => dispatch(getBooksAPI()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Books);
