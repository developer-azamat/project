import React from 'react'

interface MessageProps {
	text: string
	author: string
	time: string
}

const Message: React.FC<MessageProps> = ({ text, author, time }) => {
	return (
		<div>
			<p>{text}</p>
			<p>{author}</p>
			<p>{time}</p>
		</div>
	)
}

export default Message
