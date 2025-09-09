import { html, mapper, useTSComponent, useTSElements } from "@devwareng/vanilla-ts";
import { Paws } from "../Icons";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar(DOM: HTMLElement) {

    const linkMapper = mapper(
        NAV_LINKS.map(link => html`
            <li>
                <a href="${link.path}" class="hover:bg-gray-200 hover:shadow transition-colors px-4 py-2 rounded">
                    ${link.title}
                </a>
            </li>
        `)
    );

    const ui = useTSElements(
        DOM,
        html`
        <div class="flex items-center justify-between p-4 max-w-screen-2xl mx-auto px-4">
            <div class="flex items-center gap-4">
                <div id="paw"></div>
                <div class="leading-tight">
                    <h1 class="font-bold">Dog Ranch</h1>
                    <p class="text-sm text-gray-600">Lipa</p>
                </div>
            </div>
        
            <div class="flex items-center gap-6 text-gray-600">
                <nav aria-label="Main navigation">
                    <ul class="flex gap-4">${linkMapper}</ul>
                </nav>
                <button class="bg-orange-600 px-4 py-2 rounded text-white hover:bg-orange-700 transition-colors cursor-pointer">
                    Inquire Now
                </button>
            </div>
        </div>
    `
    );

    useTSComponent("paw", DOM, Paws);

    return ui;
}
