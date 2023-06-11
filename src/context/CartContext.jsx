import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [itemsEnCarrito, setItemsEnCarrito] = useState(0);

    const [itemsSeleccionados, setItemsSeleccionados] =  useState(1);

    const handleCarrito = () => {
        setItemsEnCarrito ( itemsEnCarrito + itemsSeleccionados);
    }
    
    
    
    return (
        <div>
            <CartContext.Provider value={{handleCarrito, itemsEnCarrito, itemsSeleccionados, setItemsSeleccionados}}>
                {children}
            </CartContext.Provider>

        </div>
    )
}

export default CartContextProvider;