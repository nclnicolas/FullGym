
import './App.css';
import NavBar from "./components/NavBar";
import ItemListContainer from './components/ItemListContainer';

function App() {
    return ( 
      <>
      
      <NavBar></NavBar>
      <ItemListContainer props="Hola Mundo" /> 
      </>
    );
}

export default App;