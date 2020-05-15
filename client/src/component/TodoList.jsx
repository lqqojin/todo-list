import React from 'react';

function TodoList (props) {
	let { desc, onDelete }  = props;
	console.log(props);
	// let i = 0;
	// let lists = [];
	// const len = _todoList.length;
	// while( i < len) {
	// 	lists.push(
	// 		<li key={i}>
	// 			<div
	// 			    onClick={ event => {
	// 				    event.preventDefault();
	// 			    }}
	// 			>{_todoList[i].desc}</div>
	// 		</li>
	// 	)
	// 	i += 1;
	// }
	return(
		<li>
			<em></em>
			<p
				onClick={ event => {
					event.preventDefault();
				}}
			>
				{desc}
			</p>
			<span onClick={
				() => {
					console.log('delete 클릭');
					onDelete();
				}
			}
			>&times;</span>
		</li>
	)
}

export default TodoList;
