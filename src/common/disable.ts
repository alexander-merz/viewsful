import { property } from 'lit/decorators.js'
import { Constructor, LitElementConstructor } from '../base'

export interface CanDisable {
  disabled: boolean
}

export function Disable<Base extends LitElementConstructor>(
  base: Base
): Base & Constructor<CanDisable> {
  class CanDisableElement extends base implements CanDisable {
    @property({ reflect: true, type: Boolean }) disabled = false
  }

  return CanDisableElement
}
