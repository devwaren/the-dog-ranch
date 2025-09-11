import { html, useTSElements, useTSMetaData, useTSParams } from '@devwareng/vanilla-ts'

export default function index(DOM: HTMLElement) {
    useTSMetaData({
        name: 'Parameter Example',
        description: 'This page has parameter strings',
        author: ''
    });

    const data = useTSParams.getState()

    const ui = useTSElements(
        DOM,
        html`
        <div>
            <h1>${data}</h1>
        </div>
`
    );
    return ui
}