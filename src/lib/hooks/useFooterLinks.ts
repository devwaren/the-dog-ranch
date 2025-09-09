import { html, mapper } from "@devwareng/vanilla-ts"
import { LINKS, } from "../constants"
import { useFooterContainers } from "./useFooterContainers"

const useFooterLinks = () => {

    const footerSections = useFooterContainers()

    const createContainers = mapper(
        LINKS.map(
            ({ title, icon }) => html`
            <div class="flex items-center gap-2">
                <p class="bx ${icon}"></p>
                <p>${title}</p>
            </div>
            `
        )
    )

    // Company info stays separate
    const companyInfo = html`
        <div class="grid gap-4">
            <div>
                <h2 class="font-semibold text-3xl">The Dog Ranch</h2>
                <p>Lipa</p>
            </div>
            <p>An invitation-only haven for boarding, training, and day enrichment.</p>
            <div>
                ${createContainers}
            </div>
        </div>
        `

    return { footerSections, companyInfo }
}

export { useFooterLinks }
