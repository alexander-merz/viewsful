import { property } from 'lit/decorators.js'
import { Constructor, LitElementConstructor } from '../base'

export type Color = 'primary' | 'secondary'

export interface HasColor {
  color: Color
}

export function hasColor<Base extends LitElementConstructor>(
  base: Base
): Base & Constructor<HasColor> {
  class ColoredElement extends base implements HasColor {
    @property() color: Color = 'primary'
  }

  return ColoredElement
}
