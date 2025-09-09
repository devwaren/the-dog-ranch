import { html } from "@devwareng/vanilla-ts"
import App from "./App"

export async function render(_url: string) {

  const app = App();

  return {
    head: `<title>Dog Ranch</title>`,
    html: html`
      <div id="app">${app}</div>
    `,
  }
}
