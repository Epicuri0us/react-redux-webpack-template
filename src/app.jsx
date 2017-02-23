import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import HelloContainer from './components/helloContainer'
import rootReducer from './rootReducer'
import DOMready from './domready'

let store = createStore(rootReducer);
export default store;

DOMready().then(() => {
	render(
		<Provider store={store}>
			<HelloContainer />
		</Provider>,
		document.getElementById('root')
	);
});