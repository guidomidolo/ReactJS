import { useState, useEffect } from "react";
import ItemList from "./ItemList";
// import productos from "./json/productos.json";
import { useParams } from "react-router-dom";
// import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getFirestore, getDocs, collection, query, where} from "firebase/firestore";
// import { getFirestore, collection, addDoc } from "firebase/firestore";


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

    // // Acceder a un documento desde Firestore
    //     useEffect(() => {
    //         const db = getFirestore();
    //         const producto = doc(db, "productos", "GU6NMV51WzYFfw8dpajj")
    //         getDoc(producto).then(resultado => {
    //             if (resultado.exists()) {
    //                 setDatos({id:resultado.id, ...resultado.data()})
    //             }
    //             console.log(datos);
    //         });
    // }, []);

    // // Acceder a los una colección desde Firestore
    //     useEffect(() => {
    //         const db = getFirestore();
    //         const productosCollection = collection(db, "productos");
        //     getDocs(productosCollection).then(resultado => {    
        //         setDatos(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
        //     });
        // }, []);
        
    //     console.log(datos);

        // Acceder a una colección desde Firestore con filtros
        useEffect(() => {
            const db = getFirestore();
            const productosCollection = collection(db, "productos");
            const q = id ? query(productosCollection, where("categoria", "==", id)) : productosCollection;
            getDocs(q).then(resultado => {    
                if (resultado.size >= 1 ) {
                    setDatos(resultado.docs.map(producto => ({id:producto.id, ...producto.data()})));
                }
            });
        }, [id]);
        
        // // Proceso de importación de JSON a base de datos Firestore
        // useEffect(() => {
        //     const db = getFirestore();
        //     const productosCollection = collection(db, "productos")
            
        //     productos.forEach(prod => {
        //         addDoc(productosCollection, prod);
        //     });        
        //     console.log("Productos cargados!");
        // }, []);

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