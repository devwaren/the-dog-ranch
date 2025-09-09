import { useTSLazy } from "@devwareng/vanilla-ts";

const Hero = useTSLazy(() => import("./Hero"))
const HowTo = useTSLazy(() => import("./HowTo"))
const Info = useTSLazy(() => import("./Info"))
const TrainingPrograms = useTSLazy(() => import("./TrainingProgam"))
const SignaturePrograms = useTSLazy(() => import("./SignaturePrograms"))

export { Hero, HowTo, Info, TrainingPrograms, SignaturePrograms }