import './estilos/NavBar.css';
import "./estilos/CartWidget.css"
import "./estilos/ItemCount.css"
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
    return ( 
      <>
      
      <NavBar></NavBar>
       {/* <ItemListContainer />  */} 
      <ItemDetailContainer />
      </>
    );
}

export default App;