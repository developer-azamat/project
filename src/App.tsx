import { useState } from 'react';
import { PageIndex } from "./pages/index";
import "./App.scss";
import Header from './components/header'
// import ChatItemList from './components/chatItemList'

function App() {
  const [activeChatId, setActiveChatId] = useState<number | null>(null);

  interface MyChat {
    text: string;
    author: string;
    time: number;
  }
  const [messages, setMessages] = useState<MyChat[]>([]);

  const handleChatItemClick = (chatId: number) => {
    setActiveChatId(chatId);
    // Fetch messages for the selected chat from your API or storage
    // Example: setMessages(fetchMessagesForChat(chatId));
  };

  const handleSubmitMessage = (text: string) => {
    // Send the new message to the server and update the messages state
    const newMessage = {
      text,
      author: 'You',
      time: new Date().getTime(), 
    };
    setMessages([...messages, newMessage]);
  };

  return (
		<div className='container'>
			<Header title='hello' />
			{/* <ChatItemList
				chats={}
				activeChatId={activeChatId}
				onChatItemClick={handleChatItemClick}
			/> */}
			<div className='left-section'></div>
			<div className='right-section'>
				<PageIndex />
			</div>

			<div className='mobile-message'>
				<h1>
					ПРОСТИТЕ! НО ДЛЯ МОБИЛЬНЫХ ТЕЛЕФОНОВ У НАС ЕСТЬ МОБИЛЬНОЕ ПРИЛОЖЕНИЕ
				</h1>
			</div>
		</div>
	)
}

export default App;
