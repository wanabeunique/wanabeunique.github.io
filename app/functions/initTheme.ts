import { useThemeStore } from "~/store/theme.store"

export function initTheme(){
  const themeStore = useThemeStore()

  if (!themeStore.value){
    const preferTheme = window.matchMedia('(prefers-color-scheme: dark)')
    if (preferTheme.matches){
      themeStore.changeTheme('dark')
    }
  }
}





