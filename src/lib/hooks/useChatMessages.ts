// src/lib/hooks/useChatMessages.ts
import { html, mapper } from "@devwareng/vanilla-ts"

export type ChatMessage = {
    id: string
    role: "user" | "bot"
    text: string
    ts: number
}

type UseChatMessagesOptions = {
    asHTML?: boolean
}

export const useChatMessages = (
    messages: ChatMessage[],
    isTyping: boolean,
    errorMsg: string | null,
    options: UseChatMessagesOptions = {}
) => {
    const typingBubble = html`
        <div class="flex">
            <div class="bg-gray-100 px-3 py-2 rounded-2xl animate-pulse text-sm">typing...</div>
        </div>
    `

    const errorBubble = (msg: string) => html`
        <div class="text-xs text-red-600 mt-1" role="alert">${msg}</div>
    `

    const dateFormat = (m: ChatMessage) =>
        new Date(m.ts).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        })

    const shouldShowApplyButton = (text: string) => {
        const lower = text.toLowerCase()
        return ["apply", "book", "membership"].some((k) => lower.includes(k))
    }

    const messageMapper = mapper(
        messages.map((m) => {
            const isUser = m.role === "user"
            const wrapperClass = isUser ? "justify-end" : "justify-start"
            const bubbleClass = isUser
                ? "bg-orange-600 text-white rounded-br-none"
                : "bg-gray-100 text-gray-800 rounded-bl-none"

            // ✅ Render as raw HTML when bot + asHTML
            let content
            if (options.asHTML && !isUser) {
                const div = document.createElement("div")
                div.className = "text-sm"
                div.innerHTML = m.text
                content = div
            } else {
                content = html`<div class="text-sm">${m.text}</div>`
            }

            return html`
                <div class="flex ${wrapperClass}">
                    <div class="max-w-[80%] break-words px-4 py-2 rounded-2xl shadow-sm ${bubbleClass}">
                        ${content}
                        ${!isUser && shouldShowApplyButton(m.text)
                            ? html`<a href="/membership" class="mt-2 px-3 py-1 rounded bg-orange-600 text-white text-xs hover:bg-orange-700">
                                Apply Membership
                        </a>`
                            : ""}
                        <div class="text-xs opacity-60 mt-1 text-right"> ${dateFormat(m)} </div>
                    </div>
                </div>
            `
        })
    )

    return {
        typingBubble,
        errorBubble,
        messageMapper,
        isTyping,
        errorMsg,
    }
}
