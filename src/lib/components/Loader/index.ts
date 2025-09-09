import { useLoadingState } from "@/lib/hooks"

type LoaderType = (el: HTMLElement) => any

export default function Loader(
    LoaderComponent: LoaderType,
    DOM: HTMLElement,
    ComponentFunc: LoaderType
) {
    return useLoadingState({
        LoadingElement: LoaderComponent,
        DOM,
        Element: (mount: HTMLElement) => ComponentFunc(mount), // ✅ explicit passthrough
        delay: 1200,
    })
}
