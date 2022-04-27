import { doc, getDoc } from "firebase/firestore";
import db from "../utiles/FirebaseConfig"

//MOSTRAMOS TODOS LOS PRODUCTOS EN EL INICIO














//TRAEMOS EL DETALLE DE UN SOLO PRODUCTO
export const detalleProducts = async(id) => {

    const docRef = doc(db, "products", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: id,
            ...docSnap.data()
        }
    } else {
        // doc.data() will be undefined in this case
        console.log("No se encontro el producto");
    }
}