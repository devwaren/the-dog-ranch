
type LoadingStateProps = {
    LoadingElement: (element: HTMLElement) => any
    DOM: HTMLElement,
    Element: (element: HTMLElement) => void,
    delay: number
}

const useLoadingState = ({ LoadingElement, DOM, Element, delay = 1200 }: LoadingStateProps) => {
    // show loader
    LoadingElement(DOM)

    setTimeout(() => {
        // clear loader
        DOM.textContent = ""

        // render target UI
        return Element(DOM)
    }, delay)
}

export { useLoadingState }
