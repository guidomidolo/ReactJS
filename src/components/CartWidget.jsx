import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import cart from "./images/cart.svg"
import { useContext } from "react";


const CartWidget = () => {    
        const { itemsEnCarrito }  = useContext(CartContext); 

    return (
        <Link to={"/cart"}className="btn btn-dark position-relative">
            <img src={cart} alt={"Carrito de compras"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{itemsEnCarrito === 0 ? "" : itemsEnCarrito}</span>
        </Link>
    )
}

export default CartWidget;