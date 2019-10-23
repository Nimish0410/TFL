import { getFromCache } from '../utils/commonUtils';

const fetchSuccess = (points, searchText) => {
    return {
        type: 'POINTS_RECEIVED',
        points,
        searchText
    }
}

const fetchStart = () => {
    return {
        type: 'POINTS_REQUEST'
    }
}

const fetchFailure = () => {
    return {
        type: 'POINTS_FAILED'
    }
}

const cacheHitSuccess = () => {
    return {
        type: 'CACHE_HIT_SUCCESS'
    }
}

const cacheHitFailed = () => {
    return {
        type: 'CACHE_HIT_FAILED'
    }
}

export const fetchBikeHirePoints = (url, searchText) => {
    return (dispatch, getState) => {
        // get from cache if item present
        const items = getFromCache(getState, "bikeHire", searchText)
        if (items) { dispatch(cacheHitSuccess()); }
        else {
            // make an api call if item not in cache
            dispatch(cacheHitFailed());
            dispatch(fetchStart());
            fetch(url).then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
                .then((items) => dispatch(fetchSuccess(items, searchText)))
                .catch(() => dispatch(fetchFailure()))
        }

    }
}

