import { combineReducers } from 'redux';
import todoAction from './todoAction';

export default combineReducers({
	todoAction,
	// 다른 리듀서를 만들게되면 여기에 넣어줌..
});
