import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import productos from "./json/productos.json";
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(id ? productos.filter(item => item.categoria === id) : productos);
            }, 2000);
        });

        promesa.then(data => {
            setDatos(data);
        });
    }, [id]);

    return (
        <div className="container">
            <div className="row py-5">
                <h4 className="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Products</h4>
                <ItemList listadoItems={datos}/>          
            </div>
        </div>
    )
}

export default ItemListContainer;