import type { AlertVariant } from './alert-variant'

export interface AlertProps {
  variant?: AlertVariant
  title?: string
  message?: string
  dismissible?: boolean
}

