import React from 'react';

function TodoList (props) {
	let { id, desc, status, onDelete, onUpdate }  = props;
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
			<p onClick={ () => {
				status = (status === 'active' ? 'complete' : 'active');
				onUpdate(id, status);
			}} >
				{desc}
			</p>
			<span onClick={ () => {
					console.log('delete 클릭');
					onDelete(id);
				}
			}>
				&times;
			</span>
		</li>
	)
}

export default TodoList;
