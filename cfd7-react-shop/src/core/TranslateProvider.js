import { createContext, useContext, useState } from "react";

const Context = createContext();

export const TranslateProvider=({children,...props})=>{

        const [translate,setTranslate]=useState(props.translate)
        const [language,setLanguage]=useState('en')
        
        const t =(key)=>{
            return translate?.[language]?.[key] || key
        }

        const selectLanguage =(language)=>{
            setLanguage(language)
        }


    return <Context.Provider value={{t, selectLanguage}}>{children}</Context.Provider>
}

export const useTranslate = ()=> useContext(Context)