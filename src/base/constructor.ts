import { LitElement } from 'lit'

export type Constructor<T = Record<string, unknown>> = new (...args: any[]) => T
export type AbstractConstructor<T = Record<string, unknown>> = abstract new (...args: any[]) => T

export type AnyConstructor = Constructor<Record<string, unknown>>
export type AnyAbstractConstructor = AbstractConstructor<Record<string, unknown>>

export type LitElementConstructor = Constructor<LitElement>
