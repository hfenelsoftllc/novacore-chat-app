export interface Message {
    id: string;
    sender: 'user' | 'bot';
    timestamp?: string;
    message: string;
    modelName?: string;
}