import { useTSLazy, useTSSSRHydration, html } from "@devwareng/vanilla-ts";
import z from "zod";
import { createStore } from "zustand/vanilla";
const inputSchema = z.string().min(2, { message: "Message cannot be empty" }).max(1e3, { message: "Message is too long (max 1000 chars)" });
const safeHtmlRegex = /^(?:[^<>]|<button(?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:="[^"]*")?)*>(.*?)<\/button>)*$/;
const messageSchema = z.object({
  id: z.string(),
  role: z.enum(["user", "bot"]),
  text: z.string().min(1).max(1e3).regex(safeHtmlRegex, {
    message: "Only <button> elements are allowed in messages"
  }),
  ts: z.number()
});
const Home = useTSLazy(() => import("./assets/index-50xy1aqz.js"));
const NotFound = useTSLazy(() => import("./assets/index-BSktkN0I.js"));
const Programs = useTSLazy(() => import("./assets/index-Crw_JCj6.js"));
const Membership = useTSLazy(() => import("./assets/index-gTWhu3U8.js"));
const Hero = useTSLazy(() => import("./assets/index-Di8_7cy9.js"));
const HowTo = useTSLazy(() => import("./assets/index-CxNe3m6C.js"));
const Info = useTSLazy(() => import("./assets/index-B7N45GK6.js"));
const TrainingPrograms = useTSLazy(() => import("./assets/index-D__y7noc.js"));
const SignaturePrograms = useTSLazy(() => import("./assets/index-tgd2l39-.js"));
const useLoadingState = ({ LoadingElement, DOM, Element, delay = 1200 }) => {
  LoadingElement(DOM);
  setTimeout(() => {
    DOM.textContent = "";
    return Element(DOM);
  }, delay);
};
const time = (/* @__PURE__ */ new Date()).toLocaleString();
const vectors = {
  price: "Our membership packages come with flexible pricing. Click below to view details and apply.",
  address: "📍 The Dog Ranch Training Ground is located at 141 Narra Street, Barangay Dagatan, Lipa City.",
  contact: "📞 You can reach us at:\n\nTrainer: Dog Coach Francis\nPhone: 0917-839-3647\nEmail: itrain@dogcoachfrancis.com",
  hi: "Hello there! 👋 How can I assist you today?",
  hello: "Hi, welcome to The Dog Ranch Training Sessions! 🐶 How can I help you?",
  book: "Great choice! 🐾 You can book your appointment by clicking the Apply Membership button below.",
  membership: "We’d love to have you join our training family! 🐕 Click Apply Membership to get started.",
  register: "We’d love to have you join our training family! 🐕 Click Apply Membership to get started.",
  appointment: "Ready to secure your slot? 🐾 Just click Apply Membership to book your appointment.",
  program: "That's great! click Apply for a membership now!.",
  schedule: "📅 Training Hours:\n\nMon–Fri: 9:00 AM – 4:00 PM\nSat: 9:00 AM – 4:00 PM\nSun: Member check-ins only",
  time: `🕒 Current date and time: ${time}`
};
const uid = (n = 6) => Math.random().toString(36).slice(2, 2 + n);
const chatStore = createStore((set) => ({
  isOpen: false,
  toggleChat: () => set((s) => ({ isOpen: !s.isOpen }))
}));
const chatStoreMsg = createStore((set) => ({
  messages: [
    {
      id: uid(),
      role: "bot",
      text: "Hi! How can I help you today?",
      ts: Date.now() - 6e4
    }
  ],
  isTyping: false,
  errorMsg: null,
  pushMessage: (role, text) => set((s) => ({
    messages: [...s.messages, { id: uid(), role, text, ts: Date.now() }]
  })),
  setError: (msg) => set({ errorMsg: msg }),
  setTyping: (v) => set({ isTyping: v })
}));
function Loader(LoaderComponent, DOM, ComponentFunc) {
  return useLoadingState({
    LoadingElement: LoaderComponent,
    DOM,
    Element: (mount) => ComponentFunc(mount),
    // ✅ explicit passthrough
    delay: 1200
  });
}
const Navbar = useTSLazy(() => import("./assets/index-DolTJYjl.js"));
const Footer = useTSLazy(() => import("./assets/index-C8Y8I_Mb.js"));
const Loading = useTSLazy(() => import("./assets/index-Dt6L7Bq5.js"));
const Main = useTSLazy(() => import("./assets/index-DcpvXBTW.js"));
const ChatBot = useTSLazy(() => import("./assets/index-DakM_pfA.js"));
function App(DOM) {
  const { isDOM } = useTSSSRHydration(DOM);
  if (!isDOM) return null;
  return Loader(Loading, isDOM, Main);
}
async function render(_url) {
  const app = App();
  return {
    head: `<title>Dog Ranch</title>`,
    html: html`
      <div id="app">${app}</div>
    `
  };
}
export {
  ChatBot as C,
  Footer as F,
  Home as H,
  Info as I,
  Loading as L,
  Membership as M,
  NotFound as N,
  Programs as P,
  SignaturePrograms as S,
  TrainingPrograms as T,
  Navbar as a,
  chatStore as b,
  chatStoreMsg as c,
  Hero as d,
  HowTo as e,
  inputSchema as i,
  messageSchema as m,
  render,
  useLoadingState as u,
  vectors as v
};
