// action type(명령어)
export const FETCH = 'todo/FETCH';
export const DB_ERROR = 'todo/DB_ERROR'
export const SUCCESS = 'todo/SUCCESS';
export const CREATE = 'todo/CREATE';
export const UPDATE = 'todo/UPDATE';
export const DELETE = 'todo/REMOVE';

//  action creators(액션 메서드) 액션 생섬함수 정의
export const fetch = () => ({type: FETCH});
export const success = (todoList) => ({type: SUCCESS, todoList});
export const dbError = (error) => ({type: DB_ERROR, error});
export const create = (todo) => ({ type: CREATE, todo });
export const update = (id, status) => ({ type: UPDATE, id, status });
export const remove = (id) => ({ type: DELETE, id });
