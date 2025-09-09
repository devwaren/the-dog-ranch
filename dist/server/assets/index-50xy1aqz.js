import { d as Hero, e as HowTo, I as Info, T as TrainingPrograms, S as SignaturePrograms, L as Loading } from "../entry-server.js";
import { useTSCollection, useTSMetaData, useTSElements, html } from "@devwareng/vanilla-ts";
import "zod";
import "zustand/vanilla";
const useHomeSettings = (DOM) => {
  let IDs;
  ((IDs2) => {
    IDs2["HERO"] = "hero";
    IDs2["HOWTO"] = "how-to";
    IDs2["INFO"] = "info";
    IDs2["TRAININGPROGRAMS"] = "training-programs";
    IDs2["SIGNATURE"] = "signature-programs";
  })(IDs || (IDs = {}));
  const sections = [
    "hero",
    "how-to",
    "info",
    "training-programs",
    "signature-programs"
    /* SIGNATURE */
  ];
  const components = [
    Hero,
    HowTo,
    Info,
    TrainingPrograms,
    SignaturePrograms
  ];
  const collection = useTSCollection(
    sections,
    DOM,
    components
  );
  return collection;
};
function Home(DOM) {
  useTSMetaData({
    name: "Home Page",
    description: "This is a Home Page",
    author: "Coach Francis"
  });
  Loading(DOM);
  setTimeout(() => {
    DOM.textContent = "";
    const ui = useTSElements(
      DOM,
      html`
            <div class="hidescroll">
                <div class="relative">
                    <div
                        class="absolute top-0 left-0 bg-[url('/corgi-bg.webp')] bg-cover bg-fixed w-full h-full animate__animated animate__faceIn">
                    </div>
                    <div class="absolute top-0 left-0 bg-white/75 bg-cover w-full h-full"></div>
                    <div class="max-w-screen-2xl mx-auto px-4">
                        <div id="hero"></div>
                    </div>
                </div>
                <div class="max-w-screen-2xl mx-auto px-4 bg-white">
                    <div id="how-to" class="relative px-4"></div>
                    <div id="info" class="relative px-4"></div>
                </div>
                <div id="training-programs" class="relative px-4"></div>
                <div id="signature-programs" class="relative px-4"></div>
            </div>
            `
    );
    useHomeSettings(DOM);
    return ui;
  }, 1200);
}
export {
  Home as default
};
