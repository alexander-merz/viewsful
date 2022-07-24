import { assert } from '@open-wc/testing'
import { ViewsfulCheckbox } from './checkbox'

suite('viewsful-checkbox', () => {
  test('is defined', () => {
    assert.instanceOf(document.createElement('viewsful-checkbox'), ViewsfulCheckbox)
  })
})
