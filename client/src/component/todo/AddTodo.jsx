import React, { useState } from 'react';

function AddTodo (props) {
	let [ todoList ] = useState(props.todoList);
	const onSubmit = (inputData) => {
		console.log(inputData)
		console.log(todoList);
	}
	return (
		<form action="/create_process" method="POST" onSubmit={
			function (e) {
				e.preventDefault();
				onSubmit(e.target.content.value);
			}
		}>
			<input
				type="text"
				name="content"
				placeholder="할 일을 입력해 주세요."
				maxLength={200}
				className="todo"
			/>
			<input type="submit" value="Add Todo"/>
		</form>
	)
}

export default AddTodo;
