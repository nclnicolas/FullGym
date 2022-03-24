import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () =>{
    return(

        <div className="menu-container">
            <div className="menu">
                <h1 className="logo-menu"> FullGym </h1><FontAwesomeIcon icon={faDumbbell} className="logo"/>
                <nav className="navbar navbar">
                    <div className="container-fluid">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Busca en catalogo" aria-label="Search"></input>
                                <button className="btn btn-danger" type="submit">Buscar</button>
                        </form>
                    </div>
                </nav>
                <div className="nav-menu">
                    <a href="" className="item-menu"> Catalogo </a>
                    <a href="" className="item-menu"> Reservas </a>
                    <a href="" className="item-menu"> Nosotros </a>
                </div>

            </div>
        </div>

    );
}
export default NavBar;