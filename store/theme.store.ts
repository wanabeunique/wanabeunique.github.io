type ITheme = 'light' | 'dark' | null

const defaultValue: {value: ITheme} = {
  value: null
}

export const useThemeStore = defineStore('theme', {
  state: () => defaultValue,
  actions: {
    changeTheme(theme: ITheme) {
      this.value = theme 
    },
    toggleTheme(){
      this.value = this.value == 'dark' ? 'light' : 'dark'  
      console.log(this.value)
    }
  },
  persist: {
    storage: persistedState.localStorage
  }

})
