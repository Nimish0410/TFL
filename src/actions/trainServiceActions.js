const fetchServicesSuccess = (services) => {
    return {
        type: 'SERVICES_RECEIVED',
        services
    }
}

const fetchServicesStart = () => {
    return {
        type: 'SERVICES_REQUEST'
    }
}

const fetchServicesFailure = () => {
    return {
        type: 'SERVICES_FAILED'
    }
}

export const setSelectedLine = (line) => {
    return {
        type: 'SET_SELECTED_LINE',
        line
    }
}

export const showBikeHireCard = () => {
    return {
        type: 'SHOW_CAR_HIRE_CARD'
    }
}

// writing a thunk
export const fetchTrainServices = (url) => {
    return (dispatch) => {
        dispatch(fetchServicesStart());
        fetch(url).then((response) => {
            if (!response.ok) {
                throw Error(response.statusText);
            }
            return response.json();
        })
            .then((items) => dispatch(fetchServicesSuccess(items)))
            .catch(() => dispatch(fetchServicesFailure()))
    }
}