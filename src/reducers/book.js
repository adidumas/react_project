const initialState = {
	book: '',
	books: [],
	filteredBooks: [],
	filterBy: 'title'
}

const book = (state = initialState, action = {}) => {
	switch(action.type) {
		case 'GET_BOOKS':
			return {
				...state,
				books: action.value,
				filteredBooks: action.value,
			}
		case 'FILTER_BOOKS':
			return {
				...state,
				filteredBooks: {
					books: state.books.books.filter(book => book[state.filterBy] && book[state.filterBy].toLowerCase().includes(action.keyword.toLowerCase()))
				}
			}
		case 'SET_FILTER':
			return {
				...state,
				filterBy: action.filter
			}
		case 'SET_BOOK':
			return {
				...state,
				book: action.book
			}
		default: return state
	}
}

export default book;
