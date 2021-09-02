import { LitElement, html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

import { BrowserEvent } from '../base'
import { isCheckbox } from '../common'
import checkboxStyles from './checkbox.styles'

@customElement('viewsful-checkbox')
export class ViewsfulCheckbox extends isCheckbox(LitElement) {
  static styles = checkboxStyles

  render(): TemplateResult {
    return html`<label>
      <input
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        role="checkbox"
        type="checkbox"
        @change=${this.toggle}
      />
      <slot></slot>
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
