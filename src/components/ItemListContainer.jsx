
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import productos from "../utiles/productos";
import customFetch from "../utiles/customFetch";
import { useParams } from "react-router-dom";

//Aca tenemos nuestros articulos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams(); //HOOK

    useEffect(() => {
        //Obtenemos los productos con una promesa
        if (idCategory == undefined) {
            customFetch(2000, productos)
                .then(result => setProductos(result))
                .catch(err => console.log(err))
        } else {
            customFetch(2000, productos.filter(item => item.idCategory === parseInt(idCategory)))
                .then(result => setProductos(result))
                .catch(err => console.log(err))
        }
    }, [idCategory]);

    return (
        <ItemList items={datos} />
    );
}

//Exportamos el componente
export default ItemListContainer;