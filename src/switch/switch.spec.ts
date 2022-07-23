import { assert } from '@open-wc/testing'
import { ViewsfulSwitch } from './switch.element'

suite('viewsful-switch', () => {
  test('is defined', () => {
    assert.instanceOf(document.createElement('viewsful-switch'), ViewsfulSwitch)
  })
})
