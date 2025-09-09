import { messageSchema } from "@/lib/validators"
import type { ChatMessage } from "@/lib/types"

const uid = (n = 6) => Math.random().toString(36).slice(2, 2 + n)

// hook for bot responses LLM + Langchain

export function useLLMsVector(
    getMessages: () => ChatMessage[],
    setMessages: (m: ChatMessage[]) => void,
    setError: (msg: string | null) => void,
    render: () => void,
    setTyping: (v: boolean) => void,
    vectors: Record<string, string>
) {
    function pushMessage(role: "user" | "bot", text: string) {
        const candidate: ChatMessage = {
            id: uid(),
            role,
            text,
            ts: Date.now(),
        }

        const safe = messageSchema.safeParse(candidate)
        if (!safe.success) {
            setError("Message failed validation.")
            render()
            return
        }

        setMessages([...getMessages(), safe.data])
        setError(null)
        render()
    }

    function simulateBotReply(input: string) {
        setTyping(true)
        render()

        setTimeout(() => {
            const lower = input.toLowerCase().trim()

            // Split words, ignoring punctuation
            const words = lower.replace(/[?.!,]/g, "").split(/\s+/)

            if (
                (words[0] === "hi" || words[0] === "hello") &&
                words[1] &&
                /^(wh|how)/.test(words[1]) // matches who, what, when, where, why, how
            ) {
                const reply =
                    "Thank you! It seems you’re trying to ask a question, let me know more."
                pushMessage("bot", reply)
                setTyping(false)
                render()
                return
            }

            // Priority order – important keywords first
            const priority = [
                "hello",
                "hi",
                "register",
                "book",
                "membership",
                "appointment",
                "price",
                "address",
                "contact",
                "apply",
                "program",
                "schedule",
                "time"
            ]

            // Collect all matches (respecting priority order)
            const matches = priority.filter((key) => lower.includes(key))

            let reply: string
            if (matches.length > 0) {
                // Merge replies with spacing
                reply = matches.map((m) => vectors[m]).join("\n\n")
            } else {
                reply =
                    "Sorry, I didn't understand that. Could you re-type your question?"
            }

            pushMessage("bot", reply)
            setTyping(false)
            render()
        }, 800 + Math.random() * 400)
    }



    return { pushMessage, simulateBotReply }
}
