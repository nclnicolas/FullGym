
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getProductos } from "../utiles/productos";

//Aca tenemos nuestros articulos
const ItemListContainer = () => {
    const [datos, setProductos] = useState([]);

    //Se muestra un alert al agregar los articulos
    const onAdd = (items) => {
        alert(`${items} items added to cart`);
    }
    
    useEffect(() => {
        //Obtenemos los productos con una promesa
        async function fetchData() {
            let data = await getProductos();
            setProductos(data);
            }
        fetchData();
        }, []);

        return (               
            <ItemList items={datos} initial={1} onAdd={onAdd}/>           
        );          
}

//Exportamos el componente
export default ItemListContainer;