import React from 'react'

interface Chat {
	id: string
	name: string
}

interface ChatItemListProps {
	chats: Chat[]
	activeChatId: number | null
	onChatItemClick: (chatId: number | string) => void
}

const ChatItemList: React.FC<ChatItemListProps> = ({
	chats,
	activeChatId,
	onChatItemClick,
}) => {
	return (
		<div>
			{chats.map(chat => (
				<div
					key={chat.id}
					className={chat.id == activeChatId ? 'active' : ''}
					onClick={() => onChatItemClick(chat.id)}
				>
					{chat.name}
				</div>
			))}
		</div>
	)
}

export default ChatItemList
