import { html } from 'lit-html'
import { StyleInfo, styleMap } from 'lit/directives/style-map.js'
import './switch'

export default {
  title: 'Switch',
  component: 'viewsful-switch',
  argTypes: {
    '--switch-size': {
      control: { type: 'text' },
    },
  },
}

export const Customize = (styleInfo: Readonly<StyleInfo>) => {
  return html`<viewsful-switch style=${styleMap(styleInfo)}></viewsful-switch>`
}
