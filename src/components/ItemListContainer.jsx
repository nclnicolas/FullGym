import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos from "../utiles/productos";
import customFetch from "../utiles/customFetch";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../utiles/FirebaseConfig";

//Aca tenemos nuestros articulos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams(); //HOOK

//Obtenemos los productos con una promesa
    useEffect(() => {
        const fetchFirestore = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const dataFirestore = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data() //Esto significa el resto de la informacion
            }));
            return dataFirestore;
        }
        fetchFirestore()
        .then(result => setProductos(result))
        .catch(err => console.log(err));
    }, [datos]);

    return (
        <ItemList items={datos} />
    );
}

//Exportamos el componente
export default ItemListContainer;