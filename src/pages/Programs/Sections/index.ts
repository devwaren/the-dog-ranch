
import { useProgramSettings } from '@/lib/hooks';
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Pcards(DOM: HTMLElement) {
    const { programCard } = useProgramSettings(DOM)

    const ui = useTSElements(
        DOM,
        html`
        <section class="grid grid-cols-2 gap-4 py-8">
            ${programCard}
        </section>
    `
    )

    return ui
}