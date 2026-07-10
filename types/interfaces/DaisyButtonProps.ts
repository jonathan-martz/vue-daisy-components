import type { ClassName } from './ClassName'
import type { ButtonResponsiveSizeMap } from '../types/ButtonResponsiveSizeMap'
import type { ButtonSize } from '../types/ButtonSize'
import type { ButtonVariant } from '../types/ButtonVariant'

export interface DaisyButtonProps extends ClassName {
  variant?: ButtonVariant
  size?: ButtonSize
  responsiveSize?: ButtonResponsiveSizeMap
  outline?: boolean
  disabled?: boolean
  loading?: boolean
  block?: boolean
  circle?: boolean
  square?: boolean
  active?: boolean
  type?: 'button' | 'submit' | 'reset'
}
