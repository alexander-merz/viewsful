import { property } from 'lit/decorators.js'
import { Constructor, LitElementConstructor } from '../base'

export interface IsCheckable {
  checked: boolean
}

export function isCheckable<Base extends LitElementConstructor>(
  base: Base
): Base & Constructor<IsCheckable> {
  class CheckableElement extends base implements IsCheckable {
    @property({ reflect: true, type: Boolean }) checked = false
  }

  return CheckableElement
}
