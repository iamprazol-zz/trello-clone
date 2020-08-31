import React, { useState, useRef, useEffect } from 'react'
import './BoardCard.css'
import IconContainer from '../common/IconContainer/IconContainer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListCard from './List Card/ListCard';
import AddMoreIcon from '@material-ui/icons/Add'
import db from '../../firebase'

function BoardCard( {name, id}) {
	const [title, setTitle] = useState(name);
	const [edit, setEdit] = useState(false);
	const [lists, setLists] = useState([]);
	const [cards, setCards] = useState({ title: '' });
	const [addCardClick, setAddCardClick] = useState(false);
	const textInput = useRef('')
	const cardTitleInput = useRef('')

	useEffect(() => {
		db.collection('boards').doc(id).collection('lists').onSnapshot( (snapshot) => (
			setLists(
				snapshot.docs.map( doc => ({
					id: doc.id,
					title: doc.data().title
				}))
			)
		))
	}, [])

	useEffect(() => {
		if( edit ){
			textInput.current.focus();
		}

		if( addCardClick ) {
			cardTitleInput.current.focus();
		}

	}, [edit, addCardClick])

	const saveTitle = e => {
		if (e.type === "blur" || (e.type === "keypress" && e.key === "Enter")) {
			setEdit( !edit )
		}

		db.collection('boards').doc(id).update({
			title: title
		})
	}

	const openAddListCard = (e) => {

		if (e.type === "blur" || (e.type === "keypress" && e.key === "Enter")) {
			setAddCardClick( !addCardClick )

			db.collection('boards').doc(id).collection('lists').add({
				title: cards.title
			})
		}
	}

	return (
		<div className="boardCard">
			<div className="boardCardHeader">
				{ edit ?
				<input
					value={title}
					type="text"
					onChange={(event) => {
						if (event.target.value) {
							setTitle(event.target.value);
						}
					}}
					onBlur={
						saveTitle
					}
					onKeyPress={
						saveTitle
					}
					ref={textInput}
					/>
				 :
				 <h4
				 	onClick= {
						() => {
							setEdit( !edit );
						}
					}
					>{ name }</h4>
				}
				<IconContainer icon={<MoreHorizIcon />}/>
			</div>
			<div className="boardCardBody">
				{
					lists.map( list => (
						list ?
							<ListCard name={list.title} key={list.id} id={list.id} />
						:
						''
					)
				)
				}
				{
					addCardClick ?
						<input
							type="text"
							value={cards.title}
							onChange={ (e) => (
								e.target.value ?
									setCards({ title: e.target.value })
								:
								''
							)}
							onBlur={
								openAddListCard
							}
							onKeyPress={
								openAddListCard
							}
							ref={cardTitleInput}
						/>
					:
					''
				}

			</div>
			<div className="boardCardFooter">
				<div className="add__area" onClick={() => setAddCardClick( ! addCardClick )}>
					<IconContainer
						icon={
						<AddMoreIcon />
						}
						text="Add another card"
					/>
				</div>
			</div>
		</div>
	)
}

export default BoardCard
