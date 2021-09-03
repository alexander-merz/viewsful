import { css } from 'lit'

const hostCss = css`
  :host {
    --thumb: var(--switch-thumb, hsl(0 0% 100%));
    --thumb-size: var(--switch-thumb-size, var(--font-size-base, 1.25em));
    --thumb-highlight: var(--switch-thumb-highlight, hsl(0 0% 0% / 25%));
    --thumb-position: var(--switch-thumb-position, 0%);
    --thumb-transition-duration: var(--switch-thumb-transition-duration, 0.25s);

    --track-size: var(--switch-track-size, calc(var(--thumb-size) * 2));
    --track-padding: var(--switch-track-padding, calc(var(--spacing-base, 10px) * 0.2));
    --track-inactive: var(--switch-track-inactive, hsl(80 0% 80%));
    --track-active: var(--switch-track-active, var(--theme-color-primary, hsl(240, 100%, 50%)));

    --thumb-color: var(--thumb);
    --thumb-color-highlight: var(--thumb-highlight);
    --track-color-inactive: var(--track-inactive);
    --track-color-active: var(--track-active);

    --highlight-size: 0;
    --isLTR: 1;

    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: fit-content;
  }
`

const labelCss = css`
  label {
    width: inherit;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1ch;
  }
`

const inputCss = css`
  input {
    padding: var(--track-padding);
    background: var(--track-color-inactive);
    inline-size: var(--track-size);
    block-size: var(--thumb-size);
    border-radius: var(--track-size);

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    pointer-events: none;
    touch-action: pan-y;
    border: none;
    outline-offset: 5px;
    box-sizing: content-box;

    flex-shrink: 0;
    display: grid;
    align-items: center;
    grid: [track] 1fr / [track] 1fr;

    transition: background-color 0.25s ease;
  }

  input::before {
    content: '';
    cursor: pointer;
    pointer-events: auto;
    grid-area: track;
    inline-size: var(--thumb-size);
    block-size: var(--thumb-size);
    background: var(--thumb-color);
    box-shadow: 0 0 0 var(--highlight-size) var(--thumb-color-highlight);
    border-radius: inherit;
    transform: translateX(var(--thumb-position));
    transition: transform var(--thumb-transition-duration) ease, box-shadow 0.25s ease;
  }

  input:checked {
    background: var(--track-color-active);
    --thumb-position: calc((var(--track-size) - 100%) * var(--isLTR));
  }

  input:disabled {
    cursor: not-allowed;
    --thumb-color: transparent;
  }

  input:disabled::before {
    cursor: not-allowed;
    box-shadow: inset 0 0 0 2px hsl(0 0% 100% / 50%);
  }
`

export default [hostCss, labelCss, inputCss]
