import { ClassValue, clsx } from 'clsx'

export function cn(...props: ClassValue[]) {
  return clsx(props)
}
