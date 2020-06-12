import { call, put, takeEvery } from 'redux-saga/effects';
import http from '../http';
import { FETCH, CREATE, UPDATE, DELETE, dbError, success, fetch } from '../action/todoAction';

function fetchTodoAPI() {
    console.log('통신 fetchTodoAPI');
    return http.getContents();
}

function createTodoAPI(todo) {
    console.log('통신 createTodoAPI');
    return http.postCreate(todo);
}

function updateTodoAPI(todo) {
    console.log('통신 updateTodoAPI');
    return http.postUpdate(todo);
}

function deleteTodoAPI(todo) {
    console.log('통신 deleteTodoAPI');
    return http.postDelete(todo);
}

// worker Saga:
function* fetchTodoList() {
    try {
        console.log('%cFetchTodoList', 'color:orange');
        const res = yield call(fetchTodoAPI);
        if (res.data) yield put(success(res.data.data))
	      else yield put({type: 'etc'});
    } catch (e) {
        console.error(e);
        yield put(dbError(e.toString()));
    }
}
function* createTodo(action) {
    try {
        console.log(action.todo);
        const res = yield call(createTodoAPI, action.todo);
        if (res.data) yield put(fetch());
    } catch (e) {
        console.error(e);
        yield put(dbError(e.toString()));
    }
}
function* updateTodo(action) {
    try {
        console.log(action);
        const res = yield call(updateTodoAPI, action);
        if (res.data) yield put(fetch());
    } catch (e) {
        console.error(e);
        yield put(dbError(e.toString()));
    }
}
function* deleteTodo(action) {
    try {
        console.log(action);
        const res = yield call(deleteTodoAPI, action);
        if (res.data) yield put(fetch());
    } catch (e) {
        console.error(e);
        yield put(dbError(e.toString()));
    }
}
export default function* todoWatcher() {
    yield takeEvery(FETCH, fetchTodoList);
    yield takeEvery(CREATE, createTodo);
    yield takeEvery(UPDATE, updateTodo);
    yield takeEvery(DELETE, deleteTodo);
}
