
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos  from "../utiles/productos";
import customFetch from "../utiles/customFetch";

//Aca tenemos nuestros articulos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    
    useEffect(() => {
        //Obtenemos los productos con una promesa
        customFetch(2000, productos)
        .then(result => setProductos(result))
        .catch(err => console.log(err))
    }, []);

        return (               
            <ItemList items={datos} />           
        );          
}

//Exportamos el componente
export default ItemListContainer;