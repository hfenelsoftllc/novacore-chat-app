import { useState } from 'react';
//import useStatefulChat from '../hooks/useChat';
//import { messages, MessageChannel} from '../types';

import type { ChatInputProps } from '../types/ChatInputProps';

const ChatInput: React.FC<ChatInputProps> = ({ sendMessage, loading, error }: ChatInputProps) => {

    const [inputValue, setInputValue] = useState('');


     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        //onInputChange(e);
        setInputValue(e.target.value);
    };
    
    const handleSendMessage = (e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        if (inputValue.trim() !== '' && !loading) {
            sendMessage(inputValue);
            setInputValue('');
        };
    };


    return (
        <>
            <div className='flex items-center p-4 border-t border-gray-200 dark:border-gray-700'>
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSendMessage();
                            }
                        }}
                        className="grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                        placeholder="Type your message..."
                        disabled={loading}
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={loading || inputValue.trim() === ''}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-teal-600 hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 dark:bg-teal-600 dark: text-white flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed duration-300 transform active:scale-95 "
                    >
                        <i className="bi bi-send-fill text-lg"></i>
                    </button>
                {error && <div className="text-red-500 text-center">{error}</div>}

            </div>
        </>
        
    );
}

export default ChatInput;