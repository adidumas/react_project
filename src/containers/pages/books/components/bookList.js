import React, {Component} from 'react';
import BookItem from './bookItem';
import BookModal from './bookModal';
import {connect} from "react-redux";
import {setBook} from '../../../../actions/book'
import Switch from "react-switch";

class BookList extends Component {

  state = {
    showModal: false,
    isList: true
  }

  changeViewMode = (checked) => {
    this.setState({ isList: checked });
  }

  toggleModal = (book) => {
    if (book) {
      this.props.setBook(book);
    }
    this.setState({showModal: !this.state.showModal})
  }

  render() {
    let bookList = <h1>Loading</h1>;
    if (this.props.books.books) {
      bookList = this.props.books.books.map((item, index) =>
        <BookItem
          key={index}
          onOpenBook={(e) => {this.toggleModal(item)}}
          book={item}
        />
      );
    }

    return (
      <div className={`book-list ${this.state.isList ? 'list' : 'grid'}`}>
        <div className="view-switch">
          <p>List/Grid</p>
          <Switch className="switch" onChange={this.changeViewMode} checked={this.state.isList} />
        </div>
        <BookModal
          show={this.state.showModal}
          book={this.props.book}
          onClose={this.toggleModal}
          onHide={this.toggleModal}
        />
        <h3 className="list-view">List view</h3>
        <h3 className="grid-view">Grid view</h3>
        {bookList}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  book: state.book.book,
})

const mapDispatchToProps = (dispatch) => ({
  setBook: (book) => dispatch(setBook(book)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
