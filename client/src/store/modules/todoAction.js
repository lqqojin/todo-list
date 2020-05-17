/*
Ducks 패턴 사용
액션 파일과 리듀서를 위한 파일을 같이 작성합니다.
 */
// 액션 타입 정의
export const FETCH = 'todo/FETCH';
export const SUCCESS = 'todo/SUCCESS';
export const CREATE = 'todo/CREATE';
export const UPDATE = 'todo/UPDATE';
export const DELETE = 'todo/REMOVE';
// 액션 생섬함수 정의
export const fetch = () => ({type: FETCH});
export const success = (todoList) => ({type: SUCCESS, todoList});
export const create = (todo) => ({ type: CREATE, todo });
export const update = (id, status) => ({ type: UPDATE, id, status });
export const remove = (id) => ({ type: DELETE, id });

// **** 초기상태 정의ß
/**
    status active, complete,
 */
const initialState = {
	max_id: 0,
	selected_id: null,
	contents: [],
	init: true,
};
// 리듀서
export default function todoAction(state = initialState, action) {
	console.log('%cReducer 실행', 'color:purple')
	console.log('todoAction', { state, action });
	let newState;
	let newContents = [];

	switch (action.type) {
		case SUCCESS:
			console.log(`%cSUCCESS`, 'color:red');
			newContents = action.todoList.concat();
			let maxId = 0;
			if (action && action.todoList && action.todoList.length > 0) {
				maxId = newContents.reduce((pre, cur, index) => {
					if(pre && cur && pre.id && cur.id) {
						return pre.id > cur.id ? pre : cur;
					}
				})
			}
			newState = Object.assign({}, state, {
				contents: newContents,
				max_id: parseInt(maxId)
			})
			break;
		case CREATE:
			console.log(`%cCREATE`, 'color:red');
			newContents = state.contents.concat(action.todo);
			newState = Object.assign({}, state, {
				max_id: action.todo.id,
				contents: newContents
			});
			break;
		case UPDATE:
			console.log(`%cUPDATE`, 'color:red');
			newContents = state.contents.concat();
			newContents.forEach((item) => {
				if (item.id === action.id) item.status = action.status;
			});
			newState = Object.assign({}, state, {
				contents: newContents
			});
			break;
		case DELETE:
			console.log(`%cDELETE`, 'color:red');
			state.contents.forEach((item) => {
				if (item.id !== action.id)  newContents.push(item);
			});
			newState = Object.assign({}, state, {
				contents: newContents
			});
			break;
		default: return state;
	}
	console.log('todoAction result', action.type, action, state, newState);
	return newState;
}
