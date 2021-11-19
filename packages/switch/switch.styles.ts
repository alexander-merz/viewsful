import { css } from 'lit'

const hostCss = css`
  :host {
    --switch-size: 1.25rem;
    --track-size: calc(var(--switch-size) * 2);
    --thumb-size: var(--switch-size);
    --thumb-scale: 1;
    --thumb-color-active: white;
    --thumb-color-inactive: white;
    --track-color-active: darkcyan;
    --track-color-inactive: lightgray;
    --switch-animation-duration: 0.35s;

    display: inline-block;
    cursor: pointer;
    user-select: none;
    -webkit-tap-highlight-color: transparent;
    width: fit-content;
    vertical-align: middle;
  }
`

const switchCss = css`
  [part='switch'] {
    position: relative;
    display: inline-block;
    text-align: left;

    width: var(--track-size);
    height: var(--thumb-size);
    border-radius: var(--thumb-size);
  }
`

const trackCss = css`
  [part='track'] {
    appearance: none;
    -webkit-appearance: none;

    border-radius: inherit;
    width: inherit;
    height: inherit;

    border: 0;
    cursor: pointer;
    margin: 0;
    outline-offset: 5px;
    position: absolute;
    transition-property: all;
    width: 100%;

    background-color: var(--track-color-inactive);
    transition-duration: var(--switch-animation-duration);
  }
`

const thumbCss = css`
  [part='thumb'] {
    border-radius: inherit;
    height: inherit;
    position: inherit;

    box-shadow: 0 0 0 1px;
    cursor: pointer;
    max-width: 50%;
    transition-property: all;

    width: var(--thumb-size);
    background-color: var(--thumb-color-inactive);
    transform: scale(var(--thumb-scale));
    transition-duration: var(--switch-animation-duration);
  }
`

const pseudoCss = css`
  [part='track']:checked {
    background-color: var(--track-color-active);
  }

  [part='track']:checked + [part='thumb'] {
    background-color: var(--thumb-color-active);
    transform: translateX(calc(var(--track-size) - var(--thumb-size))) scale(var(--thumb-scale));
  }

  [part='track']:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  [part='track']:disabled + [part='thumb'] {
    cursor: not-allowed;
    opacity: 0.25;
  }
`

export default [hostCss, switchCss, trackCss, thumbCss, pseudoCss]
