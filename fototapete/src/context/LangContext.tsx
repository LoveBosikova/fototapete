import React, { useState } from "react";

import { LANGS, ILang } from "../variables";

const LangContext = React.createContext({lang: LANGS[0], toggleLang: (newLang: ILang) => { console.log(newLang)}});

function LangContextProvider(props: any) {
    
    const [lang, setLang] = useState(LANGS[0]);
    
    function toggleLang(newLang: ILang) {
        setLang(newLang);
    }

    return (
        <LangContext.Provider value={{ lang, toggleLang }}>
            {props.children}
        </LangContext.Provider>
    );
}

export { LangContextProvider, LangContext };