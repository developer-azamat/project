import React, { useState } from 'react'

interface InputProps {
	onSubmit: (text: string) => void
}

const Input: React.FC<InputProps> = ({ onSubmit }) => {
	const [inputValue, setInputValue] = useState('')

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.target.value)
	}

	const handleSubmit = () => {
		if (inputValue.trim() !== '') {
			onSubmit(inputValue)
			setInputValue('')
		}
	}

	return (
		<div>
			<input type='text' value={inputValue} onChange={handleInputChange} />
			<button onClick={handleSubmit}>Send</button>
		</div>
	)
}

export default Input
