import React, { useState } from "react";

const CurCategoryContext = React.createContext({curCategory:'', setCurCategory: (newCurCategory: string) => { console.log(newCurCategory)}});

function CurCategoryContextProvider(props: any) {
    
    const [curCategory, setCurCategory] = useState('');
    
    return (
        <CurCategoryContext.Provider value={{ curCategory, setCurCategory }}>
            {props.children}
        </CurCategoryContext.Provider>
    );
}

export { CurCategoryContextProvider, CurCategoryContext };