import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function Crown(DOM: HTMLElement) {


    const ui = useTSElements(
        DOM,
        html`
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
            <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path>
        </svg>
        `
    );

    return ui
}