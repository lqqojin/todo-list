import React, { useState, useEffect } from 'react';
import Subject from './component/Subject';
import AddTodoContainer from './container/AddTodoContainer';
import TodoContainer from './container/TodoContainer';
import './App.css';
import axios from "axios";

function App(props) {
	useEffect( function () {
		console.log('%cfunc => useEffect number (componentDidMount) > ');
		axios.get('http://localhost:4000')
			.then(res => {
				console.log('server get 호출', res.data.data);
			});
	},[]);
  return (
	  <div className="App container">
		  <Subject />
		  <AddTodoContainer />
		  <TodoContainer initalData={props}/>
	  </div>
  )
}

export default App;
