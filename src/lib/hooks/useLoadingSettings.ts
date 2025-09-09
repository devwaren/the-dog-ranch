import { useTSComponent, useTSSelect } from "@devwareng/vanilla-ts"
import { Paws } from "../components/Icons"

const useLoadingSettings = (DOM: HTMLElement) => {

    // ✅ Attach paw icon
    useTSComponent("paw-loader", DOM, Paws)

    // ✅ Delay until DOM is painted
    requestAnimationFrame(() => {
        const textEl = useTSSelect("#loading-text", DOM)

        if (textEl) {
            const texts = ["is Trimming…", "is Catching…", "is Fetching…"]
            let index = 0

            textEl.textContent = texts[index] // start with first one

            setInterval(() => {
                index = (index + 1) % texts.length
                textEl.textContent = texts[index]
            }, 200) // switch every 1.5s
        }
    })

}

export { useLoadingSettings }