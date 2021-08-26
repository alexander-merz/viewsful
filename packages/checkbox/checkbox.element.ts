import { LitElement, html } from 'lit'
import { customElement } from 'lit/decorators.js'

import { BrowserEvent } from '../base'
import { isCheckbox } from '../common'

import checkboxStyles from './checkbox.styles'

@customElement('viewsful-checkbox')
export class ViewsfulCheckbox extends isCheckbox(LitElement) {
  static styles = checkboxStyles

  render() {
    return html`<label>
      <input type="checkbox" checked=${this.checked} @change=${this.toggle} />
      <span>${this.checked}</span>
    </label>`
  }

  toggle(): void {
    super.toggle()
    this.dispatchEvent(BrowserEvent.change)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'viewsful-checkbox': ViewsfulCheckbox
  }
}
