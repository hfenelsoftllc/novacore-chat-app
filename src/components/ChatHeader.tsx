const  ChatHeader: React.FC = () => {
    return (
        <>
        <header className='flex items-center p-4 border-b border-gray-200 dark:border-gray-700'>
            <i className="bi bi-chat-dots-fill text-teal-700 dark:text-teal-600 md:text-4xl mr-4"></i>
            <div>
                <h1 className='text-2xl font-bold text-gray-800 dark:text-white md:text-3xl'>NovaCore Chat</h1>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>Your AI-powered assistant for seamless communication</p>
            </div>
        </header>
        </>   
    );
}

export default ChatHeader;