import { Constructor, LitElementConstructor } from '../base'
import { isCheckable, IsCheckable } from './checkable'
import { hasColor, HasColor } from './color'
import { canDisable, CanDisable } from './disable'
import { hasLabel, HasLabel } from './label'
import { IsToggleable } from './toggleable'

export type Checkbox = Constructor<IsCheckable & IsToggleable & CanDisable & HasLabel & HasColor>

export function isCheckbox<Base extends LitElementConstructor>(base: Base): Base & Checkbox {
  return class extends isCheckable(canDisable(hasLabel(hasColor(base)))) implements IsToggleable {
    toggle(): void {
      this.checked = !this.checked
    }
  }
}
