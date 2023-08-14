import { Link } from "react-router-dom";
import logo_1 from "../static/logo_1-round.ico"; 
import logo_2 from "../static/logo_2-round.ico"; 


const NavBar = () => 
{


    return (
        <div className="navbar__wrapper"> 
            <img src = {logo_2} className="navbar__icon" />
            <div className ="navbar__buttons"> 
                <Link to = {"reg"} className = "navbar__link"> Регистрация </Link>
                <Link to = {"signin"} className = "navbar__link" > Вход </Link>
            </div>
        
        </div>



    );
}


export default NavBar;