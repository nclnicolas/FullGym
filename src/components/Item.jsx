import "../estilos/Item.css"

export default function Item({ imagen,description, stock, precio,name }) {
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
                        <button className="button">Detalles</button>
                    </div>
                </div>
            </div>


        </>
    );
}
