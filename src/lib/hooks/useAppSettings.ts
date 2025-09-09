import { Router } from "@/routes"
import { useAnchor, useTSCollection, useTSSelect } from "@devwareng/vanilla-ts"
import { ChatBot, Footer, Navbar } from "../components"

const useAppSettings = (DOM: HTMLElement) => {

    enum IDs {
        NAVBAR = "navbar",
        ROUTER = "router",
        FOOTER = "footer",
        CHATBOT = "chat"
    }

    const sections = [IDs.NAVBAR, IDs.ROUTER, IDs.FOOTER, IDs.CHATBOT]

    const components = [
        Navbar,
        Router,
        Footer,
        ChatBot
    ]

    useTSCollection(
        sections,
        DOM,
        components,
    )


    window.addEventListener("keydown", (ev: Event) => {
        const kev = ev as KeyboardEvent
        if (kev.key === "Enter" && !kev.shiftKey) {
            kev.preventDefault()
        }
    })


    const a = useTSSelect("a") as NodeListOf<HTMLAnchorElement> | null
    return useAnchor(a)

}

export { useAppSettings }