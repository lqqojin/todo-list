import React, { useState } from 'react';

function Todolist (props) {
	let _todoList = useState(props.todoList);
	console.log('%ctodo list', 'color:orange');
	console.log(_todoList);

	let i = 0;
	let lists = [];
	const len = _todoList[0].length;
	console.log(len);
	while( i < len) {
		lists.push(
			<li key={i}>
				<a href="">{_todoList[0][i]}</a>
			</li>
		)
		i += 1;
	}
	console.log(lists);
	return(
		<ul>
			{lists}
		</ul>
	)
}

export default Todolist;
