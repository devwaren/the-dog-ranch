import { useFooterLinks } from "@/lib/hooks"
import { html, mapper, useTSElements } from "@devwareng/vanilla-ts"

export default function Footer(DOM: HTMLElement) {
    const { footerSections, companyInfo } = useFooterLinks()

    const makefooterSection = mapper(footerSections.map(
        ({ title, items }) => html`
                <div class="grid gap-4">
                    <h3>${title}</h3>
                    ${items}
                </div>
        `))

    const ui = useTSElements(
        DOM,
        html`
        <div class="px-4 py-16 relative">
            <div class="max-w-screen-2xl mx-auto px-4 text-gray-500">
        
                <div class="flex flex-col lg:flex-row gap-16 items-start justify-between">
                    ${companyInfo}
                    ${makefooterSection}
                </div>
        
                <div class="w-full h-[1px] bg-gray-300 my-8"></div>
                <div class="grid lg:flex justify-center lg:justify-between gap-4 items-center text-sm md:text-base">
                    <p>© 2025 The Canine Club. All rights reserved.</p>
                    <img src="/puppy.webp" alt="puppy image" width="300" class="hidden lg:absolute bottom-0 left-[50%]">
                    <button class="px-6 py-3 bg-gray-200 rounded-xl">Subscribe for Updates</button>
                </div>
            </div>
        </div>
    `
    )

    return ui
}
