import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../component/AddTodo';
import { create } from '../store/modules/todoAction';

function AddTodoContainer (props) {
	const handleSubmit = (todo) => {
		const { create } = props;
		console.log('handleSubmit > todo >>', todo)
		create(todo);
	}
	return (
		<AddTodo submit={handleSubmit}/>
	)
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
	// todoList: state.todoAction.todoList
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
	create: todo => dispatch(create(todo)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddTodoContainer);
