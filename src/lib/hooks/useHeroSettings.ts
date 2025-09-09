import { useTSCollection } from "@devwareng/vanilla-ts"
import { Crown, Dog, Guard, Heart } from "../components/Icons"

const useHeroSettings = (DOM: HTMLElement) => {

    enum IDs {
        GUARD = "guard",
        HEART = "heart",
        CROWN = "crown",
        DOG = "dog",
    }

    const sections = [IDs.GUARD, IDs.HEART, IDs.CROWN, IDs.DOG]

    const components = [Guard, Heart, Crown, Dog]

    return useTSCollection(sections, DOM, components)

}

export { useHeroSettings }