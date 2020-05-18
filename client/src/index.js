import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Provider 불러오기
import App from './App';
import configureStore from './store';

ReactDOM.render(
	<Provider store={configureStore()}>
        <App />
    </Provider>,
  document.getElementById('root')
);
