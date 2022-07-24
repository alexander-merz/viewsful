import { Constructor, LitElementConstructor } from '../base'
import { Checkable, IsCheckable } from './checkable'
import { Colored, HasColor } from './color'
import { Disable, CanDisable } from './disable'
import { IsToggleable } from './toggleable'

export type CheckboxConstructor = Constructor<CanDisable & HasColor & IsCheckable & IsToggleable>

export function Checkbox<Base extends LitElementConstructor>(
  base: Base
): Base & CheckboxConstructor {
  return class extends Checkable(Disable(Colored(base))) implements IsToggleable {
    toggle(): void {
      this.checked = !this.checked
    }
  }
}
