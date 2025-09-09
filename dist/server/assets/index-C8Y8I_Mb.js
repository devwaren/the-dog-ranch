import { mapper, html, useTSElements } from "@devwareng/vanilla-ts";
import "../entry-server.js";
import { f as footerLinks, s as socialLinks, a as scheduleList, L as LINKS } from "./index-PNxtFWDn.js";
import { u as useUniqueId } from "./useUniqueId-NEFOmYFG.js";
import "zod";
import "zustand/vanilla";
const useFooterContainers = () => {
  const { dataId: exploreId } = useUniqueId();
  const { dataId: socialId } = useUniqueId();
  const footerContainer = mapper(
    footerLinks.map(
      ({ url, title }) => html`
            <a data-id="${exploreId}" href="${url}" class="hover:text-gray-800 hover:font-semibold">
                ${title}
            </a>
          `
    )
  );
  const socialContainer = mapper(
    socialLinks.map(
      ({ title, icon, url }) => html`
            <a data-id="${socialId}" href="${url}" aria-label="${title}" class="bx ${icon} text-3xl hover:text-gray-800">
                <span class="sr-only">${title}</span>
            </a>
            `
    )
  );
  const hoursContainer = mapper(scheduleList.map((p) => html`<p>${p}</p>`));
  const FOOTER_SECTIONS = [
    {
      title: "Explore",
      items: footerContainer
    },
    {
      title: "Hours",
      items: hoursContainer
    },
    {
      title: "Follow Us",
      items: html`
        <div class="flex gap-4">
            ${socialContainer}
        </div>
      `
    }
  ];
  return FOOTER_SECTIONS;
};
const useFooterLinks = () => {
  const footerSections = useFooterContainers();
  const createContainers = mapper(
    LINKS.map(
      ({ title, icon }) => html`
            <div class="flex items-center gap-2">
                <p class="bx ${icon}"></p>
                <p>${title}</p>
            </div>
            `
    )
  );
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
        `;
  return { footerSections, companyInfo };
};
function Footer(DOM) {
  const { footerSections, companyInfo } = useFooterLinks();
  const makefooterSection = mapper(footerSections.map(
    ({ title, items }) => html`
                <div class="grid gap-4">
                    <h3>${title}</h3>
                    ${items}
                </div>
        `
  ));
  const ui = useTSElements(
    DOM,
    html`
        <div class="px-4 py-16 relative">
            <div class="max-w-screen-2xl mx-auto px-4 text-gray-500">
        
                <div class="flex gap-16 items-start justify-between">
                    ${companyInfo}
                    ${makefooterSection}
                </div>
        
                <div class="w-full h-[1px] bg-gray-300 my-8"></div>
                <div class="flex justify-between items-center">
                    <p>© 2025 The Canine Club. All rights reserved.</p>
                    <img src="/puppy.webp" alt="puppy image" width="300" class="absolute bottom-0 left-[50%]">
                    <button class="px-6 py-3 bg-gray-200 rounded-xl">Subscribe for Updates</button>
                </div>
            </div>
        </div>
    `
  );
  return ui;
}
export {
  Footer as default
};
