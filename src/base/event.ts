const DefaultEventInit: EventInit = Object.freeze({
  bubbles: true,
  cancelable: true,
  composed: true,
})

export const BrowserEvent = Object.freeze({
  get change() {
    return new Event('change', DefaultEventInit)
  },
})
