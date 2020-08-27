import React from 'react'
import './BoardCard.css'
import IconContainer from '../common/IconContainer/IconContainer'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ListCard from './List Card/ListCard';
import AddMoreIcon from '@material-ui/icons/Add'

function BoardCard() {
	return (
		<div className="boardCard">
			<div className="boardCardHeader">
				<h4>Knowledge Base</h4>
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
