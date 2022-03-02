import React, { createContext, useContext } from "react";

const Context = createContext();

function useCartContext(){
    return useContext(Context);
}

function CartProvider({children}) {
    
  return (
   < Context.Provider value={{}}>
       {children}
   </Context.Provider>
  )
}

export {CartProvider, useCartContext}