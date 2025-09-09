import { html, useTSElements } from "@devwareng/vanilla-ts";
import { useChatSettings } from "@/lib/hooks";

export default function ChatBot(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="fixed right-[2%] bottom-10 z-[99]">
            <div class="relative">
                <div id="chat-container" class="animate__animated animate__fadeInUp delay-75 absolute bottom-12 right-5"></div>
                <button id="chat-bot"
                    class="w-10 h-10 rounded-full bg-orange-100 hover:bg-orange-950 grid place-items-center shadow-2xl cursor-pointer">
                    <p class="sr-only">chat-bot</p>
                </button>
            </div>
        </div>
    `,

    );

    useChatSettings(DOM)

    return ui;
}
