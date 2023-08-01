import React from 'react'

interface NewMessageProps {
	show: boolean
}

const NewMessage: React.FC<NewMessageProps> = ({ show }) => {
	return show ? <div>New messages</div> : null
}

export default NewMessage
