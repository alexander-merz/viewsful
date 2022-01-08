import { css } from 'lit'

const hostCss = css`
  :host {
    --switch-size: 1.5rem;
    --switch-animation-duration: 0.25s;

    --track-color: unset;
    --track-color-active: var(--track-color, darkcyan);
    --track-color-inactive: var(--track-color, lightgray);
    --track-size: calc(var(--switch-size) * 2);

    --thumb-color: unset;
    --thumb-color-active: var(--thumb-color, white);
    --thumb-color-inactive: var(--thumb-color, white);
    --thumb-scale: 1;
    --thumb-shadow: 0 0 0 1px hsl(0 0% 0% / 25%);
    --thumb-size: var(--switch-size);

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
    border-radius: inherit;
    width: inherit;
    height: inherit;

    appearance: none;
    -webkit-appearance: none;
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

    cursor: pointer;
    max-width: 50%;
    transition-property: all;

    background-color: var(--thumb-color-inactive);
    box-shadow: var(--thumb-shadow);
    transform: scale(var(--thumb-scale));
    transition-duration: var(--switch-animation-duration);
    width: var(--thumb-size);
  }
`

const pseudoCss = css`
  @media (hover) {
    [part='switch']:hover > [part='track']:not(:disabled) + [part='thumb'] {
      box-shadow: 0 0 0 calc(var(--thumb-size) * 0.25) hsl(0 0% 0% / 25%);
    }
  }

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
