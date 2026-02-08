interface ChatInputProps {
    //inputValue: string;
    //onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sendMessage: (text: string) => void;
    loading: boolean;
   // error: string | null;
}

export type { ChatInputProps };