
import type { LLMResponse } from "../types/Chat";

const API_URL = import.meta.env.VITE_API_URL;

async function sendMessageToLLM(message: string): Promise<LLMResponse> {
    //console.log('API_URL', API_URL);
    //console.log('message', message);
    const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({message})
    });
    if (!response.ok) {
        throw new Error('Failed to send message');
    }
    const data = await response.json();
    return data;
}
export default sendMessageToLLM;