import { useContext, useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";

const ItemDetail = ({producto}) => {
    const {addItem} = useContext(CartContext);
    const [item, setItem] = useState({});

    const onAdd = (quantity) => {
        addItem(item, quantity);
    }
    
    useEffect(() => {
        setItem(producto);
    }, [producto]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={producto.imagen} alt={producto.titulo} className="img-fluid" />
                </div>
                <div className="col-md-5 offset-md-1" style={{ fontFamily: "RazerF5" , fontWeight : "bold"}}>
                    <h1 className="pt-5 pb-5">{producto.titulo}</h1>
                    <p style={{ fontFamily: "RazerF5", color: "#b2b2b2" , fontSize: 20}}>{producto.descripcion}</p>
                    <p style={{ fontFamily: "RazerF5", color: "#44d62c" , fontSize: 40}}>$<b>{producto.precio}</b></p>
                    <ItemCount stock={producto.stock} onAdd={onAdd} />
               </div>
            </div>
        </div>
    )
}

export default ItemDetail;