import { call, put, takeEvery } from 'redux-saga/effects';
import http from '../http';
import { FETCH, CREATE, UPDATE, DELETE, success } from '../action/todoAction';

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
        yield put(success(res.data.data))
        console.log(res.data.data);
    } catch (e) {
        console.error(e);
        // yield put(loginFailureAction(e.message));
    }
}
function* createTodo(action) {
    try {
        console.log(action.todo);
        const res = yield call(createTodoAPI, action.todo);
        console.log(res.data);
    } catch (e) {
        console.error(e);
        // yield put(loginFailureAction(e.message));
    }
}
function* updateTodo(action) {
    try {
        console.log(action);
        const res = yield call(updateTodoAPI, action);
        console.log(res.data);
    } catch (e) {
        console.error(e);
        // yield put(loginFailureAction(e.message));
    }
}
function* deleteTodo(action) {
    try {
        console.log(action);
        const res = yield call(deleteTodoAPI, action);
        console.log(res.data);
    } catch (e) {
        console.error(e);
        // yield put(loginFailureAction(e.message));
    }
}
export default function* todoWatcher() {
    yield takeEvery(FETCH, fetchTodoList);
    yield takeEvery(CREATE, createTodo);
    yield takeEvery(UPDATE, updateTodo);
    yield takeEvery(DELETE, deleteTodo);
}

// export default function* root() {
//     yield all ([
//         fork(watchCreate),
//         fork(watchGet)
//     ])
// }
