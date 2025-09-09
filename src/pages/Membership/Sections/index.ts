
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function MembershipHero(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
        <div class="min-h-screen py-16">
            <h1>index</h1>
        </div>
        `
    );

    return ui
}