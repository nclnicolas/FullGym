import { useEffect, useState } from "react"
import productos  from "../utiles/productos";
import ItemDetail from "./ItemDetail";
import customFetch from "../utiles/customFetch";

const ItemDetailContainer = ()=>{
    const [datos, setDato] = useState({});

    useEffect(() => {
        
        customFetch(2000, productos[2])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return(
        <ItemDetail item={datos} />
    );
}
export default ItemDetailContainer; 