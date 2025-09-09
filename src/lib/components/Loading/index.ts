// ✅ Loading.ts
import { html, useTSElements } from '@devwareng/vanilla-ts'
import { useLoadingSettings } from '@/lib/hooks';

export default function Loading(DOM: HTMLElement) {
    const ui = useTSElements(
        DOM,
        html`
        <div class="flex flex-col items-center justify-center h-screen w-full bg-white space-y-4">
            <div class="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-900 flex items-center justify-center">
                <span id="paw-loader"></span>
            </div>
            <p class="text-lg font-semibold text-orange-900">
                Dog Coach <span id="loading-text" class="italic"></span>
            </p>
        </div>
        `
    );

    useLoadingSettings(DOM)

    return ui
}
