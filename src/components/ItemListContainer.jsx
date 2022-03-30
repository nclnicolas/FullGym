import ItemCount from "./ItemCount";

const ItemListContainer = ({props})=>{
    return(
        <>
        <h3>{props}</h3>
        <ItemCount></ItemCount>
        </>
    );
}

export default ItemListContainer;