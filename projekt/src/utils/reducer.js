function reducer(state, action) {
    switch (action.type) {
        case 'showModal':
            return {
                ...state,
                showModal: true,
                listingId: action.listingId,
            }
        case 'hideModal':
            return {
                ...state,
                showModal: false,
                listingId: null
            }
    }
}

export default reducer;