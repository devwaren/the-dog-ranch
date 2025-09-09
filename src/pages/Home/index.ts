import { Loading } from '@/lib/components';
import { useHomeSettings } from '@/lib/hooks';
import { html, useTSElements, useTSMetaData } from '@devwareng/vanilla-ts'

export default function Home(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Home Page',
        description: 'This is a Home Page',
        author: 'Coach Francis'
    });

    Loading(DOM)


    setTimeout(() => {
        // Clear loader
        DOM.textContent = ""

        // Mount main UI
        const ui = useTSElements(
            DOM,
            html`
            <div class="hidescroll">
                <div class="relative">
                    <div
                        class="absolute top-0 left-0 bg-[url('/corgi-bg.webp')] bg-cover bg-fixed w-full h-full animate__animated animate__faceIn">
                    </div>
                    <div class="absolute top-0 left-0 bg-white/75 bg-cover w-full h-full"></div>
                    <div class="max-w-screen-2xl mx-auto px-4">
                        <div id="hero"></div>
                    </div>
                </div>
                <div class="max-w-screen-2xl mx-auto px-4 bg-white">
                    <div id="how-to" class="relative px-4"></div>
                    <div id="info" class="relative px-4"></div>
                </div>
                <div id="training-programs" class="relative px-4"></div>
                <div id="signature-programs" class="relative px-4"></div>
            </div>
            `
        );

        // Run home settings after content is ready
        useHomeSettings(DOM)

        return ui
    }, 1200)
}
