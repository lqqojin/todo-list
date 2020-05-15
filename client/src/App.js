import React from 'react';
import Subject from './component/Subject';
import AddTodoContainer from './container/AddTodoContainer';
import TodoContainer from './container/TodoContainer';

import './App.css';

function App(props) {
  return (
	  <div className="App container">
		  <Subject />
		  <AddTodoContainer />
		  <TodoContainer />
	  </div>
  )
}

export default App;
