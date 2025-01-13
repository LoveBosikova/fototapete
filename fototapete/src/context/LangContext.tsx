import React, { useState } from "react";

const LangContext = React.createContext({lang: 'en', toggleLang: (newLang: string) => {}});

function LangContextProvider(props: any) {
    const [lang, setLang] = useState('en');
    
    function toggleLang(newLang: string) {
        setLang(newLang);
    }
    
    
    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {props.children}
        </LangContext.Provider>
    );
}

export { LangContextProvider, LangContext };