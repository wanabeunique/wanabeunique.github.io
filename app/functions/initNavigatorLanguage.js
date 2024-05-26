export function initNavigatorLanguage(languages){
    const preferLanguage = navigator.language 

    for (let language of languages){
      if (preferLanguage.includes(language)){
        return language
      }     
    }
    return 'en'
}
