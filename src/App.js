import React from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import BoardHeader from './components/common/Board Header/BoardHeader';

function App() {
  return (
    <div className="app">
		<Header />
		<div className="boardBody">
			<BoardHeader />
		</div>
    </div>
  );
}

export default App;
