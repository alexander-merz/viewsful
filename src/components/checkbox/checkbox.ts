import { LitElement, html, TemplateResult, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'

import { BrowserEvent } from '../../base'
import { Checkbox } from '../../common'

import checkboxStyles from './checkbox.scss?inline'

@customElement('viewsful-checkbox')
export class ViewsfulCheckbox extends Checkbox(LitElement) {
  static readonly styles = unsafeCSS(checkboxStyles)

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

  override toggle(): void {
    super.toggle()
    this.dispatchEvent(BrowserEvent.change)
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'viewsful-checkbox': ViewsfulCheckbox
  }
}
