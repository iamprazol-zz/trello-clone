import React from 'react'
import './IconContainer.css'

function IconContainer({ icon, text, tag }) {
	return (
		<div className="iconContainer">
			{ icon && icon }
			{ text && <h4> { text }</h4> }
			{ tag && <p>{tag}</p> }
		</div>
	)
}

export default IconContainer
