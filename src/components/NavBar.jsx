import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";

const NavBar = () =>{
    return(

        <div className="menu-container">
            <div className="menu">
                <h1 className="logo-menu"> FullGym </h1><FontAwesomeIcon icon={faDumbbell} className="logo"/>
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