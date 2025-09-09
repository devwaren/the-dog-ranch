import { html, useTSComponent, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'
import Pcards from './Sections';

export default function Programs(DOM: HTMLElement) {

    useTSMetaData({
        name: 'Signature Programs',
        description: 'List of Signature Program Offers',
        author: 'Dog Coach Francis'
    });

    const ui = useTSElements(
        DOM,
        html`
    <div class="relative min-h-screen flex flex-col items-center w-full py-32">
        <!-- Background image -->
        <div class="absolute inset-0 bg-[url('/training-ground.webp')] bg-cover bg-top"></div>
    
        <!-- Gradient overlays -->
        <div class="absolute inset-0 bg-gradient-to-l from-white via-white/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-r from-white via-white/40 to-transparent"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent"></div>
    
        <!-- Content -->
        <div class="relative max-w-screen-2xl mx-auto px-6">
            <!-- Dog image stays on top of cards -->
            <img src="/german.webp" alt="german dog" width="400"
                class="absolute -top-[8%] right-[2%] z-30 animate__animated animate__zoomIn animate__delay-5s">
    
            <div class="relative z-20">
                <h1 class="text-7xl font-extrabold py-8 text-amber-600 animate__animated animate__fadeInDown">
                    Signature Programs
                </h1>
                <p class="max-w-2xl text-gray-700 animate__animated animate__fadeInUp animate__delay-2s">
                    Tailored experiences crafted by certified trainers and behavior specialists.
                    We align daily structure and enrichment to your dog’s unique needs.
                </p>
    
                <!-- Cards below dog -->
                <div id="cards" class="relative mt-12"></div>
    
                <a href="/membership"
                    class="bg-amber-600 px-4 py-2 text-white rounded-xl animate__animated animate__pulse animate__infinite mt-8 inline-block">
                    Become a Member
                </a>
            </div>
        </div>
    </div>
        `
    );

    useTSComponent("cards", DOM, Pcards)
    return ui
}
