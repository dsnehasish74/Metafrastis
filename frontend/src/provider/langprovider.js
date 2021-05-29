import React, { useEffect, useState,useContext } from 'react'
const LangContext=React.createContext();
const LangUpdateContext=React.createContext();
export function useLang()
{
    return useContext(LangContext);
}
export function useLangUpdate()
{
    return useContext(LangUpdateContext);
}
export function LangProvider({children})
{
    const [lang,setlang]=useState("");
    const updateLang=(e)=>
    {
        setlang(e)
        console.log(e);
    }
    return(
        <LangContext.Provider value={lang}>
            <LangUpdateContext.Provider value={updateLang}>
                {children}
            </LangUpdateContext.Provider>
        </LangContext.Provider>
    )
}