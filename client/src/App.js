import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import Subject from './component/Subject';
import AddTodoContainer from './container/AddTodoContainer';
import TodoContainer from './container/TodoContainer';
import './App.css';
// import { fetch } from "./store/modules/todoAction";
import { fetch } from "./action/todoAction";

function App(props) {
	const { fetch } = props;
	useEffect(()=> {
		console.log('%cHook componentDidMount', 'color:green')
		fetch();
	}, [fetch])
	return (
	  <div className="App container">
		  <Subject />
		  <AddTodoContainer />
		  <TodoContainer/>
	  </div>
	)
}
// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
	contents: state.todoReducer.contents
})

const mapDispatchToProps = dispatch => ({
	fetch: () => dispatch(fetch()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
