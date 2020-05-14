import React, {Component} from 'react';
import Subject from './component/header/Subject';
import Content from './component/todo/Content';
import Footer from './component/footer/Footer';
import './App.css';

function App(props) {
  return (
	  <div className="App container">
		  <Subject/>
		  <Content/>
		  <Footer/>
	  </div>
  )
}

export default App;
