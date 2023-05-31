import { Link } from "react-router-dom";

const Item = ({item}) => {
    return (
        <>
            <div className="col-md-4">
                <div key={item.idx} className="p-3">
                    <div className="card border-0">
                        <Link to={"/item/" + item.idx} className="text-dark text-decoration-none">
                            <img src={item.imagen} className="card-img-top" alt={item.titulo} />
                                <div className="card-body">
                                    <p className="card-text" style={{ fontFamily: "RazerF5" , fontSize: 23 }}><b>{item.titulo}</b></p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5", fontSize: 15 , textTransform: "capitalize" }}>{item.categoria}</p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5" }}>{item.descripcion}</p>
                                    <p className="card-text" style={{ fontFamily: "RazerF5", color: "#44d62c" , fontSize: 23}}>${item.precio}</p>
                                </div>
                            </Link>    
                    </div>
                </div>
            </div>
        </>
    )
}

export default Item;