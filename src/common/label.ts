import { property } from 'lit/decorators.js'
import { Constructor, LitElementConstructor } from '../base'

export interface HasLabel {
  label: string
}

export function hasLabel<Base extends LitElementConstructor>(
  base: Base
): Base & Constructor<HasLabel> {
  class LabeledElement extends base implements HasLabel {
    @property() label = ''
  }

  return LabeledElement
}
