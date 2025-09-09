import { P as Paws } from "./Paws-ChjZ0tVY.js";
import { mapper, html, useTSElements, useTSComponent } from "@devwareng/vanilla-ts";
import { T as TRAIN_CARD } from "./index-PNxtFWDn.js";
import "../entry-server.js";
import { u as useUniqueId } from "./useUniqueId-NEFOmYFG.js";
import "zod";
import "zustand/vanilla";
function HowTo(DOM) {
  const pawIds = [];
  const cards = mapper(
    TRAIN_CARD.map(({ title, image }, i) => {
      const { dataId } = useUniqueId();
      pawIds.push(dataId);
      const delayClass = `animate__delay-${i + 1}s`;
      return html`
                <div
                    class="relative rounded-md text-white grid items-center px-6 overflow-hidden animate__animated animate__zoomIn ${delayClass}">
                    <div>
                        <div class="absolute top-0 left-0 w-full h-full ${image} bg-cover bg-center"></div>
                        <div class="absolute top-0 left-0 bg-black/60 w-full h-full"></div>
                        <div class="relative">
                            <h2 class="font-semibold text-3xl">${title}</h2>
                            <p class="underline">Read more</p>
                        </div>
                        <div id="${dataId}" class="absolute bottom-2 right-2 w-8 h-8 bg-gray-200 grid place-items-center rounded-xl">
                        </div>
                    </div>
                </div>
            `;
    })
  );
  const ui = useTSElements(
    DOM,
    html`
        <section class="my-16">
            <div class="grid grid-cols-3 min-h-[20em] gap-4">
                ${cards}
            </div>
        </section>
        `
  );
  pawIds.forEach((id) => useTSComponent(`${id}`, DOM, Paws));
  return ui;
}
export {
  HowTo as default
};
