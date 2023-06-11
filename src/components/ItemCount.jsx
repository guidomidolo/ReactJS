import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";


const ItemCount = ({stock}) => {
    const { itemsSeleccionados, setItemsSeleccionados } = useContext(CartContext);
    const [itemStock, setItemStock] = useState(stock);

    const handleSumar = () => {
        itemsSeleccionados < itemStock && setItemsSeleccionados(itemsSeleccionados +1);  
    }

    const handleRestar = () => {
        itemsSeleccionados > 1 && setItemsSeleccionados(itemsSeleccionados -1);
    }

    
    const { itemsEnCarrito, handleCarrito } = useContext(CartContext); 

    const onAdd = () => {
        itemsSeleccionados <= itemStock && setItemStock(itemStock - itemsSeleccionados);
        itemStock === 0 ? setItemsSeleccionados(0) : setItemsSeleccionados (1);  
        handleCarrito();

    }

    useEffect(() => {
        setItemStock(stock)
    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p>Productos en stock: {itemStock}</p>
                    <div className="btn-group w-100" role="group" aria-label="Basic mixed styles example">
                        <button type="button" className="btn btn-light" onClick={handleRestar}>-</button>
                        <button type="button" className="btn btn-light">{itemsSeleccionados}</button>
                        <button type="button" className="btn btn-light" onClick={handleSumar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col pt-3">
                    {
                        itemStock > 0 ? <button type="button" className="btn btn-secondary w-100" style={{}} onClick={onAdd} >Añadir al carrito</button> : <button type="button" className="btn btn-secondary w-100 disabled" onClick={onAdd} >Añadir al carrito</button>
                    }
                </div>
            </div>
        </div>


    )
}

export default ItemCount;