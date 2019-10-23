
const initialState = {
    items: [],
    isLoading: false,
    hasError: false,
    cacheHit: false
}

const bikeHire = (state = initialState, action) => {
    switch (action.type) {

        case 'POINTS_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'POINTS_RECEIVED':
            return {
                ...state,
                items: [...state.items, { searchKey: action.searchText, values: action.points }],
                isLoading: false
            }

        case 'POINTS_FAILED':
            return {
                ...state,
                isLoading: false,
                hasError: true
            }

        case 'CACHE_HIT_SUCCESS':
            return {
                ...state,
                cacheHit: true
            }

        case 'CACHE_HIT_FAILED':
            return {
                ...state,
                cacheHit: false
            }

        default:
            return state;
    }
}

export default bikeHire;
