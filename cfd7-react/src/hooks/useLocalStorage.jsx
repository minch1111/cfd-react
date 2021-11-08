import { useEffect, useState } from "react"

export const useLocalStorage = (name, defaultValue) => {
    const [state, setState] = useState(localStorage.getItem(name)|| defaultValue)

    useEffect(() => {
        if(typeof state !== 'undefined'){
            localStorage.setItem(name,state)
        }
    },[state])
    
    return[state,setState]
}