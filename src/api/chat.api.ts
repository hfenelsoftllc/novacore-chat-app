import type { LLMResponse } from "../types/Chat";

const API_URL = 'http://localhost:3000';

async function sendMessageToLLM(message: string): Promise<LLMResponse> {
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