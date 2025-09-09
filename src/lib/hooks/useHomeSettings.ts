import { useTSCollection } from "@devwareng/vanilla-ts"
import { Hero, HowTo, Info, SignaturePrograms, TrainingPrograms } from "@/pages/Home/Sections"

const useHomeSettings = (DOM: HTMLElement) => {

    enum IDs {
        HERO = "hero",
        HOWTO = "how-to",
        INFO = "info",
        TRAININGPROGRAMS = "training-programs",
        SIGNATURE = "signature-programs"
    }

    const sections = [IDs.HERO, IDs.HOWTO, IDs.INFO, IDs.TRAININGPROGRAMS, IDs.SIGNATURE]

    const components = [
        Hero, HowTo, Info, TrainingPrograms, SignaturePrograms
    ]

    const collection = useTSCollection(
        sections,
        DOM,
        components,
    )


    return collection

}

export { useHomeSettings }