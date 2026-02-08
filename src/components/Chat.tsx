//import './Chat.css';
import { useState } from 'react';
//import { messages, MessageChannel} from '../types';
import useStatefulChat from '../hooks/useChat';

import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import ChatFooter from './ChatFooter';

const Chat: React.FC = () => {
    const { messages, sendMessage, error, loading} = useStatefulChat();
    const [inputValue, setInputValue] = useState('');
    
    //const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    
    return (
        <>
             <ChatHeader />
            {/* Main content area */}
            <ChatMessages messages={messages} loading={loading} error={error}/>
                <ChatInput inputValue={inputValue} onInputChange={onInputChange} sendMessage={sendMessage} loading={loading}/>            
            <ChatFooter />
        </>
    );
}

export default Chat;