import MembershipHero from "@/pages/Membership/Sections"
import { useTSCollection } from "@devwareng/vanilla-ts"

const useMembershipSettings = (DOM: HTMLElement) => {

    enum IDs {
        MEMBERHERO = "member-hero"
    }

    const sections = [IDs.MEMBERHERO]

    const components = [MembershipHero]

    return useTSCollection(sections, DOM, components)

}

export { useMembershipSettings }