import { CartContext } from "../context/CartContext";
import cart from "./images/cart.svg"
import React from "react";


const CartWidget = () => {
    const itemsCarrito = React.useContext(CartContext); 
    return (
        <button type="button" className="btn btn-dark position-relative">
            <img src={cart} alt={"Carrito de compras"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{itemsCarrito}</span>
        </button>
    )
}

export default CartWidget;