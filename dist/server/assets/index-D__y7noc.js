import { C as CARD_PERKS } from "./index-PNxtFWDn.js";
import { mapper, html, useTSElements } from "@devwareng/vanilla-ts";
import "../entry-server.js";
import { u as useUniqueId } from "./useUniqueId-NEFOmYFG.js";
import "zod";
import "zustand/vanilla";
function TrainingPrograms(DOM) {
  const membershipCard = mapper(
    CARD_PERKS.map(({ title, desc, image }, i) => {
      const { dataId } = useUniqueId();
      const delay = `animate__delay-${i + 100}ms`;
      return html`
            <div data-id="${dataId}"
                class="bg-white px-4 py-2 rounded-md shadow-xl border border-gray-200 grid gap-8 animate__animated animate__zoomIn ${delay}">
                <div class="flex gap-2 items-center">
                    <div class="w-10 rounded-lg bg-gray-300 p-2">
                        <img src="${image}" alt="image card" width="100" height="100">
                    </div>
                    <h3 class="font-semibold text-lg">${title}</h3>
                </div>
                <div>
                    <p class="text-gray-500">${desc}</p>
                </div>
            </div>
            `;
    })
  );
  const ui = useTSElements(
    DOM,
    html`
        <div class="min-h-[40em] flex items-baseline justify-end relative">
            <div class="absolute top-0 left-0 w-full h-full bg-[url('/training-dog.webp')]"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-white via-white/20 to-transparent"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white via-white/20 to-transparent"></div>
            <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-white via-white/20 to-transparent"></div>
        
            <div class="relative max-w-screen-2xl mx-auto flex flex-col justify-between w-full h-full">
                <div class="h-[25em]"></div>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full h-[10em] gap-8">
                    ${membershipCard}
                </div>
            </div>
        </div>
        `
  );
  return ui;
}
export {
  TrainingPrograms as default
};
