/*
Ducks 패턴 사용
액션 파일과 리듀서를 위한 파일을 같이 작성합니다.
 */
// 액션 타입 정의
const GET_LIST = 'todo/GET_LIST';
const CHANGE_LIST = 'todo/CHANGE_LIST';
const CREATE = 'todo/CREATE';
const UPDATE = 'todo/UPDATE';
const DEL = 'todo/DEL';


// **** 액션 생섬함수 정의
export const getList = todo => ({ type: GET_LIST });
export const changeList = todo => ({ type: CHANGE_LIST });
export const create = (todo) => ({ type: CREATE, todo });
export const update = () => ({ type: UPDATE });
export const del = () => ({ type: DEL });

// **** 초기상태 정의
/**
    status active, complete,
 */
const initialState = {
	max_id: 1,
	selected_id: null,
	contents: [
		{ id: 1, desc: 'study', status: 'active'},
	],
};

// 리듀서
export default function todoAction(state = initialState, action) {
	let newState;
	switch (action.type) {
		case GET_LIST:
			return {
				...state,
			};
		case CHANGE_LIST:
			return {
				...state,
			}
		case CREATE:
			console.log(`%cCREATE`, 'color:red');
			let newTodoList = [];
			let newMaxId = state.max_id + 1
			newTodoList = state.contents.concat(Object.assign({ id: newMaxId }, action.todo));
			newState = Object.assign({}, state, {
				max_id: newMaxId,
				contents: newTodoList
			});
			console.log(action.type, action, state, newState);
			return {
				...newState,
			};
		case UPDATE:
			return {
				...state,
			};
		case DEL:
			return {
				...state,
			};
		default:
			return state;
	}
}
