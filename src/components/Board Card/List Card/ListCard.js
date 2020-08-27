import React from 'react'
import './ListCard.css'
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import IconContainer from '../../common/IconContainer/IconContainer';
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded';

function ListCard() {
	return (
		<div className="listCard">
			<div className="listCardHeader">
				<p>Label</p>
			</div>
			<div className="listCardBody">
				<p>This is list card body cause it is something</p>
			</div>
			<div className="listCardFooter">
				<IconContainer icon={<DragIndicatorIcon />} />
				<IconContainer icon={<ChatBubbleOutlineRoundedIcon />} text="7" />
			</div>
		</div>
	)
}

export default ListCard
