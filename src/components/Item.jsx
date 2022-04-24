import "../estilos/Item.css"
import {Link} from "react-router-dom";



export default function Item({id, imagen, stock,name }) {
    return (
        <>
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={imagen} alt="Zapatillas"></img>
                    </div>
                    <div className="flip-card-back">
                        <h1>{name}</h1>
                        <p>En stock: {stock}</p>
                        <Link to={`item/${id}`}><button className="button">Detalles</button></Link>
                    </div>
                </div>
            </div>


        </>
    );
}
