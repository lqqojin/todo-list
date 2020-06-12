import { SUCCESS, DB_ERROR } from "../action/todoAction";

const initialState = {
	max_id: 0,
	selected_id: null,
	contents: [],
	init: true,
};

// 리듀서
export default function todoReducer(state = initialState, action) {
	console.log('%cReducer 실행', 'color:purple')
	console.log({ state, action });
	let newState;
	let newContents = [];

	switch (action.type) {
		case SUCCESS:
			console.log(`%cSUCCESS`, 'color:skyblue');
			newContents = action.todoList.concat();
			let maxTodo;
			if (action && action.todoList && action.todoList.length > 0) {
				maxTodo = newContents.reduce((pre, cur) => {
					if(pre && cur && pre.id && cur.id) {
						return pre.id > cur.id ? pre : cur;
					}
				})
			}
			newState = Object.assign({}, state, {
				contents: newContents,
				max_id: maxTodo.id
			})
			break;
		case DB_ERROR:
			console.log('%cDB_ERROR', 'color:red');
			console.log(action);
			newState = state;
			break;
		// case CREATE:
		// 	console.log(`%cCREATE`, 'color:red');
		// 	newContents = state.contents.concat(action.todo);
		// 	newState = Object.assign({}, state, {
		// 		max_id: action.todo.id,
		// 		contents: newContents
		// 	});
		// 	break;
		// case UPDATE:
		// 	console.log(`%cUPDATE`, 'color:red');
		// 	newContents = state.contents.concat();
		// 	newContents.forEach((item) => {
		// 		if (item.id === action.id) item.status = action.status;
		// 	});
		// 	newState = Object.assign({}, state, {
		// 		contents: newContents
		// 	});
		// 	break;
		// case DELETE:
		// 	console.log(`%cDELETE`, 'color:red');
		// 	state.contents.forEach((item) => {
		// 		if (item.id !== action.id)  newContents.push(item);
		// 	});
		// 	newState = Object.assign({}, state, {
		// 		contents: newContents
		// 	});
		// 	break;
		default: return state;
	}
	console.log('todoAction result', action.type, action, state, newState);
	return newState;
}
