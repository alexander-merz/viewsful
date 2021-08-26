import { property } from 'lit/decorators.js'

import { Constructor, LitElementConstructor } from '../base'

import { IsCheckable } from './checkable'
import { IsToggleable } from './toggleable'

export function isCheckbox<Base extends LitElementConstructor>(
  base: Base
): Base & Constructor<IsCheckable & IsToggleable> {
  class Checkbox extends base implements IsCheckable, IsToggleable {
    @property({ type: Boolean, reflect: true }) checked = false

    toggle(): void {
      this.checked = !this.checked
    }
  }

  return Checkbox
}
