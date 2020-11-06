import React, {Component} from 'react';

class BookItem extends Component {

  render() {
    let bookItem;
    if (this.props.book) {
      bookItem =
        <div className="book-item" onClick={(e) => {this.props.onOpenBook(this.props.book)}}>
          <img src={this.props.book.thumbnailURL}/>
          <h3 className="title">{this.props.book.title}</h3>
          <p className="short-description">{this.props.book.shortDescription}</p>
          <div className="categories">
            <h4>Categories: </h4>
            {this.props.book.categories.map((category, index) =>
                <p key={index}>{category}</p>
              )}
          </div>
          <div className="authors">
            <h4>Authors: </h4>
            {this.props.book.authors.map((author, index) =>
              <p key={index}>{author} </p>
            )}
          </div>
        </div>
    }

    return (
      bookItem
    );
  }
}

export default BookItem;
