import { chatStoreMsg } from "@/lib/store"
import { useChatMessages, useLLMsVector } from "@/lib/hooks"
import { inputSchema } from "@/lib/validators"
import { html, useTSElements, useTSSelect } from "@devwareng/vanilla-ts"
import { vectors } from "@/lib/constants"

export default function ChatContainer(DOM: HTMLElement) {

    // LLMs Chatbot Component

    const { getState, setState, subscribe } = chatStoreMsg

    const { pushMessage, simulateBotReply } = useLLMsVector(
        () => getState().messages,
        (m) => setState({ messages: m }),
        (msg) => setState({ errorMsg: msg }),
        render,
        (v) => setState({ isTyping: v }),
        vectors
    )

    function handleSend(input: HTMLInputElement) {
        const raw = input.value
        const parsed = inputSchema.safeParse(raw)

        if (!parsed.success) {
            setState({ errorMsg: parsed.error.issues[0].message })
            return
        }

        setState({ errorMsg: null })
        pushMessage("user", parsed.data)
        input.value = ""
        simulateBotReply(parsed.data)
    }

    function render() {
        const { messages, isTyping, errorMsg } = getState()
        const { typingBubble, errorBubble, messageMapper } = useChatMessages(
            messages,
            isTyping,
            errorMsg
        )

        const ui = useTSElements(
            DOM,
            html`
            <div class="max-w-[360px] w-full bg-white p-3 rounded-md shadow-2xl max-h-[560px] flex flex-col">
                <!-- header -->
                <div class="flex items-center gap-3 border-b pb-3 mb-2">
                    <div class="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold">
                        <p>DR</p>
                    </div>
                    <div>
                        <div class="font-semibold">Dog Ranch Assistant</div>
                        <div class="flex items-center gap-2 text-xs text-gray-500">
                            <span class="relative flex h-2 w-2">
                                <span
                                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <p>Online</p>
                        </div>
                    </div>
                </div>
            
                <!-- messages container -->
                <div data-id="chat-scroll" class="flex-1 overflow-y-auto space-y-3 p-3 scroll-smooth hidescroll">
                    ${messageMapper}
                    ${isTyping ? typingBubble : ""}
                </div>
            
                <!-- input area -->
                <div class="mt-3 pt-2 border-t">
                    <form data-id="chat-form" class="flex flex-col gap-2">
                        <div class="flex gap-2 items-center">
                            <input id="data-input" data-id="chat-input" type="text" placeholder="Type a message..."
                                class="flex-1 px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-orange-200" />
                            <button data-id="send-btn" type="submit" class="px-4 py-2 rounded-lg bg-orange-600 text-white">
                                Send
                            </button>
                        </div>
                        ${errorMsg ? errorBubble(errorMsg) : ""}
                    </form>
                </div>
            </div>
          `
        )

        // bind once after render
        const form = useTSSelect<HTMLFormElement>("[data-id='chat-form']", DOM)
        const inputEl = useTSSelect<HTMLInputElement>("#data-input", DOM)

        if (form && inputEl) {
            // prevent reload on submit
            form.onsubmit = (e) => {
                e.preventDefault()
                handleSend(inputEl)
            }

            // ✅ handle Enter key (no reload, Shift+Enter still allowed)
            inputEl.onkeydown = (e: KeyboardEvent) => {
                if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    handleSend(inputEl)
                }
            }
        }

        return ui
    }

    subscribe(() => {
        render()
        requestAnimationFrame(() => {
            const sc = useTSSelect<HTMLElement>("[data-id='chat-scroll']", DOM)
            if (sc) sc.scrollTop = sc.scrollHeight
        })
    })

    return render()
}
