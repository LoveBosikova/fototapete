import React from "react";

// const SavedProdocts = React.createContext({savedProducts: [], setSavedProducts: () => {}});

export const SavedProducts = React.createContext({
    savedProducts: [],
    setSavedProducts: () => {},
});

// export type IProduct = { 
//     id: number;
//     name: string;
//     metrics: string;
//     img: string;
// }

// function LangContextProvider(props: any) {
    
//     const [savedProducts, setSavedProducts] = useState([]);
    
//     function handleSavedProducts(product: IProduct) {
//         if (savedProducts.find((prod : IProduct) => prod.id === product.id)){
//             setSavedProducts(savedProducts.filter((p) => p !== product.id))
//         } else if (!savedProducts.find((prod : IProduct) => prod.id === product.id)) {
//             setSavedProducts([...savedProducts, product])
//         }
//     }

//     return (
//         <SavedProdocts.Provider value={{ lang, toggleLang }}>
//             {props.children}
//         </SavedProdocts.Provider>
//     );
// }

// export { LangContextProvider, LangContext };