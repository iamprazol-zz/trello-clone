import React from 'react'
import './BoardHeader.css'
import IconContainer from '../IconContainer/IconContainer'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import BusinessIcon from '@material-ui/icons/Business'
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline'
import AddIcon from '@material-ui/icons/Add'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar'

function BoardHeader() {
	return (
		<div className="boardHeader">
			<div className="boardHeaderCompany">
				<div className="boardHeaderCompany__left">
					<h3>Project Name</h3>
					<IconContainer icon={<StarBorderIcon />} />
				</div>
				<div className="boardHeaderCompany__center">
					<span className="boardHeaderDivider"></span>
					<IconContainer icon={<BusinessIcon />} text="Organization" tag="free" />
					<span className="boardHeaderDivider"></span>
					<IconContainer icon={<PeopleOutlineIcon />} text="Team Visible" />
				</div>
				<div className="boardHeaderCompany__right">
					<span className="boardHeaderDivider"></span>
					<div className="memberAvatar">
						<Avatar
							src="https://avatars1.githubusercontent.com/u/23380477?s=60&v=4"
							alt="prajjwal"
						/>
						<Avatar
							src="https://avatars1.githubusercontent.com/u/23380477?s=60&v=4"
							alt="prajjwal"
						/>
						<Avatar
							src="https://avatars1.githubusercontent.com/u/23380477?s=60&v=4"
							alt="prajjwal"
						/>
					</div>
					<div className="inviteButton">
						<IconContainer icon={<AddIcon />} text="invite" />
					</div>
				</div>
			</div>
			<div className="boardHeaderMenu">
				<IconContainer icon={<MenuIcon />} text="Show Menu" />
			</div>
		</div>
	)
}

export default BoardHeader
