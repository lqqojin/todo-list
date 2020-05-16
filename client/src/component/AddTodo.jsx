import React from 'react';
import { Button } from 'react-bootstrap';

function AddTodo (props) {
	console.log('AddTodo >> ', props);
	return (
		<form action="/create_process" method="POST" onSubmit={
			(event) => {
				event.preventDefault();
				let data = event.target.content.value;
				if (!data.trim()) return;
				props.submit({desc: data, status: 'active'});
			}
		}>
			<input
				type="text"
				name="content"
				placeholder="React-Redux Todolist"
				maxLength={200}
				className="todo"
			/>{' '}
			<button type="submit">
				Add Todo
			</button>
		</form>
	)
}
export default AddTodo;
