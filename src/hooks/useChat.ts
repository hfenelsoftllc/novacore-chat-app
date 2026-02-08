import { useCallback, useState } from 'react';
import type { Message } from '../types/Chat';


function useStatefulChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    //const [newMessage, setNewMessage] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    const sendMessage = useCallback(async (text: string) => {
        if(!text.trim()) return;
        const userMessage: Message = { 
            id: Date.now().toString(), 
            sender: 'user', 
            message: text, 
            timestamp: new Date().toISOString() 
        };
        setMessages([...messages, userMessage]);
        //setNewMessage('');
        setLoading(true);
        setError(null);
        try {
            // Simulate sending message to an API and getting a response
            await new Promise(resolve => setTimeout(resolve, 1000));
            const botMessage: Message = { 
                id: (Date.now() + 1).toString(), 
                sender: 'bot',
                message: `${text}`,
                timestamp: new Date().toISOString() 
            };
            setMessages(prevMessages => [...prevMessages, botMessage]);
        } catch (err) {
            setError('Failed to send message. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }

        // const message = { sender: 'user', text };
        // setMessages([...messages, message]);
        // setNewMessage('');
    }, [messages]);
    return { messages, sendMessage, loading, error };
};
export default useStatefulChat;