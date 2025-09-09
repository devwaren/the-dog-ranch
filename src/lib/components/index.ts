import { useTSLazy } from "@devwareng/vanilla-ts";
import Loader from './Loader';

const Navbar = useTSLazy(() => import("./Navbar"));
const Footer = useTSLazy(() => import("./Footer"));
const Loading = useTSLazy(() => import("./Loading"))
const Main = useTSLazy(() => import("./Main"))
const ChatBot = useTSLazy(() => import("./Chat"))

export { Navbar, Footer, Loading, Main, Loader, ChatBot };