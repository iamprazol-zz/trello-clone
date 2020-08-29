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
	const textInput = useRef('')

	useEffect(() => {
		if( edit ){
			textInput.current.focus();
		}
	}, [edit])

	const saveTitle = e => {
		if (e.type === "blur" || (e.type === "keypress" && e.key === "Enter")) {
			setEdit( !edit )
		}

		db.collection('boards').doc(id).update({
			title: title
		})
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
				<ListCard />
				<ListCard />
				<ListCard />
			</div>
			<div className="boardCardFooter">
				<IconContainer icon={<AddMoreIcon />} text="Add another card" />
			</div>
		</div>
	)
}

export default BoardCard
