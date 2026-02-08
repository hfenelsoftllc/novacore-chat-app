//import './Chat.css';
import { useState, useEffect, useRef } from 'react';
//import { messages, MessageChannel} from '../types';
import useStatefulChat from '../hooks/useChat';

const Chat: React.FC = () => {
    const { messages, sendMessage, error, loading} = useStatefulChat();
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef<HTMLDivElement>(null);
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleSendMessage = () => {
        if (inputValue.trim() !== '') {
            sendMessage(inputValue);
            setInputValue('');
        }
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    
    return (
        <>
            <header className='flex items-center p-4 border-b border-gray-200 dark:border-gray-700'>
                <i className="bi bi-chat-dots-fill text-teal-700 dark:text-teal-600 md:text-4xl mr-4"></i>
                <div>
                    <h1 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>NovaCore Chat</h1>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>Your AI-powered assistant for seamless communication</p>
                </div>
            </header>   
            {/* Main content area */}
            <main className='grow p-4 overflow-y-auto scroll-smooth'>
                {/* Welcome message */}
                <div className='bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md text-gray-800 dark:text-gray-200 text-center'>
                    <h2 className='text-xl font-semibold mb-2'>Welcome to NovaCore Chat!</h2>
                    <p className='text-sm'>Start a conversation with our AI assistant to get instant responses and insights.</p>
                </div>
                <div className='flex flex-col space-y-4'></div>
                {/* Example chat message */}
                {messages.length === 0 ? (
                    <div className='flex flex-col items-center justify-center h-full text-gray-400 dark:text-gray-500'>
                        <i className="bi bi-chat-square text-4xl mb-2 opacity-50"></i>
                        <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>No messages yet. Start chatting to see your conversation here!</p>
                    </div>
                ) : (
                    messages.map((msg) => (
                        <div key={msg.id} className={`flex flex-col items-center ${msg.sender === 'user' ? 'self-end items-end' : 'self-start items-start '}` }>
                            <p className={`${
                                msg.sender=== "user" ? "text-teal-600 dark:text-teal-400" : "text-gray-500 dark:text-gray-400"}`}>
                                    {msg.sender === 'user' ? 'You' : msg.modelName ?? 'NovaCoreBot'} -
                                    {msg.timestamp ? new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
                            </p>                       
                            <div className={`rounded-2xl px-4 py-3 shadow-sm max-w-xs ${msg.sender === 'user' ? 'bg-teal-600 text-white rounded-br-none self-end' : 'bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none self-start'}`}>
                                <p className={`text-sm ${msg.sender === 'user' ? 'whitespace-pre-wrap' : 'whitespace-pre-wrap'}`}>
                                        {msg?.message}
                                </p>
                            
                            </div>          
                        </div>
                    ))
                )
                }
                {error && <div className="text-red-500 text-center">{error}</div>}
                {/* Show loading indicator when waiting for a response */}
                {loading && (
                    <div className=" flex justify-start">
                        <div className='max-w-xs md:max-w-md lg:max-w-2xl animate-pulse'>
                            <div className='flex items-center'>
                                <span className='text-xs text-gray-400 ms-3'>
                                NovaCoreBot is typing...
                                </span>
                                <span className='w-2 h-2 bg-teal-400 rounded-full ml-2 animate-pulse delay-100'></span>
                                <span className='w-2 h-2 bg-teal-400 rounded-full ml-1 animate-pulse delay-200'></span>
                                <span className='w-2 h-2 bg-teal-400 rounded-full ml-1 animate-pulse delay-300'></span>
                            </div>
                            {/* skeleton loader */}
                            <div className='mt-2 space-y-2 p-3 rounded-2xl bg-gray-700'>
                                <div className='h-2 bg-gray-600 rounded w-3/4'></div>
                                <div className='h-2 bg-gray-600 rounded w-1/2'></div>
                            </div>
                        </div>                      
                    </div>
                    )
                }
                <div ref={messagesEndRef} />
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
                        className="ml-2 px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Send
                    </button>
                </div>

            </main>
            {/* Footer */}
            <footer className='flex items-center justify-center p-4 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex items-center space-x-2 '>
                    
                    <i className="bi bi-github text-gray-500 dark:text-gray-400 text-xl"></i>
                    <i className="bi bi-linkedin text-gray-500 dark:text-gray-400 text-xl"></i>
                    <i className="bi bi-twitter text-gray-500 dark:text-gray-400 text-xl"></i>
                </div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>© 2026 NovaCoreVectra. All rights reserved.</p>
            </footer>
            <div className="bg-gray-500 p-4 rounded-lg shadow-md text-white text-center">
            </div>
        </>
    );
}

export default Chat;