import React from 'react'

interface TimeProps {
	timestamp: number
}

const Time: React.FC<TimeProps> = ({ timestamp }) => {
	const formattedTime = new Date(timestamp).toLocaleString()
	return (
		<div>
			<p>{formattedTime}</p>
		</div>
	)
}

export default Time
