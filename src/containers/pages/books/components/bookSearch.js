import React, {Component} from 'react';
import {connect} from "react-redux";
import {filterBooks, setFilter} from "../../../../actions/book";

class BookSearch extends Component {

  handleChangeSearch(e) {
    this.props.filterBooks(e.target.value);
  }

  handleChangeFilter(e) {
    this.props.setFilter(e.target.value);
  }

  render() {
    return (
      <div>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">Search after {this.props.filterBy}</span>
          </div>
          <input type="text"
                 className="form-control"
                 onChange={(e) => {this.handleChangeSearch(e)}}
                 aria-describedby="basic-addon1" />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Change filter</label>
          <select id="inputState" className="form-control" onChange={(e) => {this.handleChangeFilter(e)}}>
            <option value="title">Title</option>
            <option value="shortDescription">Description</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  books: state.book.books,
  filterBy: state.book.filterBy
})

const mapDispatchToProps = (dispatch) => ({
  filterBooks: (keyword) => dispatch(filterBooks(keyword)),
  setFilter: (filter) => dispatch(setFilter(filter)),
})

export default connect(mapStateToProps, mapDispatchToProps)(BookSearch);
