import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import combineReducers from '../reducer';
import rootSaga from '../sagas';

export default function configureStore() {
	// chrome redux 확장 프로그램을 사용하기 위한 설정
	const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
	// saga 미들웨어를 생성합니다.
	const sagaMiddleware = createSagaMiddleware();
	// 스토어를 만들기 및 개발자 도구 적용
	const store = createStore(combineReducers, compose(applyMiddleware(sagaMiddleware),  devTools));
	sagaMiddleware.run(rootSaga);
	return store;
}
