interface ILoader{
  value: Boolean
}

const defaultValue: ILoader = {
  value: true
} 

export const useLoader = defineStore(
  'loader',{
  state: () => defaultValue,
  getters: {
    isLoading: state => state.value
  },
})


