import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import { getList } from '../store/modules/todoAction';

function TodoContainer (props) {
	const { contents } = props;
	console.log('contents >', contents);
	const handlerDelete = (id)=> {
		console.log(id);
	}
	return (
		<ul className="doList">
			{
				contents.map((todo) => {
					return (
						<TodoList
							key={todo.id}
							{...todo}
							// onClick={() => onTodoClick(todo.id)}
							onDelete={handlerDelete(todo.id)}
						/>
					);
				})
			}
		</ul>
	)
}

// props 로 넣어줄 스토어 상태값
const mapStateToProps = state => ({
	contents: state.todoAction.contents
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
	getList: todo => dispatch(getList(todo)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoContainer);
