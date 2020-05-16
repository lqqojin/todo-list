/*
Ducks 패턴 사용
액션 파일과 리듀서를 위한 파일을 같이 작성합니다.
 */
// 액션 타입 정의
import axios from "axios";

const GET = 'todo/GET';
const CREATE = 'todo/CREATE';
const UPDATE = 'todo/UPDATE';
const REMOVE = 'todo/REMOVE';
// 액션 생섬함수 정의
export const get = (data) => ({type: GET, data});
export const create = (todo) => ({ type: CREATE, todo });
export const update = (id, status) => ({ type: UPDATE, id, status });
export const remove = (id) => ({ type: REMOVE, id });

// **** 초기상태 정의ß
/**
    status active, complete,
 */
const initialState = {
	max_id: null,
	selected_id: null,
	contents: [],
	init: true,
};
// 리듀서
export default function todoAction(state = initialState, action) {

	let newState;
	let newContents = [];
	if (state.init) {

	}
	console.log('todoAction', { state, action });
	switch (action.type) {
		case GET:
			console.log(`%cGET`, 'color:red');
			newContents = action.data.concat();
			console.log(newContents);
			newState = Object.assign({}, state, {
				contents: newContents
			})
			console.log(action.type, action, state, newState);
			return {
				...newState
			}
		case CREATE:
			console.log(`%cCREATE`, 'color:red');
			let newMaxId = state.max_id + 1;
			newContents = state.contents.concat(Object.assign({ id: newMaxId }, action.todo));
			newState = Object.assign({}, state, {
				max_id: newMaxId,
				contents: newContents
			});

			console.log(action.type, action, state, newState);
			return {
				...newState,
			};
		case UPDATE:
			console.log(`%cUPDATE`, 'color:red');
			newContents = state.contents.concat();
			newContents.map( (item) => {
				if (item.id === action.id) item.status = action.status;
			});
			newState = Object.assign({}, state, {
				contents: newContents
			});
			console.log(action.type, action, state, newState);
			return {
				...newState,
			};
		case REMOVE:
			console.log(`%cREMOVE`, 'color:red');
			console.log(action);
			state.contents.map( (item) =>{
				if (item.id !== action.id) newContents.push(item);
			});
			newState = Object.assign({}, state, {
				contents: newContents
			});
			console.log(action.type, action, state, newState);
			return {
				...newState,
			};
		default:
			return state;
	}
}
