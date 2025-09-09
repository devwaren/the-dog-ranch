import { ICONS } from "@/lib/constants";
import { useHeroSettings, useUniqueId } from "@/lib/hooks";
import { html, mapper, useTSElements } from "@devwareng/vanilla-ts";

export default function Hero(DOM: HTMLElement) {

    const icons = mapper(ICONS.map(({ id, title }) => {
        const { dataId } = useUniqueId()
        return html`
            <div data-id="${dataId}" class="bg-gray-200/75 px-4 py-3 rounded-md flex items-center gap-2 border border-gray-300">
                <div id="${id}" class="bg-black/10 p-2 rounded-xl"></div>
                <p>${title}</p>
            </div>
        `
    }))

    const ui = useTSElements(
        DOM,
        html`
        <section class="min-h-screen grid lg:grid-cols-2 py-8 px-4 gap-16 relative">
            <div class="flex flex-col gap-4 h-full justify-center animate__animated animate__fadeInUp">
                <p class="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-300 px-4 py-1 rounded-md w-fit text-white">
                    Membership Only
                </p>
                <h2 class="text-7xl font-extrabold">
                    Exclusive Canine Club for Discerning Dog Parents
                </h2>
                <p class="my-8 text-gray-700 text-lg">
                    Boutique boarding, precision training, and daily enrichment—crafted
                    exclusively for members. Every detail designed for your dog’s
                    wellbeing and joy.
                </p>
                <div class="grid grid-cols-3 gap-4 h-[40px]">
                    <button
                        class="flex items-center justify-between px-4 py-1 bg-amber-600 text-white rounded-md hover:bg-amber-700 transition">
                        <span>Request Invitation</span>
                        <span class="bx bx-chevron-right"></span>
                    </button>
                    <button
                        class="flex items-center px-4 py-1 border border-gray-300 bg-gray-200/75 rounded-md hover:bg-gray-300 transition">
                        Book a Tour
                    </button>
                    <button
                        class="flex items-center px-4 py-1 border border-gray-300 bg-gray-200/75 rounded-md hover:bg-gray-300 transition">
                        Download Brochure
                    </button>
                </div>
                <div class="grid grid-cols-2 gap-4">
                    ${icons}
                </div>
            </div>
        
            <div class="grid animate__animated animate__zoomIn relative overflow-hidden min-h-[40em]">
                <div class="bg-[url('/corgi.png')] bg-center bg-cover w-full h-full"></div>
                <div class="absolute bottom-[20px] right-0">
                    <div>
                        <h2>Trusted by. Dog Owners</h2>
                        <p class="text-6xl font-semibold">16k +</p>
                    </div>
                </div>
        
                <!-- Hug 1 (fades in first) -->
                <div
                    class="w-40 h-40 overflow-hidden absolute top-[20%] right-[20px] rounded-xl shadow animate__animated animate__zoomIn animate__delay-1s">
                    <img src="/hug1.webp" alt="hug" width="400" height="400" class="object-cover">
                </div>
        
                <!-- Hug 2 (fades in after hug1) -->
                <div
                    class="w-40 h-40 overflow-hidden absolute bottom-[20%] left-[40px] rounded-xl shadow animate__animated animate__zoomIn animate__delay-2s">
                    <img src="/hug2.webp" alt="hug" width="400" height="600" class="object-cover w-full h-full">
                </div>
            </div>
        </section>
    `
    );

    useHeroSettings(DOM)

    return ui;
}
