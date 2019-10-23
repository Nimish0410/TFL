import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from 'redux';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

const middleware = [thunk, logger];

const configureStore = () =>
	createStore(
		rootReducer,
		compose(
			applyMiddleware(...middleware),
			window.devToolsExtension ? window.devToolsExtension() : f => f,
		)
	);

export default configureStore;