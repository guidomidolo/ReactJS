import ItemCount from "./ItemCount";

const ItemDetail = ( {producto} ) => {
    
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
                    <ItemCount stock={producto.stock} />
               </div>
            </div>
        </div>
    )
}

export default ItemDetail;