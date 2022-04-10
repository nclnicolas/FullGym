import { useEffect, useState } from "react"
import productos  from "../utiles/productos";
import ItemDetail from "./ItemDetail";
import customFetch from "../utiles/customFetch";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ()=>{
    const [datos, setDato] = useState({});
    const {id} = useParams();

    useEffect(() => {
        customFetch(2000, productos.find(item => item.id === parseInt(id)))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [id]);

    return(
        <ItemDetail item={datos} />
    );
}
export default ItemDetailContainer; 