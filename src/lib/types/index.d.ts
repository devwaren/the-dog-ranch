export type ChatMessage = {
    id: string
    role: "user" | "bot"
    text: string
    ts: number,
    content?: string
}

export type ChatState = {
    // UI
    isOpen: boolean
    toggleChat: () => void

    // Messages
    messages: ChatMessage[]
    isTyping: boolean
    errorMsg: string | null

    // Actions
    pushMessage: (role: ChatMessage["role"], text: string) => void
    setError: (msg: string | null) => void
    setTyping: (v: boolean) => void
}