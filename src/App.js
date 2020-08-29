import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/common/Header/Header';
import BoardHeader from './components/common/Board Header/BoardHeader';
import BoardCard from './components/Board Card/BoardCard';
import db from './firebase'

function App() {
	const [boards, setBoards] = useState([]);

	useEffect(() => {
		db.collection('boards').onSnapshot( snapshot => (
			setBoards(
				snapshot.docs.map( doc => ({
					id: doc.id,
					title: doc.data().title
				}))
			)
		))
	}, [])

  return (
    <div className="app">
		<Header />
		<div className="board">
			<BoardHeader />
			<div className="boardBody">
				{/* <BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard />
				<BoardCard /> */}
				{
					boards.map( board => (
						<BoardCard key={board.id} name={board.title} id={ board.id }/>
					))
				}
			</div>
		</div>
    </div>
  );
}

export default App;
