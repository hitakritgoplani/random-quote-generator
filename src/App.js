import React from 'react';
import './App.css';
import Button from './components/Button'
import DisplayDiv from './components/DisplayDiv'

function App() {
  return (
	<div className='root-app-class'>
		<DisplayDiv className='display-quote-app'/>
    	<Button />
	</div>
  );
}

export default App;
