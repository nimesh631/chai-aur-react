import {createContext,useContext} from 'react'



export const LanguageChanger = createContext({
    language:'eng',
    content:{},
    englang : ()=>{},
    neplang : ()=>{},
})

export const LanguageProvider = LanguageChanger.Provider

export default function useLanguage(){
    return useContext(LanguageChanger)
}