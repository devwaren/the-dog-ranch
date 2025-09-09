import { Building, Dumbell, Leaf, Paws } from "@/lib/components/Icons"

const PROGRAM_CARDS = [
    {
        title: "Boutique Boarding",
        subTitle: "Overnight",
        desc: "Private suites, climate-controlled comfort, and individualized care rhythms. Night cameras and 24/7 supervision included.",
        iconId: "paw-pcard",
        component: Paws,
    },
    {
        title: "Elite Training",
        subTitle: "Obedience",
        desc: "Force-free foundations, impulse control, recall reliability, and real-world manners led by certified professionals.",
        iconId: "building-pcard",
        component: Building,
    },
    {
        title: "Day Club",
        subTitle: "Daytime",
        desc: "Small-group social time, structured rest, and customized enrichment to keep minds sharp and bodies happy.",
        iconId: "dumbell-pcard",
        component: Dumbell,
    },
    {
        title: "Enrichment Lab",
        subTitle: "Mind & Body",
        desc: "Scent games, confidence courses, and problem-solving stations designed to engage and fulfill.",
        iconId: "leaf-pcard",
        component: Leaf,
    },
]

export { PROGRAM_CARDS }