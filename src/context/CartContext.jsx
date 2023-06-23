import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [itemsEnCarrito, setItemsEnCarrito] = useState(0);

    const [itemsSeleccionados, setItemsSeleccionados] =  useState(1);

    const handleCarrito = () => {
        setItemsEnCarrito ( itemsEnCarrito + itemsSeleccionados);
    };

    //

    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {

    };

    const removeItem = (id) => {
        const items = cart.filter(item => item.id !==  id)
        setCart([...items])

    };

    const clear = () =>  {
        setCart([]);

    }

    const isInCart = (id) => {
        return cart.some(item => item.id = id)
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