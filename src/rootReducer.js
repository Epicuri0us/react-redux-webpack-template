import { combineReducers } from 'redux'

const initialState = {
	helloString: 'Hello!'
};

const helloReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SETHELLOSTRING':
			return {
				...state,
				helloString: action.text
			};
		default:
			return state;
	}
};

const rootReducer = combineReducers({
	hello: helloReducer
});

export default rootReducer;