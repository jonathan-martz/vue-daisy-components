import type { AlertVariant } from '../types/AlertVariant'
import type { ClassName } from './ClassName'

export interface DaisyAlertProps extends ClassName {
  variant?: AlertVariant
  title?: string
  message?: string
  dismissible?: boolean
}
