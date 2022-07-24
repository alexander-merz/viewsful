import { LitElement } from 'lit'

export type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T
export type LitElementConstructor = Constructor<LitElement>
