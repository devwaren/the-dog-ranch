import { useTSSSRHydration } from '@devwareng/vanilla-ts'
import "@/lib/css/index.css"
import "boxicons/css/boxicons.css"
import "animate.css"
import { Loader, Loading, Main } from './lib/components'

export default function App(DOM?: HTMLElement) {
    const { isDOM } = useTSSSRHydration(DOM!)
    if (!isDOM) return null

    return Loader(Loading, isDOM, Main)

}
