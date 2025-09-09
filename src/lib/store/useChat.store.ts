import { createStore } from "zustand/vanilla"
import { uid } from "@/lib/utils"
import { ChatMessage } from "@/lib/types"

// --- UI store (for open/close state) ---
interface ChatUIState {
    isOpen: boolean
    toggleChat: () => void
}

export const chatStore = createStore<ChatUIState>((set) => ({
    isOpen: false,
    toggleChat: () => set((s) => ({ isOpen: !s.isOpen })),
}))

// --- Message store (for conversation state) ---
interface ChatMsgState {
    messages: ChatMessage[]
    isTyping: boolean
    errorMsg: string | null
    pushMessage: (role: ChatMessage["role"], text: string) => void
    setError: (msg: string | null) => void
    setTyping: (v: boolean) => void
}

export const chatStoreMsg = createStore<ChatMsgState>((set) => ({
    messages: [
        {
            id: uid(),
            role: "bot",
            text: "Hi! How can I help you today?",
            ts: Date.now() - 60000,
        },
    ],
    isTyping: false,
    errorMsg: null,
    pushMessage: (role, text) =>
        set((s) => ({
            messages: [...s.messages, { id: uid(), role, text, ts: Date.now() }],
        })),
    setError: (msg) => set({ errorMsg: msg }),
    setTyping: (v) => set({ isTyping: v }),
}))
