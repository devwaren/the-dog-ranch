import { html, mapper } from "@devwareng/vanilla-ts"
import { useUniqueId } from "./useUniqueId"
import { footerLinks, scheduleList, socialLinks } from "../constants"

const useFooterContainers = () => {
    const { dataId: exploreId } = useUniqueId()
    const { dataId: socialId } = useUniqueId()

    const footerContainer = mapper(
        footerLinks.map(
            ({ url, title }) => html`
            <a data-id="${exploreId}" href="${url}" class="hover:text-gray-800 hover:font-semibold">
                ${title}
            </a>
          `
        )
    )

    const socialContainer = mapper(
        socialLinks.map(
            ({ title, icon, url }) => html`
            <a data-id="${socialId}" href="${url}" aria-label="${title}" class="bx ${icon} text-3xl hover:text-gray-800">
                <span class="sr-only">${title}</span>
            </a>
            `
        )
    )

    const hoursContainer = mapper(scheduleList.map((p) => html`<p>${p}</p>`))

    const FOOTER_SECTIONS = [
        {
            title: "Explore",
            items: footerContainer,
        },
        {
            title: "Hours",
            items: hoursContainer,
        },
        {
            title: "Follow Us",
            items: html`
        <div class="flex gap-4">
            ${socialContainer}
        </div>
      `,
        },
    ]

    return FOOTER_SECTIONS
}

export { useFooterContainers }