import { assert } from '@open-wc/testing'
import { LitElement } from 'lit'
import { Checkbox } from './checkbox'

const CheckboxSpec = Checkbox(LitElement)

suite('Checkbox', () => {
  customElements.define('checkbox-spec', CheckboxSpec)

  test('is defined', () => {
    const checkbox = new CheckboxSpec()
    assert.isDefined(checkbox)
    assert.property(checkbox, 'checked')
    assert.property(checkbox, 'toggle')
  })

  test('toggles checked state', () => {
    const checkbox = new CheckboxSpec()
    assert.isFalse(checkbox.checked)
    checkbox.toggle()
    assert.isTrue(checkbox.checked)
  })
})
