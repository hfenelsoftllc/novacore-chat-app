async function sendMessageToLLM(message: string): Promise<{reply: string}> {
    const response = await fetch('/api/chat', {
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