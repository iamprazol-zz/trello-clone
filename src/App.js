import React from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import BoardHeader from './components/common/Board Header/BoardHeader';
import BoardCard from './components/Board Card/BoardCard';

function App() {
  return (
    <div className="app">
		<Header />
		<div className="board">
			<BoardHeader />
			<div className="boardBody">
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
			</div>
		</div>
    </div>
  );
}

export default App;
