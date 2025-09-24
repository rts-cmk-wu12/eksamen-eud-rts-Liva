function reducer(state, action) {
    switch (action.type) {
        case 'new':
            return {
                ...state,
                ascending: true,
                sortBy: 'createdAt'
            }
        case 'old':
            return {
                ...state,
                ascending: false,
                sortBy: 'createdAt'
            }
        case 'asc':
            return {
                ...state,
                ascending: true,
                sortBy: 'title'
            }
        case 'desc':
            return {
                ...state,
                ascending: false,
                sortBy: 'title'
            }
    }
}

export default reducer;