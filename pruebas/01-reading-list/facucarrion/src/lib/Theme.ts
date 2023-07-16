import { writable } from 'svelte/store'
import type { Theme } from '../types/theme.types'

export const theme = writable<Theme>('dark')

export const toggleTheme = (event: any) => {
  if (event.target.checked) theme.set('dark')
  else theme.set('light')
}
