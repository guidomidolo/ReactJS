import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <>
            <div className="col-md-4">
                <div key={producto.id} className="p-3">
                    <div className="card border-0">
                        <Link to={"/item/" + producto.id} className="text-dark text-decoration-none">
                            <img src={producto.imagen} className="card-img-top" alt={producto.titulo} />
                                <div className="card-body">
                                    <p className="card-text" style={{ fontFamily: "RazerF5" , fontSize: 23 }}><b>{producto.titulo}</b></p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5", fontSize: 15 , textTransform: "capitalize" }}>{producto.categoria}</p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5" }}>{producto.descripcion}</p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5", color: "#44d62c" , fontSize: 23}}>${producto.precio}</p>
                                </div>
                            </Link>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;