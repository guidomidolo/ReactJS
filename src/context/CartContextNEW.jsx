import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    
    const [cart, setCart] = useState([]);

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(product => product.id === item.id)
            cart[pos].cantidad += quantity;
            setCart([...cart])
        } else {
            setCart([...cart, {...item, cantidad:quantity}])
        }

    };

    const removeItem = (id) => {
        const items = cart.filter(product => product.id !==  id)
        setCart([...items])

    };

    const clear = () =>  {
        setCart([]);

    }

    const isInCart = (id) => {
        return cart.some(product => product.id = id)
    }


    
    
    
    return (
        <div>
            <CartContext.Provider value={{isInCart, clear, removeItem, addItem}}>
                {children}
            </CartContext.Provider>

        </div>
    )
}

export default CartContextProvider;