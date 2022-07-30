import { html } from 'lit-html'
import { styleMap } from 'lit/directives/style-map.js'
import './switch'

export default {
  title: 'Switch',
  component: 'viewsful-switch',
}

export const Default = () => html`<viewsful-switch></viewsful-switch>`
export const Large = () => {
  const styles = {
    '--switch-size': '2rem',
  }

  return html`<viewsful-switch style=${styleMap(styles)}></viewsful-switch>`
}
