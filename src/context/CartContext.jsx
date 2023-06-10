import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const cantidadCarrito = 100
    
    return (
        <div>
            <CartContext.Provider value={cantidadCarrito}>
                {children}
            </CartContext.Provider>

        </div>
    )
}

export default CartContextProvider;