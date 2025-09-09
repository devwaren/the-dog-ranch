import { html, mapper, useTSCollection } from "@devwareng/vanilla-ts"
import { PROGRAM_CARDS } from "../constants/icons"
import { useUniqueId } from "./useUniqueId"

const useProgramSettings = (DOM: HTMLElement) => {
    const programCard = mapper(
        PROGRAM_CARDS.map(({ title, subTitle, desc, iconId }, i) => {
            const delay = (i % 5) + 1
            const delayClass = `animate__delay-${delay}s`

            const { dataId } = useUniqueId()

            return html`
        <div data-id="${dataId}"
            class="bg-white border border-gray-200 p-6 rounded-lg animate__animated animate__zoomIn ${delayClass}">
            <div>
                <div class="flex items-center gap-4">
                    <div id="${iconId}" class="bg-gray-200 p-2 w-10 rounded-lg"></div>
                    <h2>${title}</h2>
                    <div class="rounded-lg bg-gray-300 px-4 py-1">${subTitle}</div>
                </div>
                <div class="py-2 text-gray-600">
                    <p>${desc}</p>
                </div>
            </div>
        </div>
        `
        })
    )

    queueMicrotask(() => {
        PROGRAM_CARDS.forEach(({ iconId, component }) => {
            useTSCollection([iconId], DOM, [component])
        })
    })

    return { programCard }
}

export { useProgramSettings }
