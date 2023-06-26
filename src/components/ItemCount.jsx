import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ItemCount = ({stock, onAdd}) => {
    const [items, setItems] = useState(1);
    const [itemStock, setItemStock] = useState(stock);
    const [itemAdded, setItemAdded] = useState(false);

    const handleSumar = () => {
        if (items < itemStock) {
            setItems(items + 1);
        }
    }

    const handleRestar = () => {
        if (items > 1) {
            setItems(items - 1);
        }
    }

    const addToCart = () => {
        if (items <= itemStock) {
            setItemStock(itemStock - items);
            setItems(1);
            setItemAdded(true);
            onAdd(items);
        }
    }

    useEffect(() => {
        setItemStock(stock);
    }, [stock]);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group w-100" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-light" onClick={handleRestar}>-</button>
                        <button type="button" className="btn btn-light">{items}</button>
                        <button type="button" className="btn btn-light" onClick={handleSumar}>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col pt-3">
                    {itemAdded ? <Link to={"/cart"} className="btn btn-secondary w-100">Finalizar Compra</Link> : <button type="button" className="btn btn-secondary w-100" onClick={addToCart}>Agregar al Carrito</button>}
                </div>
            </div>
        </div>        
    )
}

export default ItemCount;