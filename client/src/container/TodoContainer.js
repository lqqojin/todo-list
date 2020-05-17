import React from 'react';
import { connect } from 'react-redux';
import TodoList from '../component/TodoList';
import { create, remove, update } from '../store/modules/todoAction';

function TodoContainer (props) {
	const { contents, remove, update } = props;
	console.log('contents >', contents);
	const handlerDelete = (id) => remove(id);
	const handlerUpdate = (id, status) => update(id, status);
	return (
		<ul className="doList">
			{
				contents.map((todo, index) => {
					return (
						<TodoList
							key={index}
							{...todo}
							onUpdate={handlerUpdate}
							onDelete={handlerDelete}
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
	create: (todo) => dispatch(create(todo)),
	remove: (id) => dispatch(remove(id)),
	update: (id,status) => dispatch(update(id, status)),
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoContainer);
