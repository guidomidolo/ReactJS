import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import carrito from "./images/cart.svg"
import { useContext } from "react";


const CartWidget = () => {    
        const { cartTotal }  = useContext(CartContext); 

    return (
        <Link to={"/cart"}className="btn btn-dark position-relative">
            <img src={carrito} alt={"Carrito de compras"} width={24}/>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">{cartTotal()}</span>
        </Link>
    )
}

export default CartWidget;