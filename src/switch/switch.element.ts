import { html, TemplateResult } from 'lit'
import { customElement } from 'lit/decorators.js'

import { ViewsfulCheckbox } from '../checkbox/checkbox.element'
import switchStyles from './switch.styles'

@customElement('viewsful-switch')
export class ViewsfulSwitch extends ViewsfulCheckbox {
  static readonly styles = switchStyles

  render(): TemplateResult {
    return html`<label part="switch">
      <input
        aria-checked=${this.checked}
        aria-disabled=${this.disabled}
        ?checked=${this.checked}
        ?disabled=${this.disabled}
        part="track"
        role="switch"
        type="checkbox"
        @change=${this.toggle}
      />
      <div part="thumb"></div>
    </label>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'viewsful-switch': ViewsfulSwitch
  }
}