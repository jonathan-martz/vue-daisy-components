import type { Variant } from './variant'

export type AlertVariant = `alert-${Extract<Variant, 'info' | 'success' | 'warning' | 'error'>}`

