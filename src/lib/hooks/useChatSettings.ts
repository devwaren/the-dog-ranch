import { useTSCollection, useTSEvent, useTSSelect } from "@devwareng/vanilla-ts"
import { Paws } from "../components/Icons"
import { chatStore } from "../store"
import ChatContainer from "../components/Chat/container"

const useChatSettings = (DOM: HTMLElement) => {
    enum IDs {
        CHATBOT = "chat-bot"
    }

    const sections = [IDs.CHATBOT]
    const components = [Paws]

    useTSCollection(sections, DOM, components)

    // State
    const container = useTSSelect("#chat-container", DOM)

    useTSEvent("chat-bot", "click", (e) => {
        e.preventDefault()
        chatStore.getState().toggleChat()
    })

    // subscribe to store changes
    chatStore.subscribe((state) => {
        container!.textContent = ""
        if (state.isOpen) {
            // create wrapper div with animate.css classes
            const wrapper = document.createElement("div")
            wrapper.className = "animate__animated animate__fadeInRight"
            ChatContainer(wrapper)
            container!.appendChild(wrapper)
        } else {
            const wrapper = document.createElement("div")
            wrapper.className = "animate__animated animate__fadeOutRight"
            ChatContainer(wrapper)
            container!.appendChild(wrapper)
        }
    })
}

export { useChatSettings }
