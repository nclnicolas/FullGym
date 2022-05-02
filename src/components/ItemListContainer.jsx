import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../utiles/fetchFirebase";

//Aca tenemos nuestros articulos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);
    const { idCategory } = useParams(); //HOOK

    //Obtenemos los productos con una promesa
    //componentDidUpdate
    useEffect(() => {
        firestoreFetch(idCategory)
            .then(result => setProductos(result))
            .catch(err => console.log(err));
    }, [idCategory]);

    //componentWillUnmount
    useEffect(() => {
        return (() => {
            setProductos([]);
        })
    }, []);

    return (
        <ItemList items={datos} />
    );
}
//Exportamos el componente
export default ItemListContainer;