import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import trash from "./images/trash.svg"
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, removeItem, clear, cartTotal, sumTotal } = useContext(CartContext);

    if (cartTotal() === 0) {
        return (
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <div className="alert alert-danger" role="alert">No hay productos en el carrito.</div>
                    </div>
                    <div className="text-center">
                        <Link to={"/"} ><button className="btn btn-secondary">Volver al home</button></Link>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="container">
            <div className="row py-5">
                <h4 className="pt-3" style={{ fontFamily: "RazerF5", fontSize: 40 }}>Carrito</h4>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <tbody>
                            <tr>
                                <td colSpan={4}>&nbsp;</td>
                                <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="text-end"><button className="btn btn-light" onClick={() => { clear() }} title="Vaciar Carrito">Vaciar Carrito</button></td>
                            </tr>
                            <tr>
                            <td style={{color:"#44d62c", fontFamily: "RazerF5", fontSize: 20}} className="text-end">&nbsp;</td>
                            <td style={{color:"#44d62c", fontFamily: "RazerF5", fontSize: 20}} className="text-start">Detalle</td>
                            <td style={{color:"#44d62c", fontFamily: "RazerF5", fontSize: 20}} className="text-end">Cantidad</td>
                            <td style={{color:"#44d62c", fontFamily: "RazerF5", fontSize: 20}} className="text-end">Precio unitario</td>
                            <td style={{color:"#44d62c", fontFamily: "RazerF5", fontSize: 20}} className="text-end">Precio total</td>
                            </tr>
                            {
                                cart.map(item => (
                                    <tr key={item.id}>
                                        <td><img src={item.imagen} alt={item.titulo} width={80} /></td>
                                        <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="align-middle text-start">{item.titulo}</td>
                                        <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="align-middle text-end">{item.cantidad}</td>
                                        <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="align-middle text-end">${item.precio}</td>
                                        <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="align-middle text-end">${item.cantidad * item.precio}</td>
                                        <td style={{ fontFamily: "RazerF5", fontSize: 20}} className="align-middle text-end"><button className="btn btn-light" onClick={() => { removeItem(item.id) }} title="Eliminar Producto"><img src={trash} alt="Eliminar Producto" width={20} /></button></td>
                                    </tr>
                                ))
                            }
                            <tr>
                            <td style={{ fontFamily: "RazerF5", fontSize: 24}} colSpan={4} className="text-end"><b>Total a pagar</b></td>
                            <td style={{ fontFamily: "RazerF5", fontSize: 24}} className="text-center">${sumTotal()}</td>
                                <td>&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart;