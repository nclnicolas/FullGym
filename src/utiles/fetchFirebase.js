import { query, orderBy, where, collection, getDocs } from '@firebase/firestore';
import { doc, getDoc } from "firebase/firestore";
import db from "../utiles/FirebaseConfig"

export const firestoreFetch = async(idCategory) => {
    let categoria;
    if (idCategory) {
        categoria = query(collection(db, "products"), where('idCategory', '==', idCategory));
    } else {
        categoria = query(collection(db, "products"), orderBy('name'));
    }
    const querySnapshot = await getDocs(categoria);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

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