
import logo_1 from "../static/logo_1-round.ico"; 
import logo_2 from "../static/logo_2-round.ico"; 


const NavBar = () => 
{


    return (
        <div className="navbar__wrapper"> 
            <img src = {logo_2} className="navbar__icon" />
            <div className ="navbar__buttons"> 
                <a className = "navbar__link" href = {"#"} > Регистрация </a>
                <a className = "navbar__link" href = {"#"} > Вход </a>
            </div>
        
        </div>



    );
}


export default NavBar;