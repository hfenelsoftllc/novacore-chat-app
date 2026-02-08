interface ChatMessagesProps {
    messages: Message[];
    loading: boolean;
    error: string | null;
}

interface Message {
    id: string;
    sender: 'user' | 'bot';
    timestamp?: string;
    message: string;
    modelName?: string;
}

export type { ChatMessagesProps, Message };