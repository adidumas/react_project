import instance from '../utils/api';

export const getBooksAPI = () => (dispatch) => {
	const promise = new Promise((resolve, reject) => {
		instance.get('books')
			.then((res) => {
				dispatch({type: 'GET_BOOKS', value: res.data})
				resolve(res)
			}, (err) => {
				reject(err)
			})
	})

	return promise;
}

export const filterBooks = (keyword) => (dispatch) => {
	dispatch({type: 'FILTER_BOOKS', keyword: keyword})
}

export const setFilter = (filter) => (dispatch) => {
	dispatch({type: 'SET_FILTER', filter: filter})
}

export const setBook = (book) => (dispatch) => {
	dispatch({type: 'SET_BOOK', book: book})
}
