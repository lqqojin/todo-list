import React, {useState} from 'react';
import AddTodo from './AddTodo';
import Todolist from './Todolist'

function Content (props) {
	let todoList = [1, 2, 3];
	useState(props.todoList);
	console.log('onSubmit',useState(props.onSubmit));
	return (
		<div>
			<AddTodo  todoList={todoList}/>
			<Todolist todoList={todoList}/>
		</div>
	)
}

export default Content;
