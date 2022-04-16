import './estilos/NavBar.css';
import "./estilos/CartWidget.css"
import "./estilos/ItemCount.css"
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart"
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CartContextProvider from './components/CartContext';

function App() {
  return (
    <>
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:idCategory" element={<ItemListContainer />} />
          <Route path="/category/:idCategory/item/:id" element={<ItemDetailContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />}/>
        </Routes> 
      </BrowserRouter>
      </CartContextProvider>
    </>
  );
}

export default App;