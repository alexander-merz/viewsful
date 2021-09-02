import { html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ViewsfulCheckbox } from '../checkbox/checkbox.element'
import switchStyles from './switch.styles'

@customElement('viewsful-switch')
export class ViewsfulSwitch extends ViewsfulCheckbox {
  static styles = switchStyles

  render(): TemplateResult {
    return html`<label>
      <input
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        role="switch"
        type="checkbox"
        @change=${this.toggle}
      />
      <slot></slot>
    </label>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'viewsful-switch': ViewsfulSwitch
  }
}
