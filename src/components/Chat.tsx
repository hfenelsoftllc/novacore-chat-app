//import './Chat.css';
//import { useState } from 'react';
//import { messages, MessageChannel} from '../types';
import useStatefulChat from '../hooks/useChat';

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatFooter from './ChatFooter';

const Chat: React.FC = () => {
    const { messages, sendMessage, error, loading} = useStatefulChat();
    
    //const messagesEndRef = useRef<HTMLDivElement>(null);
    
    return (
        <>
            {/* Header */}
            <ChatHeader />
            {/* Main content area */}
            <ChatMessages messages={messages} loading={loading} error={error}/>
            <ChatInput sendMessage={sendMessage} loading={loading} />
            {/* Footer */}
            <ChatFooter />
        </>
    );
}

export default Chat;