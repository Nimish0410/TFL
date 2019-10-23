const services = (state = { items: [], isLoading: true, hasError: false }, action) => {
    switch (action.type) {
        case 'SERVICES_REQUEST':
            return {
                ...state,
                isLoading: true
            }
        case 'SERVICES_RECEIVED':
            return {
                ...state,
                items: [...state.items, ...action.services],
                isLoading: false
            }
        case 'SERVICES_FAILED':
            return {
                ...state,
                isLoading: false,
                hasError: true
            }
        case 'SET_SELECTED_LINE':
            return {
                ...state,
                selectedItem: action.line,
                showLineInfoCard: true,
                showSearchCard: false
            }

        case 'SHOW_CAR_HIRE_CARD':
            return {
                ...state,
                showLineInfoCard: false,
                showSearchCard: true
            }
        default:
            return state;
    }
}

export default services;
