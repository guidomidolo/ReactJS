import { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import productos from "./json/productos.json";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const {id} = useParams();
    
    // Acceder a los productos desde JSON
    // useEffect(() => {
    //     const promesa = new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(id ? productos.filter(item => item.categoria === id) : productos);
    //         }, 2000);
    //     });

    //     promesa.then(data => {
    //         setDatos(data);
    //     });
    // }, [id]);

    // Acceder a los productos desde Firestone
        useEffect(() => {
            const db = getFirestore();
            const producto = doc(db, "items", "GU6NMV51WzYFfw8dpajj")
            getDoc(producto).then(resultado => {
                console.log(resultado);
                console.log("ID del producto: " + resultado.id);
            })
    }, []);

    return (
        <div className="container">
            <div className="row py-5">
                <h4 className="pt-3" style={{ fontFamily: "RazerF5" , fontSize : 40}}>Products</h4>
                {/* <ItemList listadoItems={datos}/>           */}
            </div>
        </div>
    )
}

export default ItemListContainer;