import { useEffect, useState } from "react";

const ItemCount = ({stock}) => {
    const [items, setItems] =  useState(1);
    const [itemStock, setItemStock] = useState(stock);

    const handleSumar = () => {
        items < itemStock && setItems(items +1);  
    }

    const handleRestar = () => {
        items > 1 && setItems(items -1);
    }

    const onAdd = () => {
        items <= itemStock && setItemStock(itemStock - items);
        itemStock === 0 ? setItems(0) : setItems (1);        
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
                        <button type="button" className="btn btn-light">{items}</button>
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