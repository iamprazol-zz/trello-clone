import React from 'react'
import './Header.css'
import IconContainer from '../IconContainer/IconContainer'
import AppsIcon from "@material-ui/icons/Apps"
import HomeIcon from "@material-ui/icons/HomeRounded"
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined'
import AddIcon from '@material-ui/icons/Add'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import NotificationsIcon from '@material-ui/icons/NotificationsOutlined'
import Avatar from '@material-ui/core/Avatar'

function Header() {
	return (
		<div className="header">
			<div className="header__left">
				<IconContainer icon={<AppsIcon />} />
				<IconContainer icon={<HomeIcon />} />
				<IconContainer icon={<DashboardOutlinedIcon />} text="Boards" />
			</div>
			<div className="header__center">
				<h2>Trello Clone</h2>
			</div>
			<div className="header__right">
				<IconContainer icon={<AddIcon />} />
				<IconContainer icon={<InfoIcon />} />
				<IconContainer icon={<NotificationsIcon />} />
				<Avatar
					src="https://avatars1.githubusercontent.com/u/23380477?s=60&v=4"
					alt="prajjwal"
				/>
			</div>

		</div>
	)
}

export default Header
