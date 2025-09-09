import { useTSParams, TSRouter, useTSPurifier, useTSCollection, useTSSelect, useAnchor, useTSElements, html } from "@devwareng/vanilla-ts";
import { H as Home, P as Programs, M as Membership, N as NotFound, a as Navbar, F as Footer, C as ChatBot } from "../entry-server.js";
import "zod";
import "zustand/vanilla";
const Router = (DOM, websiteName) => {
  useTSParams.getState();
  const routes = new TSRouter(
    [
      {
        path: "/",
        element: () => Home(DOM, websiteName)
      },
      {
        path: "/programs",
        element: () => Programs(DOM)
      },
      {
        path: "/membership",
        element: () => Membership(DOM)
      },
      {
        path: "*",
        element: () => NotFound(DOM, websiteName)
      }
    ],
    [String(useTSPurifier(window.location.search)), "id", "sort", "name", "page", "pageSize"]
  );
  return routes.navigate("");
};
const useAppSettings = (DOM) => {
  let IDs;
  ((IDs2) => {
    IDs2["NAVBAR"] = "navbar";
    IDs2["ROUTER"] = "router";
    IDs2["FOOTER"] = "footer";
    IDs2["CHATBOT"] = "chat";
  })(IDs || (IDs = {}));
  const sections = [
    "navbar",
    "router",
    "footer",
    "chat"
    /* CHATBOT */
  ];
  const components = [
    Navbar,
    Router,
    Footer,
    ChatBot
  ];
  useTSCollection(
    sections,
    DOM,
    components
  );
  window.addEventListener("keydown", (ev) => {
    const kev = ev;
    if (kev.key === "Enter" && !kev.shiftKey) {
      kev.preventDefault();
    }
  });
  const a = useTSSelect("a");
  return useAnchor(a);
};
function index(DOM) {
  const ui = useTSElements(
    DOM,
    html`
                <div class="relative hidescroll">
                    <header id="navbar" class="fixed top-0 left-0 bg-white shadow z-[99] w-full animate__animated animate__fadeInDown">
                    </header>
                    <div id="router" class="hidescroll"></div>
                    <footer id="footer"></footer>
                    <div id="chat"></div>
                </div>
                `
  );
  useAppSettings(DOM);
  return ui;
}
export {
  index as default
};
