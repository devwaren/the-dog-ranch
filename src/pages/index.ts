import { useTSLazy } from "@devwareng/vanilla-ts";

const Home = useTSLazy(() => import("./Home"));
const NotFound = useTSLazy(() => import("./404"));
const Programs = useTSLazy(() => import("./Programs"))
const Membership = useTSLazy(() => import("./Membership"))
const Params = useTSLazy(() => import("./Params"))

export { Home, NotFound, Programs, Membership, Params };