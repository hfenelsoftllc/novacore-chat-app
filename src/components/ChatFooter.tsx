

const ChatFooter: React.FC = () => {
    return (
        <>
             {/* Footer */}
            <footer className='flex items-center justify-center p-4 border-t border-gray-200 dark:border-gray-700'>
                <div className='flex items-center space-x-2 '>
                    
                    <i className="bi bi-github text-gray-500 dark:text-gray-400 text-xl"></i>
                    <i className="bi bi-linkedin text-gray-500 dark:text-gray-400 text-xl"></i>
                    <i className="bi bi-twitter text-gray-500 dark:text-gray-400 text-xl"></i>
                </div>
                <p className='text-sm text-gray-500 dark:text-gray-400'>© 2026 NovaCoreVectra. All rights reserved.</p>
            </footer>       
        </>      
    );
}

export default ChatFooter;