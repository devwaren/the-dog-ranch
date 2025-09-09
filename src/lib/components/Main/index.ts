import { useAppSettings } from '@/lib/hooks'
import { html, useTSElements } from '@devwareng/vanilla-ts'

export default function index(DOM: HTMLElement) {

    const ui = useTSElements(
        DOM,
        html`
                <div class="relative hidescroll">
                    <header id="navbar" class="fixed top-0 left-0 bg-white shadow z-[99] w-full animate__animated animate__fadeInDown">
                    </header>
                    <div id="router" class="hidescroll"></div>
                    <footer id="footer"></footer>
                    <div id="chat"></div>
                </div>
                `
    )
    useAppSettings(DOM)

    return ui
}