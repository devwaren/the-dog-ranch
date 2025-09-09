import { useTSComponent, useTSSelect, useTSElements, html } from "@devwareng/vanilla-ts";
import "../entry-server.js";
import { P as Paws } from "./Paws-ChjZ0tVY.js";
import "zod";
import "zustand/vanilla";
import "./useUniqueId-NEFOmYFG.js";
const useLoadingSettings = (DOM) => {
  useTSComponent("paw-loader", DOM, Paws);
  requestAnimationFrame(() => {
    const textEl = useTSSelect("#loading-text", DOM);
    if (textEl) {
      const texts = ["is Trimming…", "is Catching…", "is Fetching…"];
      let index = 0;
      textEl.textContent = texts[index];
      setInterval(() => {
        index = (index + 1) % texts.length;
        textEl.textContent = texts[index];
      }, 200);
    }
  });
};
function Loading(DOM) {
  const ui = useTSElements(
    DOM,
    html`
        <div class="flex flex-col items-center justify-center h-screen w-full bg-white space-y-4">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-900 flex items-center justify-center">
                <span id="paw-loader"></span>
            </div>
            <p class="text-lg font-semibold text-orange-900">
                Dog Coach <span id="loading-text" class="italic"></span>
            </p>
        </div>
        `
  );
  useLoadingSettings(DOM);
  return ui;
}
export {
  Loading as default
};
