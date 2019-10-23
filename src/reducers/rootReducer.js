import { combineReducers } from 'redux';
import bikeHireReducer from './bikeHireReducer';
import servicesReducer from './serviceReducer';

export default combineReducers({
    services: servicesReducer,
    bikeHire: bikeHireReducer
})